// Generates a self-hosted stats badge (assets/stats.svg) for the GitHub
// profile README. Runs inside GitHub Actions on a schedule. Uses only the
// GitHub REST + GraphQL APIs and the default GITHUB_TOKEN — no third-party
// stats services, so nothing here can go down except GitHub itself.
//
// Why this exists: komarev.com / img.shields.io / streak-stats.demolab.com
// all call out to a live third-party server every time someone loads the
// profile page. When that server is slow, rate-limited or down, the badge
// just doesn't render. This script instead runs periodically, computes the
// numbers itself, and bakes them into a static SVG committed to the repo —
// so the README always points at a file that already exists.

const fs = require("fs");
const path = require("path");

const USERNAME = process.env.GH_USERNAME || "moon21bd";
const TOKEN = process.env.GITHUB_TOKEN;
const REPO = `${USERNAME}/${USERNAME}`;

if (!TOKEN) {
  console.error("GITHUB_TOKEN is required");
  process.exit(1);
}

const restHeaders = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: "application/vnd.github+json",
  "User-Agent": "profile-stats-script",
};

const graphqlHeaders = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
  "User-Agent": "profile-stats-script",
};

async function getFollowers() {
  const res = await fetch(`https://api.github.com/users/${USERNAME}`, { headers: restHeaders });
  if (!res.ok) throw new Error(`followers fetch failed: ${res.status}`);
  const data = await res.json();
  return { followers: data.followers, createdAt: data.created_at };
}

async function getTrafficViews() {
  // Requires push access to the repo — the Actions token has this because
  // the workflow runs inside the same repo with write permissions enabled.
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/traffic/views`, { headers: restHeaders });
    if (!res.ok) return [];
    const data = await res.json();
    return data.views || []; // [{ timestamp, count, uniques }] for the last 14 days
  } catch {
    return [];
  }
}

function loadViewsHistory(file) {
  if (fs.existsSync(file)) {
    try {
      return JSON.parse(fs.readFileSync(file, "utf8"));
    } catch {
      return {};
    }
  }
  return {};
}

function mergeViewsHistory(history, freshViews) {
  for (const v of freshViews) {
    const day = v.timestamp.slice(0, 10); // YYYY-MM-DD
    history[day] = v.count; // GitHub gives the authoritative count for that day
  }
  return history;
}

function sumHistory(history) {
  return Object.values(history).reduce((a, b) => a + b, 0);
}

async function graphql(query, variables) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: graphqlHeaders,
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`graphql failed: ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

const CONTRIB_QUERY = `
  query($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

async function getAllContributionDays(createdAt) {
  const startYear = new Date(createdAt).getUTCFullYear();
  const currentYear = new Date().getUTCFullYear();

  let totalContributions = 0;
  const days = [];

  for (let year = startYear; year <= currentYear; year++) {
    const from = `${year}-01-01T00:00:00Z`;
    const to = `${year}-12-31T23:59:59Z`;
    const data = await graphql(CONTRIB_QUERY, { login: USERNAME, from, to });
    const cal = data.user.contributionsCollection.contributionCalendar;
    totalContributions += cal.totalContributions;
    for (const week of cal.weeks) {
      for (const day of week.contributionDays) {
        days.push(day);
      }
    }
  }

  days.sort((a, b) => (a.date < b.date ? -1 : 1));
  return { totalContributions, days };
}

function computeStreaks(days) {
  const today = new Date().toISOString().slice(0, 10);
  let longest = 0;
  let running = 0;

  for (const d of days) {
    if (d.contributionCount > 0) {
      running += 1;
      longest = Math.max(longest, running);
    } else {
      running = 0;
    }
  }

  // Current streak: walk backwards from the most recent day. Allow today to
  // be a zero-contribution day without breaking the streak (the day isn't
  // over yet) — otherwise the streak ends at the first zero.
  let current = 0;
  for (let i = days.length - 1; i >= 0; i--) {
    const d = days[i];
    if (d.contributionCount > 0) {
      current += 1;
    } else if (d.date === today) {
      continue; // today hasn't happened yet, don't break the streak
    } else {
      break;
    }
  }

  return { current, longest };
}

function renderSVG({ views, followers, totalContributions, currentStreak, longestStreak }) {
  const stats = [
    { label: "Profile Views", value: views },
    { label: "Followers", value: followers },
    { label: "Total Contributions", value: totalContributions },
    { label: "Current Streak", value: currentStreak },
    { label: "Longest Streak", value: longestStreak },
  ];

  const width = 830;
  const height = 130;
  const cellWidth = width / stats.length;

  const cells = stats
    .map((s, i) => {
      const cx = cellWidth * i + cellWidth / 2;
      const divider = i > 0 ? `<line x1="${cellWidth * i}" y1="24" x2="${cellWidth * i}" y2="${height - 24}" stroke="#3a3a5c" stroke-width="1"/>` : "";
      return `
        ${divider}
        <text x="${cx}" y="62" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="30" font-weight="700" fill="#8f9dff">${s.value}</text>
        <text x="${cx}" y="92" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="13" fill="#a9a9c7">${s.label}</text>
      `;
    })
    .join("\n");

  const updated = new Date().toISOString().slice(0, 10);

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a1b3a"/>
      <stop offset="100%" stop-color="#2d1b4e"/>
    </linearGradient>
  </defs>
  <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" rx="14" fill="url(#bg)" stroke="#3a3a5c"/>
  ${cells}
  <text x="${width - 14}" y="${height - 10}" text-anchor="end" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="9" fill="#5a5a7c">updated ${updated}</text>
</svg>`;
}

async function main() {
  const { followers, createdAt } = await getFollowers();
  const freshViews = await getTrafficViews();

  const historyFile = path.join(__dirname, "..", "data", "views-history.json");
  fs.mkdirSync(path.dirname(historyFile), { recursive: true });
  let history = loadViewsHistory(historyFile);
  history = mergeViewsHistory(history, freshViews);
  fs.writeFileSync(historyFile, JSON.stringify(history, null, 2) + "\n");
  const views = sumHistory(history);

  const { totalContributions, days } = await getAllContributionDays(createdAt);
  const { current, longest } = computeStreaks(days);

  const svg = renderSVG({
    views,
    followers,
    totalContributions,
    currentStreak: current,
    longestStreak: longest,
  });

  const outFile = path.join(__dirname, "..", "assets", "stats.svg");
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, svg);

  console.log(`views=${views} followers=${followers} total=${totalContributions} current=${current} longest=${longest}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

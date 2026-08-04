![Header](https://capsule-render.vercel.app/api?type=waving&color=0:667eea,100:764ba2&height=180&section=header&text=Raqibul%20Hasan%20Moon&fontSize=42&fontColor=ffffff&fontAlignY=45)

<p align="center">Senior Backend Engineer — Payments, Fintech &amp; Telecom</p>

<div align="center">

![Profile views](https://komarev.com/ghpvc/?username=moon21bd&label=Profile%20views&color=667eea&style=flat-square)
![Followers](https://img.shields.io/github/followers/moon21bd?label=Followers&style=flat-square&color=667eea)

</div>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/moon21bd/moon21bd/output/github-contribution-grid-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/moon21bd/moon21bd/output/github-contribution-grid-snake.svg" />
  <img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/moon21bd/moon21bd/output/github-contribution-grid-snake.svg" />
</picture>

## Raqibul Hasan Moon

Senior Software Engineer, 10 years, Dhaka. Backend systems for payments,
telecom and fintech — the kind where a duplicated request costs money and a
missed callback becomes a support ticket.

Currently at Dotlines, working on the multi-provider payment layer behind a
cross-border recharge and wallet platform (300K+ registered users, 10,000+
daily active). Mostly **PHP/Laravel** and **Node.js**, with React and Vue on
the front end, and enough Python to keep the pipelines honest.

🌱 Currently picking up: **Go**, **Kubernetes** — outside production so far, learning in side projects.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/moon21)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:rhmoon21@gmail.com)
[![Open to work](https://img.shields.io/badge/Open%20to-Senior%20Backend%20%2F%20Tech%20Lead-2ea44f?style=for-the-badge)](https://linkedin.com/in/moon21)

#### Stack

![Skills](https://skillicons.dev/icons?i=php,laravel,nodejs,express,nestjs,nextjs,js,ts,react,vue,graphql,mysql,redis,docker,aws,git,py&theme=dark)

---

### Systems I've built

| System | What it does | Scale / impact |
|---|---|---|
| **Cross-border recharge & wallet platform** | Recharge, bill payment and wallet for migrant communities; I own the core transaction-processing layer | 300K+ registered · 10,000+ daily active · 99.9% uptime |
| **Multi-provider payment abstraction** | 9 payment providers behind one interface — automatic failover, exponential-backoff retry, dead-letter queues | Transaction success **91% → 97.5%** |
| **Cross-border remittance integration** | Built end to end: cash-in, wallet funding, earning reports, transaction history | **$2M+ monthly** volume · +25% platform revenue |
| **Duplicate-request detection** | Redis SHA-256 request fingerprinting with configurable TTL | ~5,000 duplicate charges/month prevented · chargebacks **−45%** |
| **Automated refund pipeline** | Idempotent refunds with wallet auto-crediting | Customer complaints **−70%** · 40+ hours/month of manual work removed |
| **Digital wallet (Laos)** | Wallet transfers, agent commissions, subscription billing, eKYC with JWE encryption | 50,000+ transactions in first quarter |
| **Real-time quiz platform** | Timed gameplay, Redis leaderboards, queue-driven reward payouts | 5,000+ concurrent users · 99.5% uptime · zero payment failures |
| **Third-party integration layer** | Telecom, banking, payment and utility APIs with retry logic and full reconciliation | 100+ integrations |

---

### The repositories below

Most of my work is closed-source, so these are **generalised reference
implementations**: the real architecture, control flow and data model, with
every employer, vendor and customer identifier removed. Each one has a
`README` and an `ARCHITECTURE.md` explaining the design decisions **and their
trade-offs** — that document is usually the more interesting half.

Commit dates are backdated to when the original work was done. Each commit
message says so plainly.

#### Payments & fintech
| | |
|---|---|
| [multi-provider-order-orchestrator](https://github.com/moon21bd/multi-provider-order-orchestrator) | Queue-driven orchestration across providers — priority failover, idempotent references, webhook re-verification, lifecycle tracing with credential redaction. *Lumen* |
| [mobile-wallet-backend](https://github.com/moon21bd/mobile-wallet-backend) | Three-level transaction limit engine with scheduled resets, staged KYC, JWE with zero-downtime key rotation. *Laravel* |
| [usage-balance-metering-service](https://github.com/moon21bd/usage-balance-metering-service) | Prepaid metering — settle-after-delivery, `min(actual, reserved)`, idempotent settlement flags. *Laravel* |
| [invoice-generation-service](https://github.com/moon21bd/invoice-generation-service) | Invoicing — staged recurring-schedule edits, payment callback as the authoritative event. *Laravel* |
| [payment-gateway-platform-2018](https://github.com/moon21bd/payment-gateway-platform-2018) | Where this started: multi-PSP gateway, module per processor, reconciliation sweep for lost callbacks. *CodeIgniter, 2018* |

#### Platform & infrastructure
| | |
|---|---|
| [multi-mode-request-api](https://github.com/moon21bd/multi-mode-request-api) | One pipeline as sync / async-callback / sandbox; duplicate suppression via a single atomic `SET NX EX`. *Node/Express + Sequelize* |
| [modular-domain-composer](https://github.com/moon21bd/modular-domain-composer) | Modular-monolith API gateway — JWE payloads with per-client keys, attribute-level RBAC. *Node/Express* |
| [iot-telemetry-platform](https://github.com/moon21bd/iot-telemetry-platform) | Device telemetry — dual ingestion paths, archive-before-parse, replayable backlog, rebuildable rollups. *Laravel* |
| [scheduled-export-pipeline](https://github.com/moon21bd/scheduled-export-pipeline) | Multi-server export — pre-flight checks, correct CSV quoting, idempotent backfill. *Bash + MySQL + SMB* |
| [multi-tenant-commerce-api](https://github.com/moon21bd/multi-tenant-commerce-api) | Tenancy as middleware, so scoping can't be omitted by a forgotten filter. *Laravel* |

#### Products & tooling
| | |
|---|---|
| [support-ticket-management-system](https://github.com/moon21bd/support-ticket-management-system) | Scheduled SLA engine that escalates and reassigns on breach, per-transition audit timeline. *Laravel + Vue* |
| [tournament-competition-engine](https://github.com/moon21bd/tournament-competition-engine) | Absolute per-question windows so every player answers in the same wall-clock slot. *Laravel* |
| [laravel-crud-scaffold-toolkit](https://github.com/moon21bd/laravel-crud-scaffold-toolkit) | One field definition feeds model, migration, request, controller, tests and Vue views. *Laravel* |
| [multi-channel-notification-dispatcher](https://github.com/moon21bd/multi-channel-notification-dispatcher) | Per-token delivery tracking and honest partial-send status. *Laravel* |
| [node-microservice-scaffold](https://github.com/moon21bd/node-microservice-scaffold) | Filesystem-discovered models and schemas, one error type, one response envelope. *Node/Express* |

---

### A few things I've come to believe

**A callback is a hint, not a fact.** If a provider doesn't sign its webhooks,
the callback only means "go ask them what happened" — never "this succeeded."

**Derived data should be rebuildable.** Daily summaries, balances, counters —
if you can only append to them, they're permanently wrong the first time
something backfills.

**Reconcile for silence.** The failure that hurts is the one that produces no
error: a callback that never came, a ticket that was never created. Those need
a sweep looking for them, not an alert waiting for them.

**Write down why, not what.** The `ARCHITECTURE.md` in each repo explains the
trade-off that was accepted. Six months later that's the only part anyone
needs.

---

### GitHub activity

<div align="center">

![Moon's GitHub stats](https://github-readme-stats.demolab.com/api?username=moon21bd&show_icons=true&theme=tokyonight&hide_border=true&hide=contribs)
![Top languages](https://github-readme-stats.demolab.com/api/top-langs/?username=moon21bd&layout=compact&theme=tokyonight&hide_border=true&hide=html,css)

![Streak stats](https://streak-stats.demolab.com/?user=moon21bd&theme=tokyonight&hide_border=true)

</div>

---

*Open to senior backend and technical lead roles — remote or Dhaka.*

![Footer](https://capsule-render.vercel.app/api?type=waving&color=0:764ba2,100:667eea&height=100&section=footer)

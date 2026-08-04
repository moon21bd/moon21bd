## Raqibul Hasan Moon

Senior Software Engineer, 10 years, Dhaka. Backend systems for payments,
telecom and fintech — the kind where a duplicated request costs money and a
missed callback becomes a support ticket.

Currently at Dotlines, working on the multi-provider payment layer behind a
cross-border recharge and wallet platform (300K+ registered users, 10,000+
daily active). Mostly **PHP/Laravel** and **Node.js**, with React and Vue on
the front end, and enough Python to keep the pipelines honest.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/moon21)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:rhmoon21@gmail.com)
[![Open to work](https://img.shields.io/badge/Open%20to-Senior%20Backend%20%2F%20Tech%20Lead-2ea44f?style=for-the-badge)](https://linkedin.com/in/moon21)

#### Stack

![PHP](https://img.shields.io/badge/-PHP-777BB4?style=flat-square&logo=php&logoColor=white)
![Laravel](https://img.shields.io/badge/-Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vue.js](https://img.shields.io/badge/-Vue.js-4FC08D?style=flat-square&logo=vue.js&logoColor=white)
![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Redis](https://img.shields.io/badge/-Redis-DC382D?style=flat-square&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white)
![Python](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white)

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

![Moon's GitHub stats](https://github-readme-stats.vercel.app/api?username=moon21bd&show_icons=true&count_private=true&theme=tokyonight&hide=contribs)
![Top languages](https://github-readme-stats.vercel.app/api/top-langs/?username=moon21bd&layout=compact&theme=tokyonight&hide=html,css)

<a href="https://github.com/moon21bd">
  <img src="https://komarev.com/ghpvc/?username=moon21bd&label=Profile%20views&color=2ea44f&style=flat" alt="Profile views" />
</a>

---

*Open to senior backend and technical lead roles — remote or Dhaka.*

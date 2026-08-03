## Raqibul Hasan Moon

Senior Software Engineer, 10 years, Dhaka. Backend systems for payments,
telecom and fintech — the kind where a duplicated request costs money and a
missed callback becomes a support ticket.

Currently at Dotlines, working on the multi-provider payment layer behind a
cross-border recharge and wallet platform (300K+ registered users, 10,000+
daily active). Mostly **PHP/Laravel** and **Node.js**, with React and Vue on
the front end, and enough Python to keep the pipelines honest.

[LinkedIn](https://linkedin.com/in/moon21) · rhmoon21@gmail.com

---

### What I've shipped

- A 9-provider payment-gateway abstraction with automatic failover and
  dead-letter queues — transaction success rate went from **91% to 97.5%**
- A cross-border remittance integration end to end, carrying **$2M+ monthly**
- Redis-based duplicate-request detection that stops **~5,000 duplicate charges
  a month** and cut chargebacks by **45%**
- An idempotent refund pipeline that removed **40+ hours of manual work a month**
- 100+ third-party integrations — telecom, banking, payment, utility — with
  retry logic and full reconciliation

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
| [brighton-education](https://github.com/moon21bd/brighton-education) | **My own product** — [brightonielts.com](https://brightonielts.com). Timed exam engine, resumable attempts, device binding. *Laravel 12 + React* |
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

*Open to senior backend and technical lead roles — remote or Dhaka.*

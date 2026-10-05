# ADR-001: Canonical paths in the unified repo

Status: accepted, 2026-10-05

## Decision

- **Serve** = `apps/fantasyhub/`. Vercel points its root directory here; `vercel.json`, `api/`, and `public/` live inside it.
- **Research + UI source** = `research/`. The projection pipeline, its tests, and the Vite frontend source (`research/hub/`).
- **Root `.github/workflows/` is the only active CI/cron.** Per-directory `.github/` directories were removed on assembly — GitHub ignores anything not at the repository root.
- **Both source repositories stay as history archives** (`Liam0376/fantasyhub`, `Liam0376/gridiron-analytics`). This repository is canonical for all new work.
- Assembly used `git subtree --squash`: one import commit per source tree, referencing the source HEAD it was taken from. Full histories stay searchable in the two source repositories (`Liam0376/fantasyhub`, `Liam0376/gridiron-analytics`).

## Consequences

- Pushes here deploy to Vercel (root directory `apps/fantasyhub`).
- The daily projections cron commits under `apps/fantasyhub/data/` from the root workflow.
- Old repos receive no new commits other than archive notes.

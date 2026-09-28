# Base Backend — UMKM Template

A **blank backend base** (Bun + [Hono](https://hono.dev)) to start a new API
from scratch. No database, no domain modules — just a clean, typed foundation
with a health check and the typed response/error envelope.

## Stack

- Bun + Hono + TypeScript (strict)
- Typed success/error envelopes, ready for you to add modules

## Quick start

```bash
bun install
bun run dev            # http://localhost:3000
```

## What's included

- `src/index.ts` — Hono app, logger, CORS, health check, error handler
- `src/env.ts` — zod-validated environment
- `src/http/errors.ts` — typed error envelope + handler
- `src/http/response.ts` — typed `{ data }` / `{ data, pagination }` helpers

Add your own modules under `src/modules/<domain>/routes.ts` and mount them in
`src/index.ts`.

License: MIT.

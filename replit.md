# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains the MedicoLegalAid.com marketing website — a professional frontend-only site for selling a Medico-Legal Masterclass course to Indian doctors, with an additional Hospital Legal Audit section.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### medicolegalaid (React + Vite, previewPath: "/")
Frontend-only marketing website for MedicoLegalAid.com.
- Single-page application with smooth-scroll sections
- Deep navy + gold color theme
- Sections: Hero, Legal Risks, Course Overview, 8 Modules, About Instructor, Key Legal Facts, Trust, Hospital Audit (new), Contact/CTA, Footer
- framer-motion animations
- No backend calls — all data hardcoded

### api-server (Express, previewPath: "/api")
Basic Express API server with health check. Not used by the frontend.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

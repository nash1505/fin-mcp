# fin-mcp

A small demo React + Vite dashboard that simulates a Multi-Platform Control Panel (MCP) for viewing portfolio data, transactions and running simple MCP commands against mocked platform services.

## Quick start

1. Install deps
```sh
npm install
```

2. Run dev server
```sh
npm run dev
```

3. Open the app: http://localhost:5173 (Vite default)

Configuration and scripts are in [package.json](package.json) and [vite.config.js](vite.config.js).

## Tech stack

- Vite ([vite.config.js](vite.config.js))
- React 19 ([src/main.jsx](src/main.jsx))
- Tailwind CSS ([src/index.css](src/index.css), via `@tailwindcss/vite`)
- Recharts for charts
- lucide-react for icons

## Project structure

- [index.html](index.html) — app entry
- [src/main.jsx](src/main.jsx) — React bootstrap
- [src/App.jsx](src/App.jsx) — app root wiring
- Context & hooks:
  - [`AuthProvider`](src/context/AuthProvider.jsx) — provides auth, portfolio, transactions and chart data
  - [`useAuth`](src/hooks/useAuth.jsx) — hook to access `AuthContext` (see [`AuthContext`](src/hooks/useAuth.jsx))
- Services:
  - [`MCPService`](src/service/mcp.js) — mocked backend for authentication, portfolio, transactions and command execution
  - [`StorageService`](src/service/storage.js) — sessionStorage wrapper for persisting user state
- Components:
  - [src/components/router.jsx](src/components/router.jsx) — simple hash-based router
  - [src/components/login.jsx](src/components/login.jsx) — login screen & platform selection
  - [src/components/header.jsx](src/components/header.jsx) — top navigation (uses [`PLATFORM_CONFIG`](src/constants/FinHub.js))
  - [src/components/dashboard.jsx](src/components/dashboard.jsx) — main dashboard view (charts + distribution)
  - [src/components/portfolioOverview.jsx](src/components/portfolioOverview.jsx)
  - [src/components/holdingsTable.jsx](src/components/holdingsTable.jsx)
  - [src/components/transactionHistory.jsx](src/components/transactionHistory.jsx)
  - [src/components/mcpPanel.jsx](src/components/mcpPanel.jsx) — simple MCP console calling [`MCPService.executeCommand`](src/service/mcp.js)
  - [src/components/buttonLink.jsx](src/components/buttonLink.jsx) — header nav button
- Constants / mock data:
  - [`PLATFORM_CONFIG`](src/constants/FinHub.js) — platform metadata
  - [`generateChartData`](src/constants/data.js) — sample chart + distribution data

## How auth & data flow works

- Login via [src/components/login.jsx](src/components/login.jsx) triggers [`AuthProvider.login`](src/context/AuthProvider.jsx).
- [`AuthProvider`](src/context/AuthProvider.jsx) uses [`MCPService.authenticate`](src/service/mcp.js) to obtain a token, then fetches portfolio and transactions via [`MCPService.fetchPortfolio`](src/service/mcp.js) and [`MCPService.fetchTransactions`](src/service/mcp.js).
- Auth state is persisted to session storage via [`StorageService`](src/service/storage.js).

## Mocking & extending

- Replace or extend mocks in [src/service/mcp.js](src/service/mcp.js) to integrate with a real backend.
- Update platform metadata in [src/constants/FinHub.js](src/constants/FinHub.js).
- Chart & distribution seeds are in [src/constants/data.js](src/constants/data.js).

## Run lint / build

- Lint: `npm run lint` (config in [eslint.config.js](eslint.config.js))
- Build: `npm run build`
- Preview: `npm run preview`

## Helpful files

- [package.json](package.json)
- [vite.config.js](vite.config.js)
- [eslint.config.js](eslint.config.js)

## Notes

- UI uses Tailwind; see [src/index.css](src/index.css).
- Router is hash-based (see [src/components/router.jsx](src/components/router.jsx)).
- All server interactions are mocked for demo purposes in [src/service/mcp.js](src/service/mcp.js).

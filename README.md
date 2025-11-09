# Appointment Booking App (GP booking form)

A small Next.js app implementing a GP appointment booking form. Demonstrates a multi-step form built with react-hook-form, Zod validation, and Tailwind CSS for styling. State is handled in-component / persisted with localStorage or form context (Zustand is no longer used). The project uses the Next.js App Router (Pages Router is not used).

## Link to hosted version in absence of screenshots and video
https://booking-form-3xmngnwnu-barrys-projects-7dac567a.vercel.app/

## Features
- Multi-step GP appointment booking flow
- Validation with Zod
- react-hook-form for form handling
- Tailwind CSS for styling
- Client-side state persisted via localStorage / form context (no Zustand)
- Navigation using Next.js App Router

## Tech stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- react-hook-form
- zod
- @hookform/resolvers

## Getting started

1. Install dependencies:
```bash
npm install
# or
yarn
# or
pnpm install
```

2. Run the dev server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open http://localhost:3000

3. Build for production:
```bash
npm run build
npm start
```

## Project layout
- app/ — Next.js App Router routes and pages
- src/components/ — React components and form UI
- src/schema.ts — Zod schemas used for validation
- src/app/globals.css — global styles (Tailwind entry points)
- (If present) src/app/store.ts — legacy store removed in favor of form context / localStorage (check code)

## Form/state notes
- Forms use react-hook-form + zod for validation.
- State is kept in components and persisted to localStorage or passed via form context/settings when navigating between steps. There is no Zustand store in this version.
- When navigating back to previous steps, forms pull initial values from your chosen persistence (defaultValues / reset from localStorage or context).

## Common troubleshooting
- If TypeScript complains "Cannot find module '@hookform/resolvers/zod'":
```bash
npm install @hookform/resolvers zod
# or
yarn add @hookform/resolvers zod
# or
pnpm add @hookform/resolvers zod
```
Restart the TypeScript server in VS Code (Cmd/Ctrl+Shift+P → "TypeScript: Restart TS Server") after installing.

- Tailwind: ensure globals.css includes:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Zod enums: use readonly tuples and supported option keys:
```ts
z.enum(["video", "audio"] as const, { error: "Choose a format" })
```

- Browser autofill: modern browsers may autofill inputs from saved credentials. Use explicit `autoComplete` attributes and/or a hidden autofill trap input to avoid unexpected prefilled values.

## Notes
This app is intentionally small and focused on demonstrating form validation and navigation for a GP appointment booking flow. Extend fields, add server-side submission, or integrate real availability and authentication as needed.

## License
Check the `license` field in package.json or the LICENSE file in the repo root. If you don't want an open-source license, set `"license": "UNLICENSED"` and `"private": true` in package.json.
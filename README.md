# Appointment Booking App (GP booking form)

A small Next.js app that provides a GP appointment booking form. It demonstrates a multi-step form built with react-hook-form, Zod validation, Tailwind CSS for styling, and a simple client-side store for persisting form state.

## Features
- Multi-step GP appointment booking flow
- Validation with Zod
- react-hook-form for form handling
- Tailwind CSS for styling
- Client-side state (Zustand) to persist form values between steps
- Navigation using Next.js App Router

## Tech stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- react-hook-form
- zod
- @hookform/resolvers
- Zustand (simple store)

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
- app/ — Next.js app routes and pages
- src/components/ — React components (forms, inputs)
- src/schema.ts — Zod schemas used for validation
- src/app/globals.css — global styles (Tailwind entry points)
- src/app/store.ts — client store for booking data

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

- Zod enums: use readonly tuples and option keys supported by Zod:
```ts
z.enum(["video", "audio"] as const, { error: "Choose a format" })
```

## Notes
This app is intentionally small and focused on demonstrating form validation and navigation for a GP appointment booking flow. 

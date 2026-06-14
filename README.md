Wisdom & Wellbeing Resource Portal
A minimal React 19 + TypeScript application built on Vite, featuring client-side resource filtering, sorting, and a global modal overlay system.

Architecture Overview
UI & Routing: React 19 + React Router DOM v7 layouts.

State Management: ResourceContext handles dataset filtering and sorting; ResourceModalContext manages global modal overlays without prop-drilling.

Testing Sandbox: Jest and ts-jest configured with an isolated tsconfig.test.json to handle CommonJS and JSX testing environments cleanly.

Scripts
Bash
npm run dev # Start Vite development server
npm run test # Run Jest test suite
npm run lint # Run ESLint validation check
npm run build # Type-check and compile production assets
npm run preview # Preview compiled production build locally

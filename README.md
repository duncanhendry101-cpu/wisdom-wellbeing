Wisdom & Wellbeing Resource Portal:
A minimal React 19 + TypeScript application built on Vite, featuring client-side resource filtering, sorting, and a global modal overlay system.

Architecture Overview:
UI & Routing: React 19 + React Router DOM v7.

State Management: ResourceContext handles data filtering; ResourceModalContext manages global modal overlays.

Testing Sandbox: Jest and ts-jest isolated via tsconfig.test.json.

Requirements & Setup:
Prerequisites: Node.js (v18+ recommended)

Installation: npm install

Project Commands
Plaintext
npm run dev # Start local development server
npm run test # Run Jest test suite
npm run lint # Run ESLint code checks
npm run build # Type-check and build production assets
npm run preview # Preview production build locally

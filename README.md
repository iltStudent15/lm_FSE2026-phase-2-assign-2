# Assignment 5 - React Architecture and Patterns

This is a simple React + TypeScript app built with Vite to meet the Assignment 5 rubric.

## Features implemented

- 3 routes using React Router (`/`, `/book/:id`, `/new`)
- Typed functional components and one component per file
- Composition pattern with a reusable `Card` wrapper using `children`
- Hooks usage:
  - `useState` in form and context
  - `useEffect` with cleanup in custom fetch hook
  - `useContext` through `SavedNotesContext`
  - custom hook `useBooks`
- Data fetching from local JSON with loading, success, and error states
- Controlled form with one `handleChange` and basic validation
- 3 tests using Vitest + React Testing Library
- Architecture rationale in `RATIONALE.md`

## Run locally

```bash
npm install
npm run dev
```

## Test

```bash
npm run test
```

# Sahab Academy

Website for **Sahab Academy Nursery, Primary, and Secondary School** in Babura Local Government, Jigawa State, Nigeria.

The site introduces the school, its sections, a message from the proprietor, a photo gallery, and a registration form for prospective families.

## Features

- Home page with about, nursery/primary/secondary offerings, and proprietor welcome
- Gallery (campus, students, prefects, facilities, alumni)
- Registration form with client-side validation
- Responsive layout (desktop and mobile)

## Tech stack

- Vite + React 18 + TypeScript
- Tailwind CSS and shadcn/ui
- React Router
- Framer Motion

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (comes with Node.js)

## How to run locally

```sh
# Clone the repo
git clone <YOUR_GIT_URL>
cd sahab-academy

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app is available at **http://localhost:8080**.

Vite watches files and hot-reloads as you edit.

## Other scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server (port 8080) |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Preview a production build

```sh
npm run build
npm run preview
```

## Project structure

```
src/
  App.tsx              # Routes
  pages/
    Index.tsx          # Home
    Register.tsx       # Enrollment form
    Gallery.tsx        # Photo gallery
    NotFound.tsx       # 404
  components/          # Page sections and UI
  lib/                 # Shared helpers
```

Routes: `/`, `/register`, `/gallery`.

## Notes

- Registration does not call an API yet; it validates in the browser, then shows a success message.
- Static images are expected under `public/images/` (alumni, campus, prefects, students).

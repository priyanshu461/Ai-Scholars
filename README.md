# Ai Scholars ERP (Next.js)

A scalable ERP starter built with **Next.js 15**, **React 19**, and **TypeScript**.

## What is included

- Multi-page architecture with route-based panels
- Multi-role support: **Admin**, **Teacher**, **Student**
- Role-specific menu/navigation and protected routes
- Authentication flow (login + logout + middleware protection)
- Built-in role-aware AI assistant section in dashboard
- Dedicated pages for overview, students, classes, analytics, settings

## Routing model

- `/` public landing page
- `/login` authentication page
- `/panel/[role]` role dashboard (protected)
- `/panel/[role]/students`
- `/panel/[role]/classes`
- `/panel/[role]/analytics`
- `/panel/[role]/settings`

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

# Next.js Alerts Dashboard

## Description

Application full stack (Next.js + Express) conteneurisée, avec authentification Auth0 et visualisation de données sous forme de graphique interactif.

## Stack technique

- **Frontend** : Next.js v15 (TypeScript, TailwindCSS, Recharts)
- **Backend** : Node.js + Express.js
- **Auth** : Auth0 v4 (OAuth2)
- **Containers** : Docker (docker-compose)

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwindcss&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-5-blue?logo=express)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)
![Auth0](https://img.shields.io/badge/Auth0-OAuth2-orange?logo=auth0)

## Lancer le projet

1. Cloner le dépôt :

   ```bash
   git clone https://github.com/khanison-kh/nextjs-alert-dashboard.git
   ```

2. Créer les fichiers `.env` (backend) et `.env.local` (frontend) à partir des fichiers `.example`.

3. Exécuter la commande :

   ```bash
   docker compose up --build
   ```

4. Accéder :
   - Fronted : http://localhost:3000
   - Backend : http://localhost:8080

## Structure du projet

```
nextjs-alert-dashboard
├─ backend
│  ├─ data
│  │  └─ data.json
│  ├─ Dockerfile
│  ├─ package-lock.json
│  ├─ package.json
│  └─ src
│     ├─ app.js
│     ├─ controllers
│     │  └─ alerts.controller.js
│     ├─ middleware
│     │  └─ jwt.middleware.js
│     ├─ routes
│     │  └─ alerts.routes.js
│     ├─ server.js
│     └─ services
│        └─ alerts.service.js
├─ docker-compose.yml
├─ frontend
│  ├─ .dockerignore
│  ├─ app
│  │  ├─ (no-header)
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ (with-header)
│  │  │  ├─ alerts
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ [alertId]
│  │  │  │     └─ page.tsx
│  │  │  ├─ dashboard
│  │  │  │  ├─ AlertsChart.tsx
│  │  │  │  └─ page.tsx
│  │  │  └─ layout.tsx
│  │  ├─ components
│  │  │  ├─ Footer.tsx
│  │  │  └─ Header.tsx
│  │  ├─ favicon.ico
│  │  └─ globals.css
│  ├─ Dockerfile
│  ├─ eslint.config.mjs
│  ├─ lib
│  │  ├─ alert
│  │  │  ├─ api.ts
│  │  │  └─ utils.ts
│  │  └─ auth0.ts
│  ├─ middleware.ts
│  ├─ next.config.ts
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.mjs
│  ├─ public
│  │  ├─ file.svg
│  │  ├─ globe.svg
│  │  ├─ next.svg
│  │  ├─ vercel.svg
│  │  └─ window.svg
│  └─ tsconfig.json
└─ README.md
```

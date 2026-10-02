# PABI-AGENCY

A React learning project that presents a freelance matching interface. Visitors answer a short questionnaire, see the skills suggested by their answers, and browse freelancer profiles.

## What the code includes

- A home page, questionnaire, results page, and freelancer directory
- Client-side navigation with React Router
- Shared survey answers and a light/dark theme with React Context
- Data loading from a local API for questions, results, and freelancer profiles
- Styling with styled-components

## Run locally

This repository contains the React frontend. Its questionnaire, results, and freelancer directory request data from an API at `http://localhost:8000`. Run a compatible API on that port for those pages to show data.

With Node.js and npm installed:

```bash
npm install
npm start
```

Open `http://localhost:3000` in your browser. You can also run `npm test` or `npm run build`.

## Background

I built this project while following a course to practice React, routing, context, API requests, and component styling. It is a learning project, not a production freelance service.

# Game Hub

A modern gaming catalog app built with React and Vite. Browse a curated collection of popular titles, filter by category, view game details, and explore a clean storefront-style interface.

## Live Demo

https://game-app-psi-lemon.vercel.app

## Features

- Responsive gaming homepage with hero section and featured highlights
- Browse all games in a searchable/filterable catalog
- Filter games by category
- View detailed information for each title
- Modern UI built with Bootstrap and custom styling
- Routing for Home, All Games, About, Contact, and Game Detail pages
- State management with Redux Toolkit

## Tech Stack

- React 19
- Vite
- React Router
- Redux Toolkit
- Bootstrap 5
- JavaScript

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository
   ```bash
   git clone <your-repository-url>
   cd GameApp
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open the local URL shown in the terminal (usually http://localhost:5173)

## Available Scripts

```bash
npm run dev     # start the app in development mode
npm run build   # create a production build
npm run preview # preview the production build locally
npm run lint    # run lint checks
```

## Project Structure

```text
GameApp/
├── public/
├── src/
│   ├── Components/
│   ├── Data/
│   ├── Pages/
│   ├── App.jsx
│   ├── main.jsx
│   ├── store.js
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```

## Main Pages

- Home: landing page with featured games and carousel
- All Games: full catalog with category filters
- Game Detail: detailed single-game information page
- About: project and platform overview
- Contact: contact page

## Notes

This project is designed as a gaming showcase app and demo storefront, ideal for learning React routing, state management, and UI composition.

## License

This project is for educational/demo purposes unless otherwise specified by the repository owner.
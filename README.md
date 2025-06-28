# GetUrMovie 🎬

A modern, responsive **movie discovery platform** built with **React** and **Tailwind CSS**.

Discover your next favorite film with this intuitive movie browsing experience — feel free to explore or fork it to customize your own movie app.

## 🚀 Demo

[Live Demo](https://geturrmovie.netlify.app/)

## 📂 GitHub

[GitHub Repository](https://github.com/FaroukBentaleb/GetUrMovie.git)

## Features

- Browse top-rated, trending, and popular movies
- Responsive design for all devices
- Built with React and Tailwind CSS
- Powered by TMDB API for real-time movie data
- Clean and modern UI

## Installation

1. Clone this repository:

```bash
git clone https://github.com/FaroukBentaleb/GetUrMovie.git
cd GetUrMovie
```

2. Install dependencies:

```bash
npm install
```

3. Get your TMDB API key from [TMDB Website](https://www.themoviedb.org/) and create a `.env` file:

```bash
REACT_APP_TMDB_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm start
```

## Project Architecture

```
GetUrMovie/
├── public/                 # Public assets
├── src/
│   ├── assets/             # Static assets
│   │   ├── img/            # Images
│   │   └── movies/         # Movie-related assets
│   ├── components/         # React components
│   │   ├── Footer/         # Footer component
│   │   ├── Header/         # Footer component
│   │   ├── Popular/        # Popular movies section
│   │   ├── ShowAll/        # Show all movies component
│   │   └── Trending/       # Trending movies section
│   ├── hooks/              # Custom React hooks
│   │   └── useEffect.jsx   # Custom data fetching hook
│   ├── services/           # API service layer
│   │   └── Search.jsx      # Search functionality
│   ├── context/            # React context providers
│   └── utils/              # Utility functions
│       └── Stroke.css      # Custom CSS for text effects
├── .env.local              # file where the API Key is stored
└── package.json            # Dependencies
```

## Tech Stack

- **React** - Frontend framework
- **Tailwind CSS** - Styling
- **TMDB API** - Movie data source

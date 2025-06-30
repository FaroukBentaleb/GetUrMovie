# GetUrMovie 🎬

A modern, responsive **movie discovery platform** built with **React** and **Tailwind CSS**.

Discover your next favorite film with this intuitive movie browsing experience — feel free to explore or fork it to customize your own movie app.

## 🚀 Demo

[Live Demo](https://geturrmovie.netlify.app/)

## 📂 GitHub

[GitHub Repository](https://github.com/FaroukBentaleb/GetUrMovie.git)

## Features

- Browse top-rated and popular movies
- **Click on any movie to view detailed information**
- **Multi-page navigation with React Router**
- **Loading spinner animations for better UX**
- Responsive design for all devices
- Built with React and Tailwind CSS
- Powered by TMDB API for real-time movie data
- Clean and modern UI with smooth animations
- Mobile-first approach with horizontal scrolling

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
├── public/                     # Public assets
├── src/
│   ├── assets/                 # Static assets
│   │   ├── img/                # Images
│   │   └── movies/             # Movie-related assets
│   ├── components/             # React components
│   │   ├── Footer/             # Footer component
│   │   ├── Header/             # Header component
│   │   ├── Popular/            # Popular movies section
│   │   ├── ShowAll/            # Show all movies component
│   │   └── Trending/           # Trending movies section
│   ├── pages/                  # Page components for routing
│   │   ├── HomePage.jsx        # Main homepage
│   │   ├── MovieDetails.jsx    # Individual movie details page
│   │   └── NotFound.jsx        # 404 error page (path: '*')
│   ├── hooks/                  # Custom React hooks
│   │   └── useEffect.jsx       # Custom data fetching hook
│   ├── services/               # API service layer
│   │   └── Search.jsx          # Search functionality
│   ├── context/                # React context providers
│   └── utils/                  # Utility functions
│       └── Stroke.css          # Custom CSS for text effects
├── .env.local                  # File where the API Key is stored
└── package.json                # Dependencies
```

## Tech Stack

- **React** - Frontend framework
- **React Router** - Navigation and routing
- **Tailwind CSS** - Styling
- **TMDB API** - Movie data source
- **Custom Hooks** - Reusable state management
- **Component Architecture** - Modular and scalable structure

## New Features Added

- **React Router Integration** - Seamless navigation between pages
- **Movie Details Page** - Dedicated page for each movie with detailed information
- **Loading Animations** - Visual feedback during page transitions
- **Organized Page Structure** - Clean separation of page components in dedicated pages folder
- **404 Error Handling** - NotFound page for invalid routes

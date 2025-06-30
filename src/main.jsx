import { StrictMode } from 'react';
import './index.css';
import { HomePage } from './pages/HomePage';
import { MovieDetails } from './pages/movieDetails';
import { PageNotFound } from './pages/PageNotFound';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
const Router = createBrowserRouter([
  { path: "/", element: <HomePage/> },
  { path: "/Details/:id", element: <MovieDetails/> },
  { path: "*", element: <PageNotFound/> },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)

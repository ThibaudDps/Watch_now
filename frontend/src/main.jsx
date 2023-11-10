import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import AllMovies from "./pages/AllMovies";
import MoviePage from "./pages/MoviePage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllMovies />,
    loader: () => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/movies`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/movies",
    element: <AllMovies />,
    loader: () => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/movies`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/movies/:movieId",
    element: <MoviePage />,
    loader: ({ params }) => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/movies/${params.movieId}`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

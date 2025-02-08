// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../components/Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import MovieCast from "../components/MovieCast";
import MovieReviews from "../components/MovieReviews";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />}/>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </main>
  );
}

export default App;

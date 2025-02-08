import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../components/Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { lazy, Suspense } from "react";

const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieReviews = lazy(() => import("../components/MovieReviews"));
const MovieCast = lazy(() => import("../components/MovieCast"));

function App() {
  return (
    <main>
      <Header />
      <Suspense fallback={<h2>loading...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;

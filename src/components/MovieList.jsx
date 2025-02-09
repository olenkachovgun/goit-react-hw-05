import { Link, useLocation } from "react-router-dom";
import { FcFilmReel } from "react-icons/fc";
// const defaultImg =
//   "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";
const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <ul className="movieList">
        {movies.map((item) => {
          return (
            <li className="movieItem" key={item.id}>
              <FcFilmReel />

              <Link to={`/movies/${item.id.toString()}`} state={location}>
                {/* <img
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                      : defaultImg
                  }
                  alt={item.title}
                  width="100"
                /> */}
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;

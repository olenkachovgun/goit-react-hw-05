import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <ul>
        {movies.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/movies/${item.id.toString()}`} state={location}>
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

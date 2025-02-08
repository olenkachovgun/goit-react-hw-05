import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/movies/${item.id.toString()}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;

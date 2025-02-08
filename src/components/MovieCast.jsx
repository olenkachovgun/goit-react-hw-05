import { useEffect, useState } from "react";
import { fetchMovieCast } from "../services/api";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);
  return (
    <div>
      {cast.length > 0 ? (
        <ul>
          {cast.map((item) => {
            return (
              <li key={item.castId}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                  alt="photo"
                  width="100"
                />
                <p>{item.name}</p>
                <p>{item.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h2>No cast</h2>
      )}
    </div>
  );
};

export default MovieCast;

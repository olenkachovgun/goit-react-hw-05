import { useEffect, useState } from "react";
import { fetchMovieCast } from "../services/api";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

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
    <div className="movieDetails">
      {cast.length > 0 ? (
        <ul className="listCast">
          {cast.map((item) => {
            return (
              <li className="itemCast" key={item.castId}>
                <img
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                      : defaultImg
                  }
                  alt="photo"
                  width="100"
                />
                <p className="nameCast">{item.name}</p>
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

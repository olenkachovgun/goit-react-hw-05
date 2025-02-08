import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../services/api";
import { useParams } from "react-router-dom";
const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);
  console.log(reviews);

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.author}</p>
              <p>{item.content}</p>
            </li>
          );
        })
      ) : (
        <h2>No reviews available for this movie.</h2>
      )}
    </div>
  );
};

export default MovieReviews;

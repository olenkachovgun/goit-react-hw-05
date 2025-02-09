import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../services/api";
import { useParams } from "react-router-dom";
import { CgComment } from "react-icons/cg";
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
    <div className="movieDetails reviews">
      {reviews.length > 0 ? (
        reviews.map((item) => {
          return (
            <div className="itemReview" key={item.id}>
              <p className="nameCast">{item.author}</p>
              <p>
                <CgComment className="iconReview" />
                {item.content}
              </p>
            </div>
          );
        })
      ) : (
        <p>No reviews available for this movie.</p>
      )}
    </div>
  );
};

export default MovieReviews;

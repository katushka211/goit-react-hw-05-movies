import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/fetchMovies';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async movieId => {
      try {
        const reviewData = await getMovieReviews(movieId);
        setReviews(reviewData);
      } catch (error) {
        console.log(error);
      }
    };

    getReviews(movieId);
  }, [movieId]);

  return (
    <div className="reviewWrap">
      <h3>Reviews</h3>

      {reviews.length ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};
export default Reviews;

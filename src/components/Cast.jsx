import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/fetchMovies';
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async movieId => {
      try {
        const cast = await getMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast(movieId);
  }, [movieId]);
  return (
    <div>
      <h3>Cast</h3>
      {cast.length ? (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) : (
                <img
                  src={`https://via.placeholder.com/200x300?text=No+Image`}
                  alt={`${actor.name} profile`}
                />
              )}
              <div>
                <h3>{actor.name}</h3>
                <p>Character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, we don't have any information</p>
      )}
    </div>
  );
};
export default Cast;

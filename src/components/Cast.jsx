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
    <div className="cast-wrap">
      <h3>Cast</h3>
      {cast.length ? (
        <ul className="cast-list">
          {cast.map(actor => (
            <li className="actor-item" key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) : (
                <img
                  src={`https://via.placeholder.com/180x300?text=No+Image`}
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
        <p>We don't have any cast for this movie</p>
      )}
    </div>
  );
};
export default Cast;

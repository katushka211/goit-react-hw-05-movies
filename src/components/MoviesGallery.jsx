import { Link } from 'react-router-dom';

export const MoviesGallery = ({ movies, state }) => {
  return (
    <div>
      <ul className="gallery">
        {movies.map(movie => (
          <li key={movie.id} className="gallery-item">
            <Link to={`/movies/${movie.id}`} state={state}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

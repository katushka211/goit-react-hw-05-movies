import { Link } from 'react-router-dom';
export const MoviesGallery = ({ movies, state }) => {
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li className="movieListItem" key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={state}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

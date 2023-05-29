import { Link, useLocation } from 'react-router-dom';
export const MoviesGalleryItem = ({ movie }) => {
  const location = useLocation();

  let genres = '';
  if (Array.isArray(movie.genres) && movie.genres.length > 0) {
    genres = movie.genres.map(genre => genre.name).join(', ');
  }

  const releaseYear = new Date(movie.release_date).getFullYear();
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
    : 'https://placehold.co/600x400?text=Not+Available';

  const userScore = movie.vote_average
    ? `${(movie.vote_average * 10).toFixed(0)}%`
    : 'Not available';

  return (
    <>
      <div className="card">
        <img className="poster" src={poster} alt={movie.original_title} />
        <div className="movie-info">
          <h2 className="title">
            {movie.original_title ?? 'Unknown'}({releaseYear})
          </h2>
          <p className="user-score">User Score: {userScore}</p>
          <h3>Overview</h3>
          <p className="overview">{movie.overview}</p>
          <h3>Genres</h3>
          <p className="genres">{genres}</p>
        </div>
      </div>
      <div className="additional-info">
        <h3>Aditional Information</h3>
        <ul className="links">
          <li className="link-item">
            <Link
              className="link-details"
              to="cast"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Cast
            </Link>
          </li>
          <li className="link-item">
            <Link
              className="link-details"
              to="reviews"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

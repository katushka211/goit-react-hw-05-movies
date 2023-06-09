import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'services/fetchMovies';
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { Outlet } from 'react-router-dom';
import './movieDetails.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const getSelectedMovie = async movieId => {
      try {
        const movie = await getMovieDetails(movieId);
        setSelectedMovie(movie);
      } catch (error) {
        console.log(error);
      }
    };
    getSelectedMovie(movieId);
  }, [movieId]);
  return (
    <main>
      <div>
        <Link to={location?.state?.from ?? '/'}>
          <button className="glow-on-hover">
            <IoArrowBackOutline
              style={{ width: '25px', height: '25px', display: 'inline-block' }}
            />
            Go back
          </button>
        </Link>
        <MoviesGalleryItem movie={selectedMovie} />
        <Outlet />
      </div>
    </main>
  );
};
export default MovieDetails;

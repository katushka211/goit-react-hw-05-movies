import { MoviesGallery } from 'components/MoviesGallery';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMoviesTrending } from 'services/fetchMovies';
import { Loader } from 'components/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await getMoviesTrending();
        setMovies([...movies]);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);
  return (
    <main>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <h1>Trending today</h1>
          <MoviesGallery movies={movies} state={{ from: location }} />
        </div>
      )}
    </main>
  );
};

export default Home;

import { SearchBar } from 'components/SearchBar';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'services/fetchMovies';
import { MoviesGallery } from 'components/MoviesGallery';
import { Loader } from 'components/Loader';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams('');
  const search = searchParams.get('search');
  const location = useLocation();

  const handleSubmit = event => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value;
    if (searchValue === '') {
      toast.info('Please enter something');
      return;
    }
    setSearchParams({ search: searchValue });
    event.target.reset();
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    const getMovies = async searchMovie => {
      try {
        const movies = await getMoviesByName(searchMovie);
        setMovies([...movies]);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
        toast.error('Oops something went wrong...');
      } finally {
        setIsLoading(false);
      }
    };
    getMovies(search);
  }, [search]);

  return (
    <main>
      <SearchBar onSubmit={handleSubmit} />
      <ToastContainer autoClose={2000} position="top-left" />
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <MoviesGallery movies={movies} state={{ from: location }} />
      )}
    </main>
  );
};

export default Movies;

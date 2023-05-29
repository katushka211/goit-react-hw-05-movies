import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '79a2e1dc126f87040f8de2557416f9fd';

export async function getMoviesTrending(page = 1) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
    };
    const response = await axios.get(
      `${API_URL}/trending/movie/day?page=${page}`,
      { params }
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getMoviesByName(name) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
      query: name,
      page: 1,
    };
    const response = await axios.get(`${API_URL}/search/movie?`, { params });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieDetails(id) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
    };
    const response = await axios.get(`${API_URL}/movie/${id}?`, { params });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieCredits(id) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
    };
    const response = await axios.get(`${API_URL}/movie/${id}/credits?`, {
      params,
    });
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieReviews(id) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    };
    const response = await axios.get(`${API_URL}/movie/${id}/reviews?`, {
      params,
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

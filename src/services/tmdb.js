import axios from 'axios';

// TMDB API'nin temel adresi ve token başlığı
const BASE_URL = 'https://api.themoviedb.org/3';

const getHeaders = () => ({
  Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
});

// Günün trend filmlerini getirir
export const getTrending = () =>
  axios.get(`${BASE_URL}/trending/movie/day`, { headers: getHeaders() });

// Anahtar kelimeye göre film arar
export const searchMovies = (query, page = 1) =>
  axios.get(`${BASE_URL}/search/movie`, {
    headers: getHeaders(),
    params: { query, page, language: 'en-US', include_adult: false },
  });

// ID'ye göre film detaylarını getirir
export const getMovieById = id =>
  axios.get(`${BASE_URL}/movie/${id}`, { headers: getHeaders() });

// Filmin oyuncu kadrosunu getirir
export const getMovieCast = id =>
  axios.get(`${BASE_URL}/movie/${id}/credits`, { headers: getHeaders() });

// Filme ait kullanıcı incelemelerini getirir
export const getMovieReviews = id =>
  axios.get(`${BASE_URL}/movie/${id}/reviews`, { headers: getHeaders() });

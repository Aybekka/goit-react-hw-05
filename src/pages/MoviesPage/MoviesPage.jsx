import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/tmdb';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Arama sorgusunu URL parametresinden okuyorum
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  // Form gönderildiğinde URL parametresini güncelliyorum
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();
    if (!value) return;
    setSearchParams({ query: value });
  };

  // query değiştiğinde API isteği atıyorum
  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { data } = await searchMovies(query);
        setMovies(data.results);
      } catch {
        setError('Failed to search movies.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Movie Search</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search movies..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      {isLoading && <p className={styles.message}>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {/* Sonuç bulunamazsa kullanıcıyı bilgilendiriyorum */}
      {!isLoading && !error && query && movies.length === 0 && (
        <p className={styles.message}>No movies found for &quot;{query}&quot;.</p>
      )}
      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  );
}

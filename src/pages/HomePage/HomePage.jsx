import { useEffect, useState } from 'react';
import { getTrending } from '../../services/tmdb';
import MovieList from '../../components/MovieList/MovieList';
import styles from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Bileşen ilk yüklendiğinde günün trend filmlerini çekiyorum
  useEffect(() => {
    const fetchTrending = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { data } = await getTrending();
        setMovies(data.results);
      } catch {
        setError('Failed to load trending movies.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Trending Today</h1>
      {isLoading && <p className={styles.message}>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  );
}

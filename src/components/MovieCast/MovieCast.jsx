import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/tmdb';
import styles from './MovieCast.module.css';

const IMG_BASE = 'https://image.tmdb.org/t/p/w200';

export default function MovieCast() {
  // URL'den film ID'sini alıyorum
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // movieId değiştiğinde oyuncu kadrosunu çekiyorum
  useEffect(() => {
    if (!movieId) return;

    const fetchCast = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { data } = await getMovieCast(movieId);
        setCast(data.cast);
      } catch {
        setError('Failed to load cast information.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  if (isLoading) return <p className={styles.message}>Loading cast...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!cast.length) return <p className={styles.message}>No cast information available.</p>;

  return (
    <ul className={styles.list}>
      {cast.map(actor => (
        <li key={actor.cast_id ?? actor.credit_id} className={styles.item}>
          {/* Fotoğraf yoksa placeholder gösteriyorum */}
          {actor.profile_path ? (
            <img
              src={`${IMG_BASE}${actor.profile_path}`}
              alt={actor.name}
              className={styles.photo}
              loading="lazy"
            />
          ) : (
            <div className={styles.noPhoto}>No photo</div>
          )}
          <p className={styles.name}>{actor.name}</p>
          <p className={styles.character}>as {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/tmdb';
import styles from './MovieReviews.module.css';

export default function MovieReviews() {
  // URL'den film ID'sini alıyorum
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // movieId değiştiğinde incelemeleri çekiyorum
  useEffect(() => {
    if (!movieId) return;

    const fetchReviews = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { data } = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch {
        setError('Failed to load reviews.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (isLoading) return <p className={styles.message}>Loading reviews...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  // İnceleme yoksa bilgilendirme mesajı gösteriyorum
  if (!reviews.length) return <p className={styles.message}>No reviews found.</p>;

  return (
    <ul className={styles.list}>
      {reviews.map(review => (
        <li key={review.id} className={styles.item}>
          <h3 className={styles.author}>{review.author}</h3>
          <p className={styles.content}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

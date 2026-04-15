import { Link, useLocation } from 'react-router-dom';
import styles from './MovieList.module.css';

export default function MovieList({ movies }) {
  // Mevcut konumu alıyorum — detay sayfasından geri dönmek için state'e gönderiyorum
  const location = useLocation();

  return (
    <ul className={styles.list}>
      {movies.map(movie => (
        <li key={movie.id} className={styles.item}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={styles.link}
          >
            {/* Poster varsa göster, yoksa placeholder */}
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className={styles.poster}
                loading="lazy"
              />
            ) : (
              <div className={styles.noPoster}>No image</div>
            )}
            <span className={styles.title}>{movie.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

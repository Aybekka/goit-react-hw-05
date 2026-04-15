import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from '../../services/tmdb';
import styles from './MovieDetailsPage.module.css';
import clsx from 'clsx';

const IMG_BASE = 'https://image.tmdb.org/t/p/w500';

// Aktif alt rota linkini vurgulamak için yardımcı fonksiyon
const getNavLinkClass = ({ isActive }) =>
  clsx(styles.subLink, isActive && styles.subLinkActive);

export default function MovieDetailsPage() {
  // URL'den film ID'sini alıyorum
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  // Geri dönülecek sayfayı ref ile saklıyorum — yenileme sonrası kaybolmaması için
  const backRef = useRef(location.state?.from ?? '/movies');

  // movieId değiştiğinde film detaylarını çekiyorum
  useEffect(() => {
    if (!movieId) return;

    const fetchMovie = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { data } = await getMovieById(movieId);
        setMovie(data);
      } catch {
        setError('Failed to load movie details.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <main className={styles.page}>
      {/* Kullanıcıyı geldiği sayfaya geri gönderiyorum */}
      <Link to={backRef.current} className={styles.back}>
        ← Go back
      </Link>

      {isLoading && <p className={styles.message}>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {movie && (
        <>
          <div className={styles.details}>
            {movie.poster_path ? (
              <img
                src={`${IMG_BASE}${movie.poster_path}`}
                alt={movie.title}
                className={styles.poster}
              />
            ) : (
              <div className={styles.noPoster}>No image</div>
            )}
            <div className={styles.info}>
              <h1 className={styles.title}>
                {movie.title}{' '}
                <span className={styles.year}>
                  ({movie.release_date?.slice(0, 4)})
                </span>
              </h1>
              <p className={styles.score}>
                User Score: {Math.round(movie.vote_average * 10)}%
              </p>
              <h2 className={styles.sectionTitle}>Overview</h2>
              <p className={styles.overview}>{movie.overview}</p>
              {movie.genres?.length > 0 && (
                <>
                  <h2 className={styles.sectionTitle}>Genres</h2>
                  <p className={styles.genres}>
                    {movie.genres.map(g => g.name).join(', ')}
                  </p>
                </>
              )}
            </div>
          </div>

          {/* İç içe rotalar — cast ve reviews burada render edilir */}
          <section className={styles.additional}>
            <h2 className={styles.sectionTitle}>Additional information</h2>
            <nav className={styles.subNav}>
              <NavLink to="cast" className={getNavLinkClass}>
                Cast
              </NavLink>
              <NavLink to="reviews" className={getNavLinkClass}>
                Reviews
              </NavLink>
            </nav>
            <div className={styles.outlet}>
              <Outlet />
            </div>
          </section>
        </>
      )}
    </main>
  );
}

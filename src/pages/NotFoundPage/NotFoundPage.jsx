import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

// Geçersiz bir rotaya girildiğinde bu sayfa gösterilir
export default function NotFoundPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>Oops! Page not found.</p>
      <Link to="/" className={styles.link}>
        Go to Home
      </Link>
    </main>
  );
}

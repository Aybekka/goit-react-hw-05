import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Navigation.module.css';

// Aktif linke .active sınıfı eklemek için yardımcı fonksiyon
const getNavLinkClass = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Ana sayfa ve film arama sayfası linkleri */}
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={getNavLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

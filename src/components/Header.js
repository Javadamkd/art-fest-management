import Link from 'next/link';
import styles from './Header.module.css'; // Import CSS module

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Art Fest Management</h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/candidates">
              <a>Candidates</a>
            </Link>
          </li>
          <li>
            <Link href="/teams">
              <a>Teams</a>
            </Link>
          </li>
          <li>
            <Link href="/basic">
              <a>Basic</a>
            </Link>
          </li>
          <li>
            <Link href="/rank-top">
              <a>Rank & Top</a>
            </Link>
          </li>
          <li>
            <Link href="/search">
              <a>Search</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

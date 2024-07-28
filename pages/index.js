// pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Art Fest Management</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/candidates">Candidates</Link>
          </li>
          <li>
            <Link href="/teams">Teams</Link>
          </li>
          <li>
            <Link href="/basic">Basic</Link>
          </li>
          <li>
            <Link href="/rank-top">Rank & Top</Link>
          </li>
          <li>
            <Link href="/search">Search</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

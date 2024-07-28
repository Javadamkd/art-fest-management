// pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Art Fest Management</h1>
      <div className={styles.links}>
        <Link href="/candidates" className={styles.link}>Candidates</Link>
        <Link href="/rankAndTop" className={styles.link}>Rank & Top</Link>
        <Link href="/search" className={styles.link}>Search</Link>
        <Link href="/programs" className={styles.link}>Programs</Link>
        <Link href="/results" className={styles.link}>Results</Link>
        <Link href="/teams" className={styles.link}>Teams</Link>
      </div>
    </div>
  );
}

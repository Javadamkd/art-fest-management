// pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Art Fest Management</h1>
      <div className={styles.links}>
        <Link href="/candidates"><a className={styles.link}>Candidates</a></Link>
        <Link href="/rankAndTop"><a className={styles.link}>Rank & Top</a></Link>
        <Link href="/search"><a className={styles.link}>Search</a></Link>
        <Link href="/programs"><a className={styles.link}>Programs</a></Link>
        <Link href="/results"><a className={styles.link}>Results</a></Link>
        <Link href="/teams"><a className={styles.link}>Teams</a></Link>
      </div>
    </div>
  );
}

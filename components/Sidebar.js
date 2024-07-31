// components/Sidebar.js
import Link from 'next/link';
import styles from '../styles/Layout.module.css'; // Corrected import path

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
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
          <Link href="/programs">Programs</Link>
        </li>
        <li>
          <Link href="/result">Result</Link>
        </li>
        <li>
          <Link href="/rank-top">Rank & Top</Link>
        </li>
        <li>
          <Link href="/search">Search</Link>
        </li>
      </ul>
    </div>
  );
}

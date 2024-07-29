// components/Sidebar.js
import Link from 'next/link';
import styles from './Layout.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h2>Art Fest Management</h2>
      <ul>
        <li><Link href="/basic">Basic</Link></li>
        <li><Link href="/teams">Teams</Link></li>
        <li><Link href="/candidates">Candidates</Link></li>
        <li><Link href="/programs">Programs</Link></li>
        <li><Link href="/result">Result</Link></li>
        <li><Link href="/rank-top">Rank & Top</Link></li>
        <li><Link href="/search">Search</Link></li>
      </ul>
    </div>
  );
}

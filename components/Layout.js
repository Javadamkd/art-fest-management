import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className={styles.container}>
      <div className={sidebarCollapsed ? styles.sidebarCollapsed : styles.sidebar}>
        <button onClick={toggleSidebar} className={styles.toggleButton}>
          ☰
        </button>
        <ul>
          <li><Link href="/candidates">Candidates</Link></li>
          <li><Link href="/teams">Teams</Link></li>
          <li><Link href="/basic">Basic</Link></li>
          <li><Link href="/rank-top">Rank & Top</Link></li>
          <li><Link href="/search">Search</Link></li>
        </ul>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

// components/Layout.js
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className={sidebarCollapsed ? styles.containerCollapsed : styles.container}>
      <aside className={sidebarCollapsed ? styles.sidebarCollapsed : styles.sidebar}>
        <h2>Art Fest Management</h2>
        <ul>
          <li>
            <Link href="/candidates" legacyBehavior>
              <a>Candidates</a>
            </Link>
          </li>
          <li>
            <Link href="/teams" legacyBehavior>
              <a>Teams</a>
            </Link>
          </li>
          <li>
            <Link href="/basic" legacyBehavior>
              <a>Basic</a>
            </Link>
          </li>
          <li>
            <Link href="/rank-top" legacyBehavior>
              <a>Rank & Top</a>
            </Link>
          </li>
          <li>
            <Link href="/search" legacyBehavior>
              <a>Search</a>
            </Link>
          </li>
        </ul>
        <button className={styles.menuButton} onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
          ☰
        </button>
      </aside>
      <main className={styles.content}>{children}</main>
    </div>
  );
}

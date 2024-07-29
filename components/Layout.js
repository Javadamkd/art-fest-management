// components/Layout.js
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
          {sidebarCollapsed ? 'Expand' : 'Collapse'}
        </button>
        <ul className={sidebarCollapsed ? styles.collapsed : ''}>
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
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

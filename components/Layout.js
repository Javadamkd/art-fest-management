// components/Layout.js
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className={styles.menuButton} onClick={toggleSidebar}>
        &#9776;
      </button>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <h2>Menu</h2>
        <ul>
          <li>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/teams" legacyBehavior>
              <a>Teams</a>
            </Link>
          </li>
          <li>
            <Link href="/candidates" legacyBehavior>
              <a>Candidates</a>
            </Link>
          </li>
          <li>
            <Link href="/programs" legacyBehavior>
              <a>Programs</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.content} ${isOpen ? styles.shifted : ''}`} onClick={() => setIsOpen(false)}>
        {children}
      </div>
    </div>
  );
};

export default Layout;

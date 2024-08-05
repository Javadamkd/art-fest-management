// components/Sidebar.js
import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menuItem}>
        <Link href="/">
          <a className={`${styles.menuLink} ${styles.home}`}>Home</a>
        </Link>
      </div>
      <div className={styles.menuItem}>
        <Link href="/teams">
          <a className={`${styles.menuLink} ${styles.teams}`}>Teams</a>
        </Link>
      </div>
      <div className={styles.menuItem}>
        <Link href="/candidates">
          <a className={`${styles.menuLink} ${styles.candidates}`}>Candidates</a>
        </Link>
      </div>
      <div className={styles.menuItem}>
        <Link href="/programs">
          <a className={`${styles.menuLink} ${styles.programs}`}>Programs</a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

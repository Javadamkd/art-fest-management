// components/Sidebar.js
import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menuItem}>
        <Link href="/" passHref>
          <div className={`${styles.menuLink} ${styles.home}`}>Home</div>
        </Link>
      </div>
      <div className={styles.menuItem}>
        <Link href="/teams" passHref>
          <div className={`${styles.menuLink} ${styles.teams}`}>Teams</div>
        </Link>
      </div>
      <div className={styles.menuItem}>
        <Link href="/candidates" passHref>
          <div className={`${styles.menuLink} ${styles.candidates}`}>Candidates</div>
        </Link>
      </div>
      <div className={styles.menuItem}>
        <Link href="/programs" passHref>
          <div className={`${styles.menuLink} ${styles.programs}`}>Programs</div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

// components/Layout.js
import { useState } from 'react';
import Sidebar from './Sidebar';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.container}>
      <button className={styles.menuButton} onClick={toggleSidebar}>
        &#9776; {/* Hamburger icon */}
      </button>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Layout;

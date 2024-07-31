// components/Layout.js
import Sidebar from './Sidebar';
import styles from '../styles/Layout.module.css'; // Corrected import path

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

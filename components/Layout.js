// components/Layout.js
import Sidebar from './Sidebar';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Layout;

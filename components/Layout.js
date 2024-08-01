import Sidebar from './Sidebar';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Layout;

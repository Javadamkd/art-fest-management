import Link from 'next/link';
import styles from './sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Link href="/candidates"><a>Candidates</a></Link>
      <Link href="/teams"><a>Teams</a></Link>
      <Link href="/programs"><a>Programs</a></Link>
      {/* Add more links as needed */}
    </div>
  );
};

export default Sidebar;

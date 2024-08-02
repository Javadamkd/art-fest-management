// components/Sidebar.js
import Link from 'next/link';
import styles from './sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>Menu</h2>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/teams">
            <a>Teams</a>
          </Link>
        </li>
        <li>
          <Link href="/candidates">
            <a>Candidates</a>
          </Link>
        </li>
        <li>
          <Link href="/programs">
            <a>Programs</a>
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;

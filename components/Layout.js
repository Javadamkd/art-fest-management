// components/Layout.js (or wherever your navigation is defined)
import Link from 'next/link';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/"><a>Home</a></Link>
          </li>
          <li>
            <Link href="/teams"><a>Teams</a></Link>
          </li>
          <li>
            <Link href="/candidates"><a>Candidates</a></Link>
          </li>
          <li>
            <Link href="/programs"><a>Programs</a></Link>
          </li>
          <li>
            <Link href="/results"><a>Results</a></Link> {/* Add this line */}
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;

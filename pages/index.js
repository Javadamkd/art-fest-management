// pages/index.js
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="card">
        <h1>Welcome to Art Fest Management</h1>
        <nav>
          <ul>
            <li>
              <Link href="/candidates" legacyBehavior>
                <a>Candidates</a>
              </Link>
            </li>
            <li>
              <Link href="/teams" legacyBehavior>
                <a>Teams</a>
              </Link>
            </li>
            <li>
              <Link href="/basic" legacyBehavior>
                <a>Basic</a>
              </Link>
            </li>
            <li>
              <Link href="/rank-top" legacyBehavior>
                <a>Rank & Top</a>
              </Link>
            </li>
            <li>
              <Link href="/search" legacyBehavior>
                <a>Search</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  );
}

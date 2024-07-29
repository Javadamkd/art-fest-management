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
              <Link href="/candidates">Candidates</Link>
            </li>
            <li>
              <Link href="/teams">Teams</Link>
            </li>
            <li>
              <Link href="/basic">Basic</Link>
            </li>
            <li>
              <Link href="/rank-top">Rank & Top</Link>
            </li>
            <li>
              <Link href="/search">Search</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  );
}

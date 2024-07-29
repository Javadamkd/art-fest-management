import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Art Fest Management</title>
      </Head>
      <main>
        <h1>Art Fest Management</h1>
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
      </main>
      <footer>
        © 2024 Art Fest Management
      </footer>
    </div>
  );
}

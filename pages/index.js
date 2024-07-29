import Head from 'next/head';
import Link from 'next/link'; // Import Link from next/link

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
              <Link href="/candidates">
                <a>Candidates</a>
              </Link>
            </li>
            <li>
              <Link href="/teams">
                <a>Teams</a>
              </Link>
            </li>
            <li>
              <Link href="/basic">
                <a>Basic</a>
              </Link>
            </li>
            <li>
              <Link href="/rank-top">
                <a>Rank & Top</a>
              </Link>
            </li>
            <li>
              <Link href="/search">
                <a>Search</a>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}

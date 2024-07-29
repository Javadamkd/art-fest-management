import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <div className="sidebar">
        <h1>Art Fest Management</h1>
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
      </div>
      <div className="content">
        <h1>Art Fest Management</h1>
      </div>
    </div>
  );
}

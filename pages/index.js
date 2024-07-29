import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <div className="sidebar">
        <h1>Art Fest Management</h1>
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
      </div>
      <div className="content">
        <h1>Art Fest Management</h1>
      </div>
    </div>
  );
}

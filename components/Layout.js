// components/Layout.js
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Sidebar />
      <main className="content">
        {children}
      </main>
    </div>
  );
}

function Sidebar() {
  return (
    <nav className="sidebar">
      <h2>Art Fest Management</h2>
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
  );
}

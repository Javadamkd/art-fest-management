// components/Layout.js
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        {children}
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
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
        <li>
          <Link href="/">Art Fest Management</Link>
        </li>
      </ul>
    </div>
  );
}

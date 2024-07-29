// components/Layout.js
import { useState } from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`container ${isCollapsed ? 'content-collapsed' : ''}`}>
      <Sidebar isCollapsed={isCollapsed} />
      <main className="content">
        <span className="menu-button" onClick={toggleSidebar}>
          ☰
        </span>
        {children}
      </main>
    </div>
  );
}

function Sidebar({ isCollapsed }) {
  return (
    <nav className={`sidebar ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
      <h2>Art Fest</h2>
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

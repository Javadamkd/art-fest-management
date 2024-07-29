// components/Sidebar.js
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link href="/candidates"><a>Candidates</a></Link></li>
        <li><Link href="/teams"><a>Teams</a></Link></li>
        <li><Link href="/basic"><a>Basic</a></Link></li>
        <li><Link href="/rank-top"><a>Rank & Top</a></Link></li>
        <li><Link href="/search"><a>Search</a></Link></li>
      </ul>
    </div>
  );
}

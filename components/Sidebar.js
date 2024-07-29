// components/Sidebar.js
import Link from 'next/link';

const Sidebar = () => (
  <div className="sidebar">
    <ul>
      <li>
        <Link href="/candidates">
          Candidates
        </Link>
      </li>
      <li>
        <Link href="/teams">
          Teams
        </Link>
      </li>
      <li>
        <Link href="/basic">
          Basic
        </Link>
      </li>
      <li>
        <Link href="/rank-top">
          Rank & Top
        </Link>
      </li>
      <li>
        <Link href="/search">
          Search
        </Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;

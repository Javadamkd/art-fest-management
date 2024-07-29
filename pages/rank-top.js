// pages/rank-top.js
import Link from 'next/link';

export default function RankTop() {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <h1>Rank & Top</h1>
        <div className="card">
          <p>Ranking and top candidates...</p>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
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
}

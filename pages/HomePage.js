// pages/HomePage.js
import Link from 'next/link';
import '../styles/styles.css';

export default function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to Art Fest Management</h1>
      <ul>
        <li><Link href="/candidates"><a>Candidates</a></Link></li>
        <li><Link href="/programs"><a>Programs</a></Link></li>
        <li><Link href="/results"><a>Results</a></Link></li>
        <li><Link href="/teams"><a>Teams</a></Link></li>
      </ul>
    </div>
  );
}

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Art Fest Management</h1>
      <nav>
        <ul>
          <li><Link href="/candidates">Candidates</Link></li>
          <li><Link href="/programs">Programs</Link></li>
          <li><Link href="/results">Results</Link></li>
          <li><Link href="/teams">Teams</Link></li>
        </ul>
      </nav>
    </div>
  );
}

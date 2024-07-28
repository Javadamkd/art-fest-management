import Link from 'next/link';

export default function Programs() {
  return (
    <div>
      <h1>Programs Page</h1>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/candidates">Candidates</Link></li>
          <li><Link href="/results">Results</Link></li>
          <li><Link href="/teams">Teams</Link></li>
        </ul>
      </nav>
    </div>
  );
}

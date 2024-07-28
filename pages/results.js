import Link from 'next/link';

export default function Results() {
  return (
    <div>
      <h1>Results Page</h1>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/candidates">Candidates</Link></li>
          <li><Link href="/programs">Programs</Link></li>
          <li><Link href="/teams">Teams</Link></li>
        </ul>
      </nav>
    </div>
  );
}

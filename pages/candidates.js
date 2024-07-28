import Link from 'next/link';

export default function Candidates() {
  return (
    <div>
      <h1>Candidates Page</h1>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/programs">Programs</Link></li>
          <li><Link href="/results">Results</Link></li>
          <li><Link href="/teams">Teams</Link></li>
        </ul>
      </nav>
    </div>
  );
}

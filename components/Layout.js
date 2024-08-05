import Link from 'next/link';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/teams">Teams</Link>
        </li>
        <li>
          <Link href="/candidates">Candidates</Link>
        </li>
        <li>
          <Link href="/programs">Programs</Link>
        </li>
        <li>
          <Link href="/results">Results</Link>
        </li>
      </ul>
    </nav>
  );
}

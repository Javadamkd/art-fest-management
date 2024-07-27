import Link from 'next/link';

const NavBar = () => (
  <nav>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/results">Results</Link></li>
      <li><Link href="/teams">Teams</Link></li>
      <li><Link href="/candidates">Candidates</Link></li>
      <li><Link href="/programs">Programs</Link></li>
    </ul>
  </nav>
);

export default NavBar;


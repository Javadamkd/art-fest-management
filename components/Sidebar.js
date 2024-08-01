export default function Sidebar() {
  // component code
}import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav>
      <Link href="/teams">Teams</Link>
      <Link href="/programs">Programs</Link>
      <Link href="/candidates">Candidates</Link>
    </nav>
  );
};

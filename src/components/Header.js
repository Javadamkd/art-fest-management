import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/results">
              <a>Results</a>
            </Link>
          </li>
          <li>
            <Link href="/programs">
              <a>Programs</a>
            </Link>
          </li>
          {/* Add other navigation links here */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import Link from "next/link";

const Navbar = (props) => (
  <>
  <ul className="navbar flex text-sm font-medium border-b border-gray-100">
    <li className={props.location === 'home' ? 'active' : 'inactive'}>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li className={props.location === 'about' ? 'active' : 'inactive'}>
      <Link href="/about/">
        <a>About</a>
      </Link>
    </li>
    <li className={props.location === 'github' ? 'active' : 'inactive'}>
      <a href="">GitHub</a>
    </li>

    <style jsx>
      {`
        .inactive {
          @apply p-4 -mb-px border-b border-transparent;
        }
        .navbar :global(a:hover) {
          @apply no-underline text-cyan-500;
        }
        .active {
          @apply p-4 -mb-px border-b border-current text-cyan-500;
        }
        .active a {
          @apply text-cyan-500;
        }
      `}
    </style>
  </ul>
  </>
);

export { Navbar };

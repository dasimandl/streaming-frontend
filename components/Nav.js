import Link from "next/link";

const Nav = () => (
  <div>
    <Link href="/admin">
      <a>Admin</a>
    </Link>
    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
);

export default Nav;

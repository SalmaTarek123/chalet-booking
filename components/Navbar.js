import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo">Our Chalets</Link>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/#destinations">Destinations</Link></li>
        <li><Link href="/#about">About Us</Link></li>
      </ul>
    </nav>
  );
}
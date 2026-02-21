import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Grace & Faith Ministries</h1>
      <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="/about">About</Link> |{" "}
        <Link href="/devotional">Devotional</Link> |{" "}
        <Link href="/newsletter">Newsletter</Link> |{" "}
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

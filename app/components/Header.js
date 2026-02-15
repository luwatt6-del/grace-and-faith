import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Grace & Faith Ministries</h1>
      <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}



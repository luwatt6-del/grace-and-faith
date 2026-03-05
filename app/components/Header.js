import Link from "next/link";

export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Grace & Faith Ministries</h1>

      <nav style={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/devotional">Devotional</Link>
        <Link href="/newsletter">Newsletter</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    textAlign: "center",
    padding: "25px",
    backgroundColor: "#f7f7f7",
    borderBottom: "1px solid #e5e5e5",
  },

  title: {
    marginBottom: "10px",
    fontWeight: "600",
  },

  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    fontSize: "16px",
  },
};

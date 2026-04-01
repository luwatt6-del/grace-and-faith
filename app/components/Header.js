import Link from "next/link";

export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Grace & Faith Ministries</h1>

      <nav style={styles.nav}>
        <Link href="/" style={styles.navHome}>Home</Link>
        <Link href="/about" style={styles.navAbout}>About</Link>
        <Link href="/devotional" style={styles.navDevotional}>Devotional</Link>
        <Link href="/newsletter" style={styles.navNewsletter}>Newsletter</Link>
        <Link href="/contact" style={styles.navContact}>Contact</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    textAlign: "center",
    padding: "25px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #eee",
  },

  title: {
    marginBottom: "15px",
    fontWeight: "600",
    color: "#7a6fa5"
  },

  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap"
  },

  navHome: {
    backgroundColor: "#e6f0fa",
    padding: "8px 12px",
    borderRadius: "6px",
    textDecoration: "none",
    color: "#333"
  },

  navAbout: {
    backgroundColor: "#f3f0fa",
    padding: "8px 12px",
    borderRadius: "6px",
    textDecoration: "none",
    color: "#333"
  },

  navDevotional: {
    backgroundColor: "#fff1e6",
    padding: "8px 12px",
    borderRadius: "6px",
    textDecoration: "none",
    color: "#333"
  },

  navNewsletter: {
    backgroundColor: "#e8f5e9",
    padding: "8px 12px",
    borderRadius: "6px",
    textDecoration: "none",
    color: "#333"
  },

  navContact: {
    backgroundColor: "#fdecef",
    padding: "8px 12px",
    borderRadius: "6px",
    textDecoration: "none",
    color: "#333"
  }
};

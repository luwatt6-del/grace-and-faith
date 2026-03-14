import Link from "next/link";

export default function HomePage() {
  return (
    <div style={styles.container}>

      {/* Welcome Section */}
      <section style={styles.hero}>
        <h1>Welcome to Grace & Faith Ministries</h1>
    <section style={styles.section}>
  <h2>Scripture for the Heart</h2>

  <p>
    “The Lord is close to the brokenhearted and saves those who are crushed in spirit.”
    – Psalm 34:18
  </p>

  <p>
    Grace & Faith Ministries is a place of hope, restoration, and the
    transforming power of God's Word.
  </p>

  <p>
    We are committed to sharing the love of Christ, strengthening faith,
    and encouraging lives through prayer, teaching, and spiritual support.
  </p>
</section>

        <p style={styles.tagline}>
          A place to grow in faith, experience God's grace, and find hope
          through His Word.
        </p>

        <Link href="/devotional" style={styles.button}>
          Read This Week's Devotional
        </Link>
      </section>

      {/* Devotional Highlight */}
      <section style={styles.section}>
        <h2>Weekly Devotional</h2>

        <p>
          Each week we focus on a theme rooted in Scripture —
          faith, grace, or hope — offering reflection, prayer,
          and encouragement for your spiritual journey.
        </p>

        <Link href="/devotional">Visit the Devotional Page →</Link>
      </section>

      {/* Newsletter */}
      <section style={styles.section}>
        <h2>Join the Newsletter</h2>

        <p>
          Receive weekly devotionals, scripture encouragement,
          and updates from Grace & Faith Ministries directly in your inbox.
        </p>

        <Link href="/newsletter">Subscribe to the Newsletter →</Link>
      </section>

      {/* Future Shop */}
      <section style={styles.section}>
        <h2>Online Shop (Coming Soon)</h2>

        <p>
          Soon you will be able to support the ministry through our
          online shop featuring Christian-inspired items designed to
          encourage faith and spread hope.
        </p>
      </section>

    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
    lineHeight: "1.8",
    fontFamily: "Georgia, serif"
  },

  hero: {
    textAlign: "center",
    marginBottom: "60px"
  },

  tagline: {
    fontStyle: "italic",
    marginBottom: "25px"
  },

  button: {
    backgroundColor: "#4a6fa5",
    color: "white",
    padding: "12px 20px",
    borderRadius: "6px",
    textDecoration: "none",
    fontSize: "16px"
  },

  section: {
    marginBottom: "50px"
  }
};

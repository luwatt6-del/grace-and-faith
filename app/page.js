import Link from "next/link";

export default function HomePage() {
  return (
    <div style={styles.container}>
    <div style={styles.navbar}>
  <Link href="/" style={styles.navHome}>Home</Link>
  <Link href="/about" style={styles.navAbout}>About</Link>
  <Link href="/devotional" style={styles.navDevotional}>Devotional</Link>
  <Link href="/newsletter" style={styles.navNewsletter}>Newsletter</Link>
  <Link href="/contact" style={styles.navContact}>Contact</Link>
</div>

      {/* Welcome Section */}
      <section style={styles.hero}>
        <h1 style={styles.mainTitle}>Grace & Faith Ministries</h1>

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

        <div style={styles.verseBox}>
          <h3>Verse of Hope</h3>

          <p style={{ fontStyle: "italic" }}>
            “The Lord is close to the brokenhearted and saves those who are crushed in spirit.”
          </p>

          <p>— Psalm 34:18</p>
        </div>

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

      {/* Newsletter Section */}
      <section style={styles.section}>
        <h2>Newsletter</h2>

        <p>
          Stay connected with Grace & Faith Ministries by joining our newsletter.
          Receive encouragement, devotionals, and updates directly to your inbox.
        </p>

        <Link href="/newsletter">Join the Newsletter →</Link>
      </section>

      {/* Shop Section */}
      <div style={styles.shopSection}>
        <h2>Shop (Coming Soon)</h2>

        <p>
          We are preparing something special for you.
        </p>

        <p>
          Our upcoming shop will feature faith-inspired items including
          biblical souvenirs, apparel, and meaningful pieces designed
          to uplift and inspire your daily walk with God.
        </p>

        <p style={styles.comingSoon}>
          Stay tuned — something beautiful is on the way ✨
        </p>
      </div>

    </div>
  );
}

const styles = {
  container: {
  padding: "40px 15px",
  fontFamily: "Georgia, serif",
  lineHeight: "1.8",
  overflowX: "hidden"
},

  hero: {
    textAlign: "center",
    marginBottom: "60px"
  },

  section: {
    maxWidth: "750px",
    margin: "40px auto"
  },

  verseBox: {
    marginTop: "35px",
    padding: "25px",
    backgroundColor: "#f3f6fb",
    borderRadius: "10px",
    textAlign: "center",
    border: "1px solid #e0e6f0",
    maxWidth: "650px",
    marginLeft: "auto",
    marginRight: "auto"
  },

  tagline: {
    marginTop: "30px",
    fontStyle: "italic"
  },

  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "12px 20px",
    backgroundColor: "#4a6fa5",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px"
  },

  shopSection: {
    marginTop: "60px",
    padding: "30px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    textAlign: "center"
  },

  comingSoon: {
    marginTop: "10px",
    fontStyle: "italic",
    color: "#777"
  },
  mainTitle: {
  color: "#7a6fa5",
  textAlign: "center",
  marginBottom: "20px"
},

missionBox: {
  backgroundColor: "#f3f0fa",
  padding: "25px",
  borderRadius: "10px",
  marginTop: "30px",
  border: "1px solid #e0d9f5"
},

navbar: {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginBottom: "30px",
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
   

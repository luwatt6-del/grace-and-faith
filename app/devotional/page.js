import Link from "next/link";

export default function DevotionalPage() {
  return (
    <div style={styles.container}>

      <h1 style={styles.title}>📖 Weekly Devotional</h1>

      {/* 🌟 LATEST DEVOTIONAL */}
      <div style={styles.latestBox}>
        <h2>Finding Peace in the Waiting</h2>
        <p style={styles.date}>April 6, 2026</p>

        <p style={styles.scripture}>
          “Be still before the Lord and wait patiently for Him…”
          <br />— Psalm 37:7
        </p>

        <p>
          Waiting is one of the hardest seasons we face. We pray, we hope,
          and yet the answers do not come when we expect them.
        </p>

        <p>
          In the waiting, it can feel like God is silent — but silence does not
          mean absence. God is working behind the scenes, aligning things in
          ways we cannot yet see.
        </p>

        <p>
          Waiting is not wasted time. It is a season where faith is stretched,
          patience is formed, and trust is deepened.
        </p>

        <p>
          If you find yourself in a waiting season, know this:
          God has not forgotten you. He is preparing something beautiful
          in His perfect time.
        </p>

        <h3>Prayer</h3>
        <p>
          Lord, help me to trust You in the waiting. Give me peace when I feel
          anxious and remind me that Your timing is always perfect. Amen.
        </p>
      </div>

      <hr style={styles.divider} />

      {/* 📚 PREVIOUS DEVOTIONALS */}
      <h2>Previous Devotionals</h2>

      <div style={styles.archiveBox}>
  <h3>
    <Link href="/devotional/issue4">
      Trusting God When You Don’t Understand
    </Link>
  </h3>
        <p style={styles.date}>March 30, 2026</p>
        <p>Learning to trust God even when life doesn’t make sense.</p>
      </div>

      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue3">Faith in Everyday Living</Link>
        </h3>
        <p style={styles.date}>March 23, 2026</p>
        <p>Learning to walk with God daily in simple, faithful ways.</p>
      </div>

      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue2">Hope When Life Feels Heavy</Link>
        </h3>
        <p style={styles.date}>March 16, 2026</p>
        <p>Finding strength and encouragement during difficult seasons.</p>
      </div>

      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue1">Grace in Difficult Seasons</Link>
        </h3>
        <p style={styles.date}>March 9, 2026</p>
        <p>Understanding God’s grace in times of hardship and struggle.</p>
      </div>

    </div>
  );
}

const styles = {
  container: {
    maxWidth: "750px",
    margin: "0 auto",
    padding: "40px 15px",
    fontFamily: "Georgia, serif",
    lineHeight: "1.8"
  },

  title: {
    textAlign: "center",
    marginBottom: "40px"
  },

  latestBox: {
    backgroundColor: "#f3f6fb",
    padding: "25px",
    borderRadius: "10px",
    border: "1px solid #e0e6f0",
    marginBottom: "30px"
  },
  scripture: {
    fontStyle: "italic",
    marginBottom: "15px"
  },

  divider: {
    margin: "40px 0"
  },

  archiveBox: {
    marginBottom: "20px",
    padding: "15px",
    backgroundColor: "#fafafa",
    borderRadius: "8px",
    border: "1px solid #eee"
  },

  date: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "10px"
  }
};

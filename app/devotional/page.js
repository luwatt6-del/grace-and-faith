import Link from "next/link";

export default function DevotionalPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📖 Weekly Devotional</h1>

      {/* 🌟 LATEST DEVOTIONAL */}
      <div style={styles.latestBox}>
        <h2>Peace in Uncertain Times</h2>
        <p style={styles.date}>April 27, 2026</p>

        <p style={styles.scripture}>
          “You will keep in perfect peace those whose minds are steadfast,
          because they trust in You.”
          <br />— Isaiah 26:3
        </p>

        <p>
          Life can sometimes feel uncertain. Plans change, doors close,
          and answers do not always come when we expect them.
        </p>

        <p>
          In seasons like these, the heart can become restless and anxious.
          Yet God offers a peace that is deeper than circumstances.
        </p>

        <p>
          His peace comes when we choose to trust Him, even when we do not
          understand what lies ahead.
        </p>

        <p>
          You may not know every answer today, but you can know that God
          is still in control, still faithful, and still near.
        </p>

        <h3>Prayer</h3>
        <p>
          Lord, calm every anxious thought within me. Help me to trust You
          in uncertain times and fill my heart with Your perfect peace.
          Amen.
        </p>
      </div>

      <hr style={styles.divider} />

      {/* 📚 PREVIOUS DEVOTIONALS */}
      <h2 style={styles.subTitle}>Previous Devotionals</h2>

      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue6" style={styles.link}>
            Strength for Today
          </Link>
        </h3>
        <p style={styles.date}>April 20, 2026</p>
        <p>Receiving fresh grace and strength for each new day.</p>
      </div>

      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue5" style={styles.link}>
            God’s Timing is Perfect
          </Link>
        </h3>
        <p style={styles.date}>April 13, 2026</p>
        <p>Trusting God when delays become preparation.</p>
      </div>

      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue4" style={styles.link}>
            Finding Peace in the Waiting
          </Link>
        </h3>
        <p style={styles.date}>April 6, 2026</p>
        <p>Learning patience and trust while waiting on God.</p>
      </div>

      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue3" style={styles.link}>
            Faith in Everyday Living
          </Link>
        </h3>
        <p style={styles.date}>March 23, 2026</p>
        <p>Walking with God daily in simple and faithful ways.</p>
      </div>

      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue2" style={styles.link}>
            Hope When Life Feels Heavy
          </Link>
        </h3>
        <p style={styles.date}>March 16, 2026</p>
        <p>Finding encouragement during difficult seasons.</p>
      </div>

      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue1" style={styles.link}>
            Grace in Difficult Seasons
          </Link>
        </h3>
        <p style={styles.date}>March 9, 2026</p>
        <p>Understanding God’s grace in times of hardship.</p>
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
    marginBottom: "30px"
  },

  subTitle: {
    marginBottom: "25px"
  },

  latestBox: {
    backgroundColor: "#f3f6fb",
    padding: "25px",
    borderRadius: "10px",
    border: "1px solid #e0e6f0",
    marginBottom: "30px"
  },

  divider: {
    margin: "40px 0"
  },

  archiveBox: {
    marginBottom: "20px",
    padding: "15px",
    backgroundColor: "#fafafa",
    borderRadius: "10px",
    border: "1px solid #eee",
    transition: "all 0.3s ease"
  },

  link: {
    textDecoration: "none",
    color: "#5a4fcf"
  },

  date: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "10px"
  },

  scripture: {
    fontStyle: "italic",
    marginBottom: "15px"
  }
};

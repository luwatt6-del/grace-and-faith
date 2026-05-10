import Link from "next/link";

export default function DevotionalPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📖 Weekly Devotional</h1>

      {/* 🌟 LATEST DEVOTIONAL */}
      <div style={styles.latestBox}>
        <h2>Walking by Faith Each Day</h2>
        <p style={styles.date}>May 10, 2026</p>

        <p style={styles.scripture}>
          “For we walk by faith, not by sight.”
          <br />— 2 Corinthians 5:7
        </p>

        <p>
          Faith is not only needed during major life moments.
          Often, it is needed in ordinary days — the quiet days,
          the uncertain days, and the days when nothing seems to change.
        </p>

        <p>
          Walking by faith means trusting God even when we cannot
          clearly see the outcome ahead of us.
        </p>

        <p>
          There will be moments when emotions try to speak louder
          than God’s promises. In those moments, choose to stand on truth,
          not fear.
        </p>

        <p>
          God is guiding your steps, even when the path feels unclear.
          Keep walking. Keep praying. Keep trusting.
        </p>

        <h3>Prayer</h3>
        <p>
          Lord, help me to walk by faith each day.
          Strengthen my trust in You and remind me that You are leading me,
          even when I cannot see the full path ahead. Amen.
        </p>
      </div>

      <hr style={styles.divider} />

      {/* 📚 PREVIOUS DEVOTIONALS */}
      <h2>Previous Devotionals</h2>

      {/* Issue 8 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue8">
            Resting in God’s Presence
          </Link>
        </h3>
        <p style={styles.date}>May 4, 2026</p>
        <p>Finding peace and stillness in God’s presence.</p>
      </div>

      {/* Issue 7 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue7">
            Peace in Uncertain Times
          </Link>
        </h3>
        <p style={styles.date}>April 27, 2026</p>
        <p>Trusting God when life feels uncertain.</p>
      </div>

      {/* Issue 6 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue6">
            Strength for Today
          </Link>
        </h3>
        <p style={styles.date}>April 20, 2026</p>
      </div>

      {/* Issue 5 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue5">
            God’s Timing is Perfect
          </Link>
        </h3>
        <p style={styles.date}>April 13, 2026</p>
      </div>

      {/* Issue 4 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue4">
            Finding Peace in the Waiting
          </Link>
        </h3>
        <p style={styles.date}>April 6, 2026</p>
      </div>

      {/* Issue 3 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue3">
            Faith in Everyday Living
          </Link>
        </h3>
        <p style={styles.date}>March 23, 2026</p>
      </div>

      {/* Issue 2 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue2">
            Hope When Life Feels Heavy
          </Link>
        </h3>
        <p style={styles.date}>March 16, 2026</p>
      </div>

      {/* Issue 1 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue1">
            Grace in Difficult Seasons
          </Link>
        </h3>
        <p style={styles.date}>March 9, 2026</p>
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
    border: "1px solid #eee"
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

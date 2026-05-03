import Link from "next/link";

export default function DevotionalPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📖 Weekly Devotional</h1>

      {/* 🌟 LATEST DEVOTIONAL */}
      <div style={styles.latestBox}>
        <h2>Resting in God’s Presence</h2>
        <p style={styles.date}>May 4, 2026</p>

        <p style={styles.scripture}>
          “Be still, and know that I am God…”
          <br />— Psalm 46:10
        </p>

        <p>
          In a world that constantly demands more, it can feel difficult to slow down.
          There is always something to do, somewhere to go, or something requiring attention.
        </p>

        <p>
          Yet God gently calls us to be still. Not just physically, but in our hearts and minds.
        </p>

        <p>
          Stillness is where we remember who God is. It is where anxiety begins to quiet,
          and peace begins to rise.
        </p>

        <p>
          You do not have to strive endlessly to feel secure. You can rest in God’s presence,
          knowing that He is in control of every detail of your life.
        </p>

        <h3>Prayer</h3>
        <p>
          Lord, teach me to be still in Your presence. Calm my thoughts, quiet my fears,
          and help me to rest in the assurance that You are God. Amen.
        </p>
      </div>

      <hr style={styles.divider} />

      {/* 📚 PREVIOUS DEVOTIONALS */}
      <h2>Previous Devotionals</h2>

      {/* Issue 7 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue7">Peace in Uncertain Times</Link>
        </h3>
        <p style={styles.date}>April 27, 2026</p>
        <p>Trusting God when life feels uncertain and overwhelming.</p>
      </div>

      {/* Issue 6 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue6">Strength for Today</Link>
        </h3>
        <p style={styles.date}>April 20, 2026</p>
        <p>Receiving fresh grace and strength for each day.</p>
      </div>

      {/* Issue 5 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue5">God’s Timing is Perfect</Link>
        </h3>
        <p style={styles.date}>April 13, 2026</p>
        <p>Trusting God when delays are part of His plan.</p>
      </div>

      {/* Issue 4 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue4">Finding Peace in the Waiting</Link>
        </h3>
        <p style={styles.date}>April 6, 2026</p>
        <p>Learning patience and trust while waiting on God.</p>
      </div>

      {/* Issue 3 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue3">Faith in Everyday Living</Link>
        </h3>
        <p style={styles.date}>March 23, 2026</p>
      </div>

      {/* Issue 2 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue2">Hope When Life Feels Heavy</Link>
        </h3>
        <p style={styles.date}>March 16, 2026</p>
      </div>

      {/* Issue 1 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue1">Grace in Difficult Seasons</Link>
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

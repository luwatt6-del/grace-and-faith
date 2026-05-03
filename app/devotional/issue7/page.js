import Link from "next/link";

export default function Issue7Page() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Peace in Uncertain Times</h1>

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
        in uncertain times and fill my heart with Your perfect peace. Amen.
      </p>

      <Link href="/devotional" style={styles.backButton}>
        ← Back to Devotionals
      </Link>
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
    marginBottom: "10px"
  },

  date: {
    textAlign: "center",
    fontSize: "14px",
    color: "#777",
    marginBottom: "20px"
  },

  scripture: {
    fontStyle: "italic",
    marginBottom: "20px"
  },

  backButton: {
    display: "inline-block",
    marginTop: "30px",
    padding: "10px 18px",
    backgroundColor: "#f3f0fa",
    color: "#333",
    textDecoration: "none",
    borderRadius: "8px"
  }
};

import Link from "next/link";

export default function Issue6Page() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Strength for Today</h1>

      <p style={styles.date}>April 20, 2026</p>

      <p style={styles.scripture}>
        “God is our refuge and strength, an ever-present help in trouble.”
        <br />— Psalm 46:1
      </p>

      <p>
        Some days feel heavier than others. Responsibilities grow,
        emotions rise, and strength feels limited.
      </p>

      <p>
        But God does not ask us to carry today alone.
        He offers fresh strength for each new morning.
      </p>

      <p>
        You may not have strength for next week or next month right now,
        but you can receive grace for today.
      </p>

      <p>
        One step at a time. One prayer at a time.
        One day at a time.
      </p>

      <h3>Prayer</h3>

      <p>
        Lord, thank You for being my refuge and strength.
        Give me grace for today and peace for this moment.
        Amen.
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

import Link from "next/link";

export default function DevotionalPage() {
  return (
    <div style={styles.container}>

      <h1 style={styles.title}>📖 Weekly Devotional</h1>

      {/* 🌟 LATEST DEVOTIONAL */}
      <div style={styles.latestBox}>
        <h2>Strength for Today</h2>
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
      </div>

      <hr style={styles.divider} />

      {/* 📚 PREVIOUS DEVOTIONALS */}
      <h2>Previous Devotionals</h2>

      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue5">
            God’s Timing is Perfect
          </Link>
        </h3>
        <p style={styles.date}>April 13, 2026</p>
      </div>

      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue4">
            Trusting God When You Don’t Understand
          </Link>
        </h3>
        <p style={styles.date}>March 30, 2026</p>
      </div>

      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue3">
            Faith in Everyday Living
          </Link>
        </h3>
        <p style={styles.date}>March 23, 2026</p>
      </div>

      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue2">
            Hope When Life Feels Heavy
          </Link>
        </h3>
        <p style={styles.date}>March 16, 2026</p>
      </div>

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
    border: "1px solid #eee",
    transition: "all 0.3s ease",
    cursor: "pointer"
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

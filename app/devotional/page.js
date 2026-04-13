import Link from "next/link";

export default function DevotionalPage() {
  return (
    <div style={styles.container}>

      <h1 style={styles.title}>📖 Weekly Devotional</h1>

      {/* 🌟 LATEST DEVOTIONAL */}
      <div style={styles.latestBox}>
        <h2>God’s Timing is Perfect</h2>
        <p style={styles.date}>April 13, 2026</p>

        <p style={styles.scripture}>
          “He has made everything beautiful in its time…”
          <br />— Ecclesiastes 3:11
        </p>

        <p>
          There are moments in life when we feel ready for something new,
          yet nothing seems to move.
        </p>

        <p>
          But God’s timing is not our timing. While we are waiting,
          He is working behind the scenes.
        </p>

        <p>
          Trust that your season of waiting is not wasted.
          Something beautiful is being formed.
        </p>

        <h3>Prayer</h3>
        <p>
          Lord, help me to trust Your timing. Give me peace in the waiting. Amen.
        </p>
      </div>

      <hr style={styles.divider} />

      {/* 📚 PREVIOUS DEVOTIONALS */}

      <h2>Previous Devotionals</h2>

      {/* Issue 5 */}
      <div
        style={styles.archiveBox}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#f3f0fa";
          e.currentTarget.style.transform = "scale(1.02)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#fafafa";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <h3>
          <Link href="/devotional/issue5">God’s Timing is Perfect</Link>
        </h3>
        <p style={styles.date}>April 13, 2026</p>
      </div>

      {/* Issue 4 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue4">
            Trusting God When You Don’t Understand
          </Link>
        </h3>
        <p style={styles.date}>March 30, 2026</p>
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
    borderRadius: "10px",
    border: "1px solid #eee",
    transition: "all 0.3s ease",
    cursor: "pointer"
  },

  date: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "10px"
  }
};

  

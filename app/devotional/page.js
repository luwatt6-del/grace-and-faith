import Link from "next/link";

export default function DevotionalPage() {
  return (
    <div style={styles.container}>

      <h1 style={styles.title}>📖 Weekly Devotional</h1>

      {/* 🌟 LATEST DEVOTIONAL */}
      <div style={styles.latestBox}>
        <h2>Strength for the Journey</h2>

        <p style={styles.date}>May 24, 2026</p>

        <p style={styles.scripture}>
          “But those who hope in the Lord will renew their strength.”
          <br />— Isaiah 40:31
        </p>

        <p>
          Life’s journey can sometimes feel exhausting. There are moments
          when responsibilities, disappointments, and uncertainty leave us
          feeling weak and overwhelmed.
        </p>

        <p>
          Yet God never intended for us to carry every burden alone.
          His strength becomes available to us when our own strength fails.
        </p>

        <p>
          When we place our hope in Him, He renews our hearts,
          restores our peace, and gives us courage to continue.
        </p>

        <p>
          You may feel tired today, but God is able to sustain you.
          One step at a time, His grace will carry you through the journey ahead.
        </p>

        <h3>Prayer</h3>

        <p>
          Lord, when I feel weary, renew my strength.
          Help me to place my hope fully in You and trust that
          You will guide me each step of the way. Amen.
        </p>
      </div>

      <hr style={styles.divider} />

      {/* 📚 PREVIOUS DEVOTIONALS */}
      <h2>Previous Devotionals</h2>

      {/* Issue 7 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue7">
            Peace in the Middle of the Storm
          </Link>
        </h3>

        <p style={styles.date}>May 17, 2026</p>

        <p>
          Trusting God’s peace even during life’s most difficult moments.
        </p>
      </div>

      {/* Issue 6 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue6">
            Walking by Faith Each Day
          </Link>
        </h3>

        <p style={styles.date}>May 10, 2026</p>

        <p>
          Learning to trust God daily, even when the future is unclear.
        </p>
      </div>

      {/* Issue 5 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue5">
            God’s Timing is Perfect
          </Link>
        </h3>

        <p style={styles.date}>April 13, 2026</p>

        <p>
          Trusting God’s timing even when answers seem delayed.
        </p>
      </div>

      {/* Issue 4 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue4">
            Trusting God When You Don’t Understand
          </Link>
        </h3>

        <p style={styles.date}>March 30, 2026</p>

        <p>
          Learning to trust God even when life doesn’t make sense.
        </p>
      </div>

      {/* Issue 3 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue3">
            Faith in Everyday Living
          </Link>
        </h3>

        <p style={styles.date}>March 23, 2026</p>

        <p>
          Learning to walk with God daily in simple, faithful ways.
        </p>
      </div>

      {/* Issue 2 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue2">
            Hope When Life Feels Heavy
          </Link>
        </h3>

        <p style={styles.date}>March 16, 2026</p>

        <p>
          Finding strength and encouragement during difficult seasons.
        </p>
      </div>

      {/* Issue 1 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue1">
            Grace in Difficult Seasons
          </Link>
        </h3>

        <p style={styles.date}>March 9, 2026</p>

        <p>
          Understanding God’s grace in times of hardship and struggle.
        </p>
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
    marginBottom: "40px",
    color: "#7a6fa5"
  },

  latestBox: {
    backgroundColor: "#f3f6fb",
    padding: "25px",
    borderRadius: "12px",
    border: "1px solid #e0e6f0",
    marginBottom: "30px"
  },

  scripture: {
    fontStyle: "italic",
    marginBottom: "20px"
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

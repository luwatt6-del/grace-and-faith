import Link from "next/link";

export default function DevotionalPage() {
  return (
    <div style={styles.container}>

      <h1 style={styles.title}>📖 Weekly Devotional</h1>

      {/* 🌟 LATEST DEVOTIONAL */}
     export default function Issue11Page() {
  return (
    <div style={styles.container}>
      <h1>Walking by Faith, Not by Sight</h1>

      <p style={styles.date}>May 31, 2026</p>

      <p style={styles.scripture}>
        “For we walk by faith, not by sight.”
        <br />
        — 2 Corinthians 5:7
      </p>

      <p>
        Many of life's greatest challenges come when we cannot see what lies
        ahead. We want clear answers, detailed plans, and certainty about the
        future. Yet God often calls us to trust Him one step at a time.
      </p>

      <p>
        Faith is not the absence of questions; it is the decision to trust God
        even when the answers have not yet come. It means believing that His
        hand is guiding us, even when the path seems unclear.
      </p>

      <p>
        When Peter stepped out onto the water, he was able to walk because his
        eyes were fixed on Jesus. The moment he focused on the wind and waves
        around him, fear began to take over. The same can happen in our lives.
        When we focus only on our circumstances, fear grows. But when we focus
        on Christ, faith grows.
      </p>

      <p>
        Today, whatever uncertainty you may be facing, remember that God sees
        the entire journey while we see only the next step. Trust Him to lead
        you forward.
      </p>

      <h3>Prayer</h3>

      <p>
        Lord, help me to walk by faith and not by sight. When I cannot see the
        way ahead, remind me that You are already there. Strengthen my trust in
        You and guide my steps each day. Amen.
      </p>
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

  date: {
    color: "#777",
    marginBottom: "20px"
  },

  scripture: {
    fontStyle: "italic",
    marginBottom: "20px"
  }
};
      {/* 📚 PREVIOUS DEVOTIONALS */}
      <h2>Previous Devotionals</h2>
  {/* Issue 10 */]
  <div style={styles.archiveBox}>
  <h3>
    <Link href="/devotional/issue8">
      Finding Strength in God's Presence
    </Link>
  </h3>
  <p style={styles.date}>May 24, 2026</p>
  <p>
    Discovering peace and strength through God's constant presence.
  </p>
</div>
            
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

import Link from "next/link";

export default function DevotionalPage() {
  return (
    <div style={styles.container}>

      <h1 style={styles.title}>📖 Weekly Devotional</h1>
  <img
        src="/weekly-devotional.jpg"
        alt="Weekly Devotional"
        style={styles.heroImage}
      />

      {/* 🌟 LATEST DEVOTIONAL */}
      <div style={styles.latestBox}>
        <h2>Holding on to God's Unchanging Hand</h2>

        <p style={styles.date}>June 7, 2026</p>

        <p style={styles.scripture}>
         "Jesus Christ is the same yesterday and today and forever."
          <br />
          — Hebrews 13:8
        </p>

        <p>
          Life is full of changes. Seasons come and go, circumstances shift,
        and sometimes the people and things we depend on are no longer there.
        In the middle of all that uncertainty, God remains constant.
        </p>

        <p>
          His love never changes. His promises never fail. His grace is always
        sufficient, and His presence never leaves us.
        </p>

        <Link href="/devotional/issue12">
          Read Full Devotional →
        </Link>
      </div>

      <hr style={styles.divider} />

      {/* 📚 PREVIOUS DEVOTIONALS */}
      <h2>Previous Devotionals</h2>

  {/* Issue 11 */}
<div style={styles.archiveBox}>
  <h3>
    <Link href="/devotional/issue11">
      Walking by Faith, Not by Sight
    </Link>
  </h3>

  <p style={styles.date}>May 31, 2026</p>

  <p>
    Trusting God to guide our steps even when the future is unclear.
  </p>
</div>   
  {/* Issue 10 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue10">
            Finding Strength in God's Presence
          </Link>
        </h3>

        <p style={styles.date}>May 24, 2026</p>

        <p>
          Discovering peace and strength through God's constant presence.
        </p>
      </div>

      {/* Issue 9 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue9">
            Peace in the Middle of the Storm
          </Link>
        </h3>

        <p style={styles.date}>May 17, 2026</p>

        <p>
          Trusting God’s peace even during life’s most difficult moments.
        </p>
      </div>

      {/* Issue 8 */}
      <div style={styles.archiveBox}>
        <h3>
          <Link href="/devotional/issue8">
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
heroImage: {
  width: "320px",
  maxWidth: "95%",
  display: "block",
  margin: "0 auto 30px auto",
  borderRadius: "14px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.12)"
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
    border: "1px solid #eee"
  },

  date: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "10px"
  }
};

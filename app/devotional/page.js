export default function DevotionalPage() {
  return (
    <div style={styles.container}>

      <h1 style={styles.title}>Weekly Devotional</h1>

      {/* 🌟 LATEST DEVOTIONAL */}
      <div style={styles.latestBox}>
        <h2>Trusting God When You Don’t Understand</h2>
       <p style={styles.date}>March 30, 2026</p>
        <p style={styles.scripture}>
          “Trust in the Lord with all your heart and lean not on your own understanding…”
          <br />— Proverbs 3:5–6
        </p>

        <p>
          There are moments in life when nothing seems to make sense. Doors close unexpectedly,
          prayers seem unanswered, and the path ahead feels uncertain.
        </p>

        <p>
          In those moments, God calls us to trust — not because we understand,
          but because He does.
        </p>

        <p>
          You may not understand what God is doing right now,
          but you can trust that He is working.
        </p>

        <h3>Prayer</h3>
        <p>
          Heavenly Father, help me to trust You even when I don’t understand.
          Strengthen my faith and remind me that You are in control.
          Amen.
        </p>
      </div>

      <hr style={styles.divider} />

      {/* 📚 PREVIOUS DEVOTIONALS */}
      <h2>Previous Devotionals</h2>

      <div style={styles.archiveBox}>
  <h3>Faith in Everyday Living</h3>
  <p style={styles.date}>March 23, 2026</p>
  <p>Learning to walk with God daily in simple, faithful ways.</p>
</div>

<div style={styles.archiveBox}>
  <h3>Hope When Life Feels Heavy</h3>
  <p style={styles.date}>March 16, 2026</p>
  <p>Finding strength and encouragement during difficult seasons.</p>
</div>

<div style={styles.archiveBox}>
  <h3>Grace in Difficult Seasons</h3>
  <p style={styles.date}>March 9, 2026</p>
  <p>Understanding God’s grace in times of hardship and struggle.</p>
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
    borderRadius: "8px",
    border: "1px solid #eee"
  },
  date: {
  fontSize: "14px",
  color: "#777",
  marginBottom: "10px"
}
};

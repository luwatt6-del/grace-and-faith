export default function Issue3Page() {
  return (
    <div style={styles.container}>
      <h1>Faith in Everyday Living</h1>

      <p style={styles.date}>March 23, 2026</p>

      <p style={styles.scripture}>
        “For we walk by faith, not by sight.”
        <br />— 2 Corinthians 5:7
      </p>

      <p>
        Faith is not only for the big moments in life — it is for the everyday.
        It is trusting God in the small decisions, the quiet moments,
        and the unseen steps along the way.
      </p>

      <p>
        Walking by faith means choosing to believe God’s Word,
        even when circumstances seem uncertain.
      </p>

      <p>
        As you go through your daily life, remember that God is with you
        in every step, guiding and strengthening you.
      </p>

      <h3>Prayer</h3>
      <p>
        Father, help me to walk by faith each day.
        Teach me to trust You in both the big and small moments of life.
        Amen.
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
    fontSize: "14px",
    color: "#777",
    marginBottom: "10px"
  },

  scripture: {
    fontStyle: "italic",
    marginBottom: "15px"
  }
};

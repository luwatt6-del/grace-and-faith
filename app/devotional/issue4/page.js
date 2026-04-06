export default function DevotionalIssue4() {
  return (
    <div style={styles.container}>

      <h1 style={styles.title}>Trusting God When You Don’t Understand</h1>
      <p style={styles.date}>March 30, 2026</p>

      <p style={styles.scripture}>
        “Trust in the Lord with all your heart and lean not on your own understanding…”
        <br />— Proverbs 3:5
      </p>

      <p>
        There are moments in life when things simply do not make sense.
        Doors close unexpectedly, plans fall apart, and the path ahead
        becomes unclear.
      </p>

      <p>
        In those moments, God does not ask us to understand — He asks us to trust.
        Trust goes beyond logic. It is a deep confidence that God sees what we
        cannot and knows what we do not.
      </p>

      <p>
        Even when life feels uncertain, God remains constant. His plans are
        still good, His timing is still perfect, and His love never changes.
      </p>

      <p>
        When you cannot trace His hand, you can still trust His heart.
      </p>

      <h3>Prayer</h3>
      <p>
        Lord, help me to trust You even when I do not understand what You are doing.
        Strengthen my faith and remind me that You are always in control. Amen.
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

  title: {
    textAlign: "center",
    marginBottom: "10px"
  },

  date: {
    textAlign: "center",
    color: "#777",
    marginBottom: "20px"
  },

  scripture: {
    fontStyle: "italic",
    marginBottom: "20px"
  }
};

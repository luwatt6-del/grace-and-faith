export default function Issue9Page() {
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

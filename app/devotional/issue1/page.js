export default function Issue1Page() {
  return (
    <div style={styles.container}>
      <h1>Grace in Difficult Seasons</h1>

      <p style={styles.date}>March 9, 2026</p>

      <p style={styles.scripture}>
        “My grace is sufficient for you, for my power is made perfect in weakness.”
        <br />— 2 Corinthians 12:9
      </p>

      <p>
        Life often brings seasons that feel overwhelming, uncertain, and painful.
        In those moments, we may wonder where God is and why we are facing such trials.
      </p>

      <p>
        Yet, it is in these very seasons that God’s grace becomes most evident.
        His strength meets us in our weakness, and His presence carries us through.
      </p>

      <p>
        Grace does not always remove the struggle, but it gives us the strength
        to endure and the faith to keep moving forward.
      </p>

      <h3>Prayer</h3>
      <p>
        Lord, thank You for Your grace that sustains me in difficult seasons.
        Help me to trust You even when life feels heavy. Amen.
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

export default function IssueOne() {
  return (
    <div style={styles.container}>

      <h1>Issue 1</h1>
      <h2>UnHAPPY Never After Newsletter</h2>

      <p style={styles.meta}>
        January 31, 2024
      </p>

      <p>
        The first issue of the Grace & Faith Newsletter introduces the heart
        behind this publication. Written from personal experience, this issue
        speaks to individuals navigating life after divorce and reminds readers
        that even in difficult seasons, hope and healing are possible.
      </p>

      <p>
        Through reflections, interviews, faith perspectives, practical advice,
        and even moments of creativity in the kitchen, this issue encourages
        readers to move forward one day at a time.
      </p>

      <p style={styles.quote}>
        “By this I know that thou favourest me, because mine enemy doth not
        triumph over me.” – Psalm 41:11
      </p>

      <a
        href="/issue1.pdf"
        target="_blank"
        style={styles.button}
      >
        Read Full Issue
      </a>

    </div>
  );
}

const styles = {

  container: {
    maxWidth: "750px",
    margin: "0 auto",
    padding: "60px 20px",
    fontFamily: "Georgia, serif",
    lineHeight: "1.8"
  },

  meta: {
    fontStyle: "italic",
    marginBottom: "20px"
  },

  quote: {
    fontStyle: "italic",
    marginTop: "30px"
  },

  button: {
    display: "inline-block",
    marginTop: "30px",
    padding: "12px 20px",
    backgroundColor: "#4a6fa5",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px"
  }

};

export default function IssueTwo() {
  return (
    <div style={styles.container}>

      <h1>Issue 2</h1>
      <h2>UnHAPPY Never After Newsletter</h2>

      <p style={styles.meta}>
        April 1, 2024
      </p>

      <p>
        Issue 2 continues the journey of healing and reflection with deeper
        conversations about relationships, faith, and moving forward after
        divorce. This issue features real interviews, spiritual encouragement,
        and practical insights for those rebuilding their lives.
      </p>

      <p>
        Readers will find conversations with couples, pastoral guidance on
        living a Christ-centered life after divorce, lifestyle inspiration,
        and practical encouragement for everyday living.
      </p>

      <p style={styles.quote}>
        “Now to Him who is able to do exceedingly abundantly above all that we
        ask or think.” – Ephesians 3:20
      </p>

      <a
        href="/issue2.pdf"
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

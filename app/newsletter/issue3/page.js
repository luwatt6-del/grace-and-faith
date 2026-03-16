export default function IssueThree() {
  return (
    <div style={styles.container}>

      <h1>Issue 3</h1>
      <h2>Faith in Everyday Living</h2>

      <p style={styles.meta}>
        Grace & Faith Newsletter – Issue 3
      </p>

      <p>
        In this issue we explore what it truly means to live by faith in our
        everyday lives. Faith is not only something we speak about on Sundays;
        it is something we live through our challenges, our decisions, and our
        quiet moments with God.
      </p>

      <p>
        This issue includes reflections on trusting God through life’s
        uncertainties, real stories from individuals navigating their journeys,
        practical inspiration for daily living, and spiritual encouragement
        rooted in Scripture.
      </p>

      <p>
        As always, this newsletter is written with the hope that every reader
        will be reminded that they are not alone, and that God’s grace is
        present even in the most difficult seasons of life.
      </p>

      <div style={styles.previewBox}>
        <h3>Continue Reading</h3>

        <p>
          The full Issue 3 includes:
        </p>

        <ul>
          <li>Editor's Reflection: Faith in Everyday Living</li>
          <li>Pastoral/Counselling Perspective</li>
          <li>Real Life Stories</li>
          <li>Fashion Inspiration</li>
          <li>Recipe Feature</li>
          <li>Did You Know Section</li>
          <li>Closing Reflection & Scripture</li>
        </ul>

        <p>
          To access the full newsletter, subscribe to the Grace & Faith
          Newsletter.
        </p>

        <button style={styles.button}>
          Subscribe to Read Full Issue
        </button>

      </div>

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

  previewBox: {
    marginTop: "40px",
    padding: "25px",
    backgroundColor: "#f5f7fa",
    borderRadius: "8px"
  },

  button: {
    marginTop: "20px",
    padding: "12px 20px",
    backgroundColor: "#4a6fa5",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }

};

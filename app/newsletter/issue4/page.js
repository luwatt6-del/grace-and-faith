export default function IssueThree() {
  return (
    <div style={styles.container}>

      <h1>Issue 4</h1>
      <h2>Comfort During Life's Challenges</h2>

      <p style={styles.meta}>
        Grace & Faith Newsletter – Issue 4
      </p>

      <p>
        In this issue Comfort During Life's Challenges, was created to encourage
        anyone who may be carrying burdens, facing difficult decisions, or simply trying
        to find peace in a demanding  season.
      </p>

      <p>
        This issue includes voice of hope, faith together, self care corner and receipe corner 
        and closing it off with a final blessing as you face this season in your life.
      </p>

      <p>
        As always, this newsletter is written with the hope that every reader
        will be reminded that they are not alone, and that God’s grace is
        present even in the most difficult seasons of life.
      </p>

      <div style={styles.previewBox}>
        <h3>Continue Reading</h3>

        <p>
          The full Issue 4 includes:
        </p>

        <ul>
          <li>Editor's Message: Confort During Life's Challenges</li>
          <li>Voice of Hope- Comfort During Life's  Challenges by D.D.</li>
          <li>Faith  Together- Couple feature by  Roger and Nenneitah Miles</li>
          <li>Self-CAre Corner</li>
          <li>Recipe Corner- Cheese and Vegetable Casserole</li>
          <li>Final Blessing</li>
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

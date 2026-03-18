import Link from "next/link";

export default function NewsletterPage() {
  return (
    <div style={styles.container}>

      <h1 style={styles.title}>Grace & Faith Newsletter</h1>

      <p style={styles.intro}>
        Dear Reader,
      </p>

      <p style={styles.text}>
        The Grace & Faith Newsletter was born out of real life experiences —
        moments of struggle, quiet prayers, unanswered questions,
        and the gentle reminder that God is still present in the midst of it all.
      </p>

      <p style={styles.text}>
        This space was created to be a voice for everyday people navigating
        life while holding on to faith. Each issue shares reflections,
        conversations, and stories that remind us we are not alone in our journey.
      </p>

      <p style={styles.text}>
        Whether through personal reflections, real stories,
        or small moments of inspiration, our hope is that
        every issue brings encouragement to your heart
        and strengthens your walk with God.
      </p>

      <hr style={styles.divider} />

      <h2>Available Issues</h2>

      <div style={styles.issueBox}>
        <h3>Issue 1</h3>
        <p>Grace in Difficult Seasons</p>
        <Link href="/newsletter/issue1">Read Issue →</Link>
      </div>

      <div style={styles.issueBox}>
        <h3>Issue 2</h3>
        <p>Hope When Life Feels Heavy</p>
        <Link href="/newsletter/issue2">Read Issue →</Link>
      </div>

      <div style={styles.issueBoxPremium}>
        <h3>Issue 3</h3>
        <p><strong>Faith in Everyday Living</strong></p>
      <a 
       href="/newsletters/issue3.pdf" 
       target="_blank" 
      className="bg-black text-white px-4 py-2 rounded"
      >
      Read Issue 3
        <p>
          In this issue we explore what it means to live by faith
          in our everyday lives — through real stories,
          reflection, faith conversations, and encouragement.
        </p>

        <p style={styles.premiumNote}>
          This issue is part of our premium newsletter.
        </p>

        <button style={styles.button}>
          Subscribe to Continue Reading
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

  title: {
    textAlign: "center",
    marginBottom: "30px"
  },

  intro: {
    fontStyle: "italic",
    marginBottom: "10px"
  },

  text: {
    marginBottom: "20px"
  },

  divider: {
    margin: "40px 0"
  },

  issueBox: {
    border: "1px solid #e0e6f0",
    borderRadius: "8px",
    padding: "20px",
    marginTop: "20px"
  },

  issueBoxPremium: {
    border: "1px solid #d4c7a1",
    backgroundColor: "#faf8f2",
    borderRadius: "8px",
    padding: "25px",
    marginTop: "30px"
  },

  premiumNote: {
    fontStyle: "italic",
    marginTop: "10px"
  },

  button: {
    marginTop: "15px",
    padding: "12px 20px",
    backgroundColor: "#4a6fa5",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }

};

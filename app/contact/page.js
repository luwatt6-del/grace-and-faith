export default function ContactPage() {
  return (
    <div style={styles.container}>

      <h1 style={styles.title}>Prayer Request</h1>

      <p style={styles.intro}>
        If you are walking through a difficult season and would like prayer,
        you are welcome to share your request. Every message is received
        with care, compassion, and confidentiality.
      </p>

      <p style={styles.scripture}>
        “Cast all your anxiety on Him because He cares for you.”
        <br />
        — 1 Peter 5:7
      </p>

      <div style={styles.formBox}>

       <form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
>

  <label>Your Name</label>
  <input type="text" name="name" required />

  <label>Email</label>
  <input type="email" name="email" required />

  <label>Prayer Request</label>
  <textarea name="message" required></textarea>

  <button type="submit">Send Prayer Request</button>

</form>
      </div>

      <p style={styles.closing}>
        Your request matters. We will lift you up in prayer.
        Remember, you are not alone — God sees you and cares deeply for you.
      </p>

    </div>
  );
}

const styles = {
  container: {
    maxWidth: "750px",
    margin: "0 auto",
    padding: "60px 20px",
    fontFamily: "Georgia, serif",
    lineHeight: "1.8",
    textAlign: "center"
  },

  title: {
    marginBottom: "20px"
  },

  intro: {
    marginBottom: "20px"
  },

  scripture: {
    fontStyle: "italic",
    marginBottom: "40px"
  },

  formBox: {
    backgroundColor: "#f7f9fc",
    padding: "30px",
    borderRadius: "10px",
    border: "1px solid #e0e6f0",
    textAlign: "left"
  },

  label: {
    display: "block",
    marginTop: "15px",
    marginBottom: "5px"
  },

  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },

  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },

  button: {
    marginTop: "20px",
    padding: "12px 20px",
    backgroundColor: "#4a6fa5",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },

  closing: {
    marginTop: "40px",
    fontStyle: "italic"
  }
};



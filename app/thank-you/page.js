export default function ThankYouPage() {
  return (
    <div style={styles.container}>

      <h1 style={styles.title}>Your Prayer Request Has Been Received</h1>

      <p style={styles.text}>
        Thank you for trusting Grace & Faith Ministries with your prayer request.
        Your message has been received and we will lift you up in prayer.
      </p>

      <p style={styles.scripture}>
        “The Lord is close to the brokenhearted
        and saves those who are crushed in spirit.”
        <br />
        — Psalm 34:18
      </p>

      <p style={styles.text}>
        May God surround you with His peace, comfort, and strength.
        Remember that you are not alone in your journey.
      </p>

    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "60px 20px",
    textAlign: "center",
    fontFamily: "Georgia, serif",
    lineHeight: "1.8"
  },

  title: {
    marginBottom: "25px"
  },

  text: {
    marginBottom: "20px"
  },

  scripture: {
    fontStyle: "italic",
    margin: "30px 0"
  }
};

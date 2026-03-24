export default function ThankYouPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Thank You for Your Support 💛</h1>

      <p style={styles.text}>
        Your subscription means more than you know. You are helping to
        support a platform that shares faith, hope, and real-life
        encouragement with others.
      </p>

      <p style={styles.text}>
        Your copy of <strong>Issue 3: Faith in Everyday Living</strong>
        will be sent to you shortly.
      </p>

      <p style={styles.text}>
        If you do not receive it within a few hours, please feel free to
        reach out.
      </p>

      <p style={styles.signature}>
        With gratitude,<br />
        Oletha 💛
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "80px 20px",
    textAlign: "center",
    fontFamily: "Georgia, serif",
    lineHeight: "1.8"
  },
  title: {
    marginBottom: "30px"
  },
  text: {
    marginBottom: "20px"
  },
  signature: {
    marginTop: "40px",
    fontStyle: "italic"
  }
};

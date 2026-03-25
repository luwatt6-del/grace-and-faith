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

  {/* Preview Section */}
  <div style={styles.previewBox}>
    <p>
      "Faith is not just something we speak — it is something we live daily,
      in quiet decisions, in hard moments, and in unwavering trust in God."
    </p>

    <div style={styles.blurOverlay}>
      <p>🔒 Full Issue Locked</p>
    </div>
  </div>

  <p>
    Continue reading this powerful issue featuring real stories,
    faith conversations, lifestyle inspiration, and encouragement.
  </p>

  {/* What’s Inside */}
  <div style={styles.featureBox}>
    <h4>What This Issue Includes:</h4>

    <ul>
      <li>✨ Editor’s Reflection</li>
      <li>✨ Counsellor Feature</li>
      <li>✨ Real Couple Interview</li>
      <li>✨ Faith & Style</li>
      <li>✨ Recipe Feature</li>
      <li>✨ Did You Know?</li>
      <li>✨ Closing Reflection & Scripture</li>
    </ul>
  </div>

 <a
  href="https://www.paypal.com/ncp/payment/UM3BPPD6H7FUE"
  target="_blank"
  style={styles.button}
>
  Subscribe to Continue Reading
</a>
    
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

  issueBoxPremium: {
  border: "2px solid #4a6fa5",
  borderRadius: "10px",
  padding: "20px",
  marginTop: "20px",
  backgroundColor: "#f9fbff"
},

  previewBox: {
  position: "relative",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  borderRadius: "10px",
  marginBottom: "15px",
},

blurOverlay: {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backdropFilter: "blur(5px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",
  backgroundColor: "rgba(255,255,255,0.6)",
  borderRadius: "10px",
},
issueBoxPremium: {
  border: "2px solid #4a6fa5",
  borderRadius: "10px",
  padding: "20px",
  marginTop: "20px",
  backgroundColor: "#f9fbff"
},
  button: {
  marginTop: "15px",
  padding: "12px 20px",
  backgroundColor: "#4a6fa5",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  textDecoration: "none",   // 👈 ADD THIS
  display: "inline-block"   // 👈 ADD THIS
}
<p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
  After payment, return to this page to access your full issue.
</p>
};

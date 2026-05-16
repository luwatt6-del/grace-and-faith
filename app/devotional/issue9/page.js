import Link from "next/link";

export default function Issue9Page() {
  return (
    <div style={styles.container}>
      <h1>Peace in the Middle of the Storm</h1>

      <p style={styles.date}>May 10, 2026</p>

      <p style={styles.scripture}>
        “Peace I leave with you; my peace I give you.”
        <br />— John 14:27
      </p>

      <p>
        Storms in life can arrive unexpectedly.
        Difficulties, disappointments, and uncertainty can leave
        us feeling overwhelmed and anxious.
      </p>

      <p>
        Yet even in the middle of the storm, God offers peace.
        Not temporary peace based on circumstances,
        but lasting peace rooted in His presence.
      </p>

      <p>
        God's peace calms troubled hearts and reminds us
        that He remains in control even when life feels uncertain.
      </p>

      <p>
        Whatever storm you may be facing today,
        know that God is with you and His peace is available to you.
      </p>

      <h3>Prayer</h3>

      <p>
        Lord, help me to experience Your peace in every storm.
        Calm my fears and remind me that You are always near.
        Amen.
      </p>

      <Link href="/devotional" style={styles.backButton}>
        ← Back to Devotionals
      </Link>
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
  },

  backButton: {
    display: "inline-block",
    marginTop: "30px",
    padding: "10px 18px",
    backgroundColor: "#f3f0fa",
    borderRadius: "8px",
    textDecoration: "none",
    color: "#333",
    border: "1px solid #ddd"
  }
};

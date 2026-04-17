import Link from "next/link";

export default function Issue5Page() {
  return (
    <div style={styles.container}>

      <h1 style={styles.title}>God’s Timing is Perfect</h1>

      <p style={styles.date}>April 13, 2026</p>

      <p style={styles.scripture}>
        “He has made everything beautiful in its time…”
        <br />— Ecclesiastes 3:11
      </p>

      <p>
        There are moments in life when we feel ready for something new,
        yet nothing seems to move. Doors remain closed, prayers seem unanswered,
        and we begin to wonder if God has forgotten us.
      </p>

      <p>
        But God’s timing is not our timing. While we are waiting,
        He is working behind the scenes. What feels like delay is often preparation.
      </p>

      <p>
        God is aligning people, circumstances, and even your heart
        for what is ahead.
      </p>

      <p>
        Trust that your season of waiting is not wasted.
        Something beautiful is being formed, even now.
      </p>

      <h3>Prayer</h3>

      <p>
        Lord, help me to trust Your timing, even when I feel impatient.
        Give me peace in the waiting and remind me that You are always working
        for my good. Amen.
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

  title: {
    textAlign: "center",
    marginBottom: "10px"
  },

  date: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "15px",
    textAlign: "center"
  },

  scripture: {
    fontStyle: "italic",
    marginBottom: "20px"
  },

  backButton: {
    display: "inline-block",
    marginTop: "30px",
    padding: "10px 18px",
    backgroundColor: "#f3f0fa",
    color: "#333",
    textDecoration: "none",
    borderRadius: "8px"
  }
};

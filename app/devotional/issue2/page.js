export default function Issue2Page() {
  return (
    <div style={styles.container}>
      <h1>Hope When Life Feels Heavy</h1>

      <p style={styles.date}>March 16, 2026</p>

      <p style={styles.scripture}>
        “Come to me, all you who are weary and burdened, and I will give you rest.”
        <br />— Matthew 11:28
      </p>

      <p>
        There are seasons when life feels overwhelming — when the weight of responsibilities,
        struggles, and emotions seem too much to carry.
      </p>

      <p>
        In those moments, Jesus invites us not to strive harder, but to come to Him.
        His presence brings rest, peace, and renewal for our souls.
      </p>

      <p>
        You don’t have to carry everything alone. God is your refuge,
        your strength, and your help in times of need.
      </p>

      <h3>Prayer</h3>
      <p>
        Lord, when life feels heavy, help me to come to You.
        Give me rest, renew my strength, and remind me that I am not alone.
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
  }
};

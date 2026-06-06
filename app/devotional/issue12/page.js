export default function Issue12Page() {
  return (
    <div style={styles.container}>
      <h1>Holding on to God's Unchanging Hand</h1>

      <p style={styles.date}>June 7, 2026</p>

      <p style={styles.scripture}>
        "Jesus Christ is the same yesterday and today and forever."
        <br />
        — Hebrews 13:8
      </p>

      <p>
        Life is full of changes. Seasons come and go, circumstances shift,
        and sometimes the people and things we depend on are no longer there.
        In the middle of all that uncertainty, God remains constant.
      </p>

      <p>
        His love never changes. His promises never fail. His grace is always
        sufficient, and His presence never leaves us. While the world around us
        may seem uncertain, God's hand remains steady and secure.
      </p>

      <p>
        There are moments when we may feel weak and overwhelmed, but faith
        reminds us that we do not walk alone. The same God who carried us
        through yesterday will carry us through today and every tomorrow.
      </p>

      <p>
        Whatever challenge you may be facing, hold firmly to His unchanging
        hand. He knows the path before you, and He will never let you go.
      </p>

      <h3>Prayer</h3>

      <p>
        Heavenly Father, thank You for being my constant source of strength
        and hope. When life feels uncertain, help me to hold tightly to Your
        unchanging hand. Increase my faith and remind me that You are always
        with me. In Jesus' name, Amen.
      </p>
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
    color: "#777",
    marginBottom: "20px"
  },

  scripture: {
    fontStyle: "italic",
    marginBottom: "20px"
  }
};

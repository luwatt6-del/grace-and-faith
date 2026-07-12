import Link from "next/link";

export default function Issue13Page() {
  return (
    <div style={styles.container}>

      <h1 style={styles.title}>
        God the Comforter — Jehovah Nacham
      </h1>

      <p style={styles.date}>June 28, 2026</p>

      <p style={styles.scripture}>
        "Blessed are those who mourn, for they shall be comforted."
        <br />
        — Matthew 5:4
      </p>

      <p>
        Life brings moments when our hearts become heavy. There are seasons
        of loss, disappointment, uncertainty, and challenges that leave us
        searching for strength beyond ourselves.
      </p>

      <p>
        But we are reminded that we serve a God who does not stand far away
        from our pain. He is Jehovah Nacham—the God who comforts, restores,
        and brings peace to the weary soul.
      </p>

      <p>
        God's comfort does not always mean every situation changes immediately.
        Sometimes His comfort comes through His presence, giving us strength
        to face another day and reminding us that we are never walking alone.
      </p>

      <p>
        Just as a loving parent comforts a child, God draws near to His
        people. He holds us through difficult seasons, heals our broken
        hearts, and reminds us that our struggles do not define our story.
      </p>

      <p>
        When we feel overwhelmed, we can bring our burdens to Him. The same
        God who carried others through their darkest moments is still faithful
        today.
      </p>

      <p>
        Whatever you are facing this week, remember this truth: God sees you,
        God knows you, and God is close to you. His comfort is available even
        in the places where life feels uncertain.
      </p>

      <h2>Prayer</h2>

      <p>
        Heavenly Father, thank You for being my Comforter and my source of
        strength. When my heart feels heavy, remind me that I am never alone.
        Help me to rest in Your presence, trust Your promises, and receive
        the comfort that only You can give. Amen.
      </p>

      <hr style={styles.divider} />

      <Link href="/devotional">
        ← Back to Devotional Archive
      </Link>

    </div>
  );
}

const styles = {
  container: {
    maxWidth: "750px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Georgia, serif",
    lineHeight: "1.8",
  },

  title: {
    textAlign: "center",
    color: "#7a6fa5",
    marginBottom: "15px",
  },

  date: {
   

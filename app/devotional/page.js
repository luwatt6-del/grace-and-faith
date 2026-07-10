import Link from "next/link";

export default function DevotionalPage() {
  return (
    <div style={styles.container}>

      <h1 style={styles.title}>📖 Weekly Devotional</h1>


      {/* 🌟 LATEST DEVOTIONAL */}

      <div style={styles.latestBox}>

        <h2>God the Comforter — Jehovah Nacham</h2>

        <p style={styles.date}>June 28, 2026</p>

        <p style={styles.scripture}>
          “Blessed are those who mourn, for they shall be comforted.”
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
          from our pain. He is Jehovah Nacham — the God who comforts, restores,
          and brings peace to the weary soul.
        </p>


        <p>
          God’s comfort does not always mean that every situation changes
          immediately. Sometimes His comfort comes through His presence,
          giving us strength to face another day and reminding us that we are
          never walking alone.
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


        <h3>Prayer</h3>


        <p>
          Heavenly Father, thank You for being my Comforter and my source of
          strength. When my heart feels heavy, remind me that I am never alone.
          Help me to rest in Your presence, trust Your promises, and receive
          the comfort that only You can give. Amen.
        </p>

      </div>


      <hr style={styles.divider} />


      {/* 📚 PREVIOUS DEVOTIONALS */}

      <h2>Previous Devotionals</h2>

<div style={styles.archiveBox}>
  <h3>
    <Link href="/devotional/issue13">
      God the Comforter — Jehovah Nacham
    </Link>
  </h3>

  <p style={styles.date}>June 28, 2026</p>

  <p>
    Finding comfort in God's presence during life's most difficult seasons.
  </p>
</div>

<div style={styles.archiveBox}>
  <h3>
    <Link href="/devotional/issue12">
      Remember the Battle is Not Yours, It is the Lord's
    </Link>
  </h3>

  <p style={styles.date}>June 21, 2026</p>

  <p>
    Trusting God to fight the battles beyond our strength.
  </p>
</div>

<div style={styles.archiveBox}>
  <h3>
    <Link href="/devotional/issue11">
      Walking by Faith, Not by Sight
    </Link>
  </h3>

  <p style={styles.date}>May 31, 2026</p>

  <p>
    Learning to trust God even when the path ahead is unclear.
  </p>
     </div>       

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
    marginBottom: "40px",
    color: "#7a6fa5"
  },


  latestBox: {
  backgroundColor: "#f3f6fb",
  padding: "25px",
  borderRadius: "12px",
  border: "1px solid #e0e6f0",
  marginBottom: "30px"
},


  scripture: {
    fontStyle: "italic",
    marginBottom: "20px"
  },


  divider: {
    margin: "40px 0"
  },


  archiveBox: {
    marginBottom: "20px",
    padding: "15px",
    backgroundColor: "#fafafa",
    borderRadius: "10px",
    border: "1px solid #eee"
  },


  date: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "10px"
  }

};

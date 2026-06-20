import Link from "next/link";

export default function DevotionalPage() {
  return (
    <div style={styles.container}>

      <h1 style={styles.title}>📖 Weekly Devotional</h1>

      {/* 🌟 LATEST DEVOTIONAL */}
      <div style={styles.latestBox}>

        <h2>Remember the Battle is Not Yours, It is the Lord’s</h2>

        <p style={styles.date}>June 21, 2026</p>

        <p style={styles.scripture}>
          “The battle is not yours, but God’s.”
          <br />
          — 2 Chronicles 20:15
        </p>

        <p>
          There are moments in life when we face battles that feel bigger than
          our strength. We carry worries, responsibilities, fears, and
          situations that seem impossible to overcome.
        </p>

        <p>
          In those moments, God reminds us that we were never meant to fight
          every battle alone. When King Jehoshaphat and the people of Judah
          faced an enemy they could not defeat, God told them to stand firm and
          trust Him.
        </p>

        <p>
          Sometimes our greatest act of faith is surrendering the situation
          into God's hands. It does not mean we stop praying, preparing, or
          doing what is right. It means we recognize that God is greater than
          the battle before us.
        </p>

        <p>
          The battles we face may look different — family struggles, health
          challenges, financial pressure, uncertainty about the future — but
          God's promise remains the same. He is our defender, our strength, and
          our refuge.
        </p>

        <p>
          Today, remember that the battle you are facing is not yours to carry
          alone. Place it before God, trust His timing, and believe that He is
          already working in ways you cannot see.
        </p>


        <h3>Prayer</h3>

        <p>
          Heavenly Father, help me to surrender the battles I cannot control.
          Remind me that You are fighting for me and that Your strength is
          greater than every challenge I face. Teach me to trust You, stand in
          faith, and rest in Your promises. Amen.
        </p>

      </div>


      <hr style={styles.divider} />


      {/* 📚 PREVIOUS DEVOTIONALS */}
      <h2>Previous Devotionals</h2>


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

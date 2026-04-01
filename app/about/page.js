export default function AboutPage() {
  return (
    <div style={styles.container}>

      <h1 style={styles.title}>About Grace & Faith Ministries</h1>

      <p>
        Grace & Faith Ministries was born from a deeply personal journey.
        There were seasons in my life marked by pain, uncertainty, and moments
        when the path forward was not clear. During those times, it was my
        faith in God that sustained me and carried me through.
      </p>

      <p>
        This ministry exists as a reminder that no one has to walk through
        life’s difficult seasons alone. The same God who brought me through
        my struggles is the same God who is able to guide, strengthen, and
        comfort you through yours.
      </p>

      <p>
        Grace & Faith Ministries was created to be a place of encouragement,
        reflection, and spiritual renewal. Through weekly devotionals,
        scripture, prayer, and community, the goal is to create a quiet space
        where people can pause, breathe, and reconnect with God's presence.
      </p>

      <p>
        If you have found your way here during a challenging season, know
        that you are not alone. There is hope, there is grace, and there is
        always a path forward through faith.
      </p>

      <p style={styles.signature}>
        Oletha Palmer<br/>
        Founder of Grace & Faith Ministries
      </p>


          
<div style={styles.missionBox}>
  <h2>Our Mission</h2>
  <p>
    <p>
Our mission is to glorify God by equipping believers, reaching the lost,
and building a community grounded in grace, faith, and truth.
</p>

<p style={styles.scripture}>
“For by grace you have been saved through faith, and that not of yourselves;
it is the gift of God.” – Ephesians 2:8
</p>
  </p>
</div>

    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
    lineHeight: "1.8",
    fontFamily: "Georgia, serif"
  },
title: {
  textAlign: "center",
  marginBottom: "30px"
},

mission: {
  textAlign: "center",
  marginTop: "40px",
  fontWeight: "700",
  fontSize: "22px"
},

scripture: {
  textAlign: "center",
  fontStyle: "italic",
  marginTop: "20px"
},
  
missionBox: {
  backgroundColor: "#f3f0fa",
  padding: "25px",
  borderRadius: "10px",
  marginTop: "30px",
  border: "1px solid #e0d9f5"

}
};

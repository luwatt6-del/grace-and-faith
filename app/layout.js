import Header from "./components/Header";

export const metadata = {
  title: "Grace & Faith Ministries",
  description: "A ministry led by faith and guided by God",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Header />

        {children}

        <footer style={styles.footer}>
          <p>Grace & Faith Ministries</p>
          <p>Walking by Faith • Living in Grace • Anchored in Hope</p>
          <p>© 2026 Grace & Faith Ministries</p>
        </footer>

      </body>
    </html>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    marginTop: "60px",
    padding: "30px",
    backgroundColor: "#f7f7f7",
    borderTop: "1px solid #e5e5e5",
    fontSize: "14px"
  }
};


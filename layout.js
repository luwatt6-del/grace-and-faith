export const metadata = {
  title: "Faith & Grace Ministry",
  description: "Encouraging hearts, renewing spirits, and sharing God’s love.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Georgia, serif",
          backgroundColor: "#faf9f7",
          color: "#333",
        }}
      >
        {children}
      </body>
    </html>
  );
}


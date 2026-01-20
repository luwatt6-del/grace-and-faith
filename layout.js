import "./styles/globals.css";

export const metadata = {
  title: "Faith & Grace Ministry",
  description: "Encouraging hearts, renewing spirits, and sharing God’s love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

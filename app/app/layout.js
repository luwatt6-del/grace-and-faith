export const metadata = {
  title: "Grace & Faith Ministries",
  description: "Strengthening believers in the Word of God.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

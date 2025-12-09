export const metadata = {
  title: "Grace & Faith Ministries",
  description: "A place of prayer, devotion, and spiritual growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

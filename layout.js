export const metadata = {
  title: "Grace & Faith Ministries",
  description: "A place of hope, devotion, and spiritual reflection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "Grace & Faith Ministries",
  description: "Grace & Faith Ministries website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

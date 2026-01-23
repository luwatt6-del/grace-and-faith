export const metadata = {
  title: "Grace & Faith",
  description: "Grace & Faith Ministries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

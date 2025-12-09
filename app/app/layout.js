export const metadata = {
  title: "Grace & Faith Ministries",
  description: "Empowering lives through the Word of God.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


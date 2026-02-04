export const metadata = {
  title: "Grace & Faith Ministries",
  description: "A ministry led by faith and guided by God",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "Grace & Faith Ministries",
  description: "A place for faith, reflection, and hope",
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

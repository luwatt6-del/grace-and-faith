export const metadata = {
  title: "Grace & Faith",
  description: "A quiet space for faith, hope, and grace.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

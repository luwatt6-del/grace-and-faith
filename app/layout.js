export const metadata = {
  title: "Grace & Faith",
  description: "A quiet space for faith, hope, and grace.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Georgia, serif",
          backgroundColor: "#faf9f6",
          color: "#333",
        }}
      >
        {children}
      </body>
    </html>
  );
}

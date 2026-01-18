export const metadata = {
  title: "Grace & Faith",
  description: "A gentle space for faith, grace, and weekly reflection.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
          backgroundColor: "#faf9f7",
          color: "#2d2d2d",
        }}
      >
        {children}
      </body>
    </html>
  );
}

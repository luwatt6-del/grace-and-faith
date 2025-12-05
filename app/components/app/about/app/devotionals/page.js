import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-16">
        <h1 className="text-4xl font-bold mb-6 text-purple-900">About Grace & Faith Ministries</h1>
        <p className="text-lg text-gray-800 max-w-3xl leading-relaxed">
          Welcome to Grace & Faith Ministries, a Christian-centered sanctuary for the soul. 
          Here, hearts are encouraged, spirits are renewed, and God’s love is gently poured into everyday life. 
          Our mission is to guide, uplift, and strengthen your walk with Christ through devotionals, prayer, and fellowship.
        </p>
      </main>
      <Footer />
    </>
  );
}

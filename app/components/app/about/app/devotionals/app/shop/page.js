import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-16">
        <h1 className="text-4xl font-bold mb-6 text-purple-900">Shop</h1>
        <p className="text-lg text-gray-800 max-w-3xl leading-relaxed">
          Coming soon: Bible-based items like T-shirts, bracelets, mugs, hats, prayer books, and more.
        </p>
      </main>
      <Footer />
    </>
  );
}

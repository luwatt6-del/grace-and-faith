export default function Home() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Grace & Faith Ministries
        </h1>
        <p className="text-lg text-gray-600">
          A place of hope, restoration, and the transforming power of God’s Word.
        </p>
      </section>

      {/* Welcome Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to Grace & Faith Ministries. We are committed to sharing the
          love of Christ, strengthening faith, and encouraging lives through
          prayer, teaching, and service.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to glorify God by equipping believers, reaching the
          lost, and building a community grounded in grace, faith, and truth.
        </p>
      </section>

      {/* Scripture Section */}
      <section className="bg-gray-100 p-6 rounded-lg text-center">
        <p className="italic text-gray-800">
          “For by grace are ye saved through faith; and that not of yourselves:
          it is the gift of God.” — Ephesians 2:8
        </p>
      </section>
    </main>
  );
}

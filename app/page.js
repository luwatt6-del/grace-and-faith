import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1529074963765-98f45c47344b')] bg-cover bg-center flex flex-col items-center px-6 py-16 text-gray-900">
      {/* HEADER SCRIPTURE */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-center drop-shadow-xl text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Grace & Faith
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl font-semibold text-center text-white max-w-3xl drop-shadow-md mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        "The Lord is my shepherd; I shall not want." — Psalm 23:1
      </motion.p>

      {/* NAVIGATION MENU */}
      <nav className="flex gap-6 mb-12 bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl shadow-md text-lg font-medium">
        <a href="#home" className="hover:text-blue-600">Home</a>
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#devotionals" className="hover:text-blue-600">Devotionals</a>
        <a href="#shop" className="hover:text-blue-600">Shop</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </nav>
    </div>
  );
}

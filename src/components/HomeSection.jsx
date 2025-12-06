// components/HomeSection.js
"use client";
import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <div id="home" className="relative overflow-hidden min-h-[100svh] flex items-center justify-center px-4 sm:px-8 md:px-10 pt-28">
      {/* Background */}
      <img src="./images/back.jpeg" className="absolute inset-0 w-full h-full object-cover opacity-70" alt="Nursery School Background"/>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/70 via-pink-100/70 to-blue-100/70"></div>

      {/* Hero Card */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative w-full max-w-4xl bg-white/85 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl text-center border border-white/40">
        <motion.h1 initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent mb-4 sm:mb-6 drop-shadow-sm">
          Welcome to Oviya Nursery School
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 mb-6 sm:mb-10">
          A joyful world of learning where children explore, discover, and grow. Let’s make education colorful, creative, and full of wonder!
        </motion.p>

        <motion.button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="bg-gradient-to-r from-purple-600 via-orange-400 to-white-500 hover:opacity-90 text-white py-3 sm:py-4 px-6 sm:px-10 rounded-xl shadow-xl font-semibold text-base sm:text-lg">
          Start the Journey →
        </motion.button>
      </motion.div>
    </div>
  );
}

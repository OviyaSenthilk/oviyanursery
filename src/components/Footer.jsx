"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-blue-200 text-center py-6 text-pink-600 mt-10 overflow-hidden">
      
      {/* Butterflies flying */}
      <motion.div
        className="absolute left-[-10%] bottom-5 text-4xl"
        animate={{ x: ["-10%", "120%"], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        🦋
      </motion.div>

      <motion.div
        className="absolute left-[-15%] bottom-10 text-4xl"
        animate={{ x: ["-15%", "140%"], y: [0, -15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        🦋
      </motion.div>

      {/* Footer Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-semibold"
      >
        © {new Date().getFullYear()} Oviya Nursery School
      </motion.p>

      <p className="text-sm opacity-80">A joyful place to learn and grow 🌱</p>
    </footer>
  );
}

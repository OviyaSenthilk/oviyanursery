"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="relative bg-blue-200 py-5 shadow-xl overflow-hidden">
      
      {/* Moving Clouds */}
      <motion.div
        className="absolute top-2 left-[-200px] text-5xl"
        animate={{ x: ["-200%", "200%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        ☁️ ☁️
      </motion.div>

      {/* Moving Sun */}
      <motion.div
        className="absolute top-2 right-4 text-6xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        🌞
      </motion.div>

      {/* Navbar Content */}
      <div className="relative max-w-6xl mx-auto flex items-center justify-between px-4">
        
        {/* Logo */}
        <motion.h1
          className="text-3xl font-bold text-pink-600"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          Oviya Nursery School
        </motion.h1>

        {/* Menu */}
        <div className="flex space-x-6 font-bold text-pink-600">
          {["Home", "About", "Admissions", "Gallery", "Contact"].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

    </nav>
  );
}

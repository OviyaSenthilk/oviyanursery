"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative overflow-hidden">

      {/* Moving Clouds */}
      <motion.div
        className="absolute top-10 left-[-200px] text-6xl"
        animate={{ x: ["-200%", "200%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        ☁️ ☁️
      </motion.div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">

        {/* School Name */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-pink-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          OVIYA NURSERY SCHOOL
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl mt-6 text-gray-700 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          We teach students, keep them happy, and bring them up to the society.  
          Trust us and give us your child — bringing them to the society is our duty.
        </motion.p>

        {/* Cute Animated Buttons */}
        <motion.div
          className="flex justify-center gap-6 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="/admissions"
            className="bg-pink-400 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Apply for Admission
          </motion.a>

          <motion.a
            href="/contact"
            className="bg-yellow-400 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>

      {/* Butterflies */}
      <motion.div
        className="absolute bottom-20 left-0 text-5xl"
        animate={{ x: ["0%", "120%"], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        🦋
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-[-10%] text-5xl"
        animate={{ x: ["-10%", "130%"], y: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        🦋
      </motion.div>

    </section>
  );
}

"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-10 pt-24">
      <div className="max-w-6xl mx-auto">

        {/* HEADER BANNER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-600 to-orange-400 text-white p-10 rounded-2xl shadow-xl text-center mb-12"
        >
          <h1 className="text-4xl font-bold">About Oviya Nursery School</h1>
          <p className="mt-2 text-lg opacity-90">
            18+ years of excellence in shaping confident young learners.
          </p>
        </motion.div>

        {/* INTRO TEXT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white p-8 rounded-2xl shadow-xl mb-10 leading-relaxed text-lg"
        >
          <p>
            Oviya Nursery School has been a trusted foundation for early childhood
            education for more than 18 years. Over the years, we have nurtured hundreds 
            of young minds who have grown to become school toppers, achievers, and 
            responsible individuals in society.
          </p>

          <p className="mt-4">
            Our learners are recognized not just for academic success, but also for 
            discipline, values, confidence, character, and contribution to the 
            community. Their growth and achievements stand as a strong testimony to 
            the joyful learning environment we provide.
          </p>
        </motion.div>

        {/* KEY SECTIONS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              🌟 Our Vision
            </h2>
            <p className="leading-relaxed">
              To create a joyful, safe, and inspiring learning space where children 
              build strong foundations in learning, character, confidence, and 
              creativity — preparing them to become responsible and successful 
              citizens of tomorrow.
            </p>
          </motion.div>

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              🎯 Our Mission
            </h2>
            <p className="leading-relaxed">
              To provide nurturing early education that supports every child’s 
              emotional, intellectual, and social growth. We focus on instilling 
              discipline, strong values, good habits, creativity, curiosity, and 
              independent thinking — with parents and teachers working together 
              for holistic development.
            </p>
          </motion.div>
        </div>

        {/* ACHIEVEMENTS SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-2xl shadow-xl mt-10"
        >
          <h2 className="text-2xl font-semibold mb-3">🏆 Our Legacy of Success</h2>
          <p className="leading-relaxed text-lg">
            Our students continue to inspire us with their achievements in academics, 
            arts, values, and real-world success. Their progress encourages us to 
            grow, improve, and offer even better experiences every year.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

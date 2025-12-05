"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Admissions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-10 pt-24">
      <div className="max-w-6xl mx-auto">

        {/* HEADER BANNER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-600 to-orange-400 text-white p-10 rounded-2xl shadow-lg mb-10 text-center"
        >
          <h1 className="text-4xl font-bold">Admissions Open</h1>
          <p className="mt-2 opacity-90">
            Welcome to Oviya Nursery School – where learning is joyful!
          </p>
        </motion.div>

        {/* GRID SECTIONS */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* PRE-KG */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-xl text-center"
          >
            <Image
              src="/images/prekg.jpeg"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
              alt="Pre-KG"
            />
            <h2 className="text-2xl font-bold mb-2">Pre-KG</h2>
            <p className="text-gray-600 mb-4">
              A playful and safe space where children begin their learning journey.
            </p>
            <Link href="/#contact">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg shadow-md">
                Apply Now
              </button>
            </Link>
          </motion.div>

          {/* LKG */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-xl p-6 shadow-xl text-center"
          >
            <Image
              src="/images/lkg.jpeg"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
              alt="LKG"
            />
            <h2 className="text-2xl font-bold mb-2">LKG</h2>
            <p className="text-gray-600 mb-4">
              Building early academic and social skills in a supportive environment.
            </p>
            <Link href="/#contact">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg shadow-md">
                Apply Now
              </button>
            </Link>
          </motion.div>

          {/* UKG */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-white rounded-xl p-6 shadow-xl text-center"
          >
            <Image
              src="/images/ukg.jpeg"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
              alt="UKG"
            />
            <h2 className="text-2xl font-bold mb-2">UKG</h2>
            <p className="text-gray-600 mb-4">
              Preparing confident young learners for primary schooling.
            </p>
            <Link href="/#contact">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg shadow-md">
                Apply Now
              </button>
            </Link>
          </motion.div>

        </div>

        {/* EXTRA DESCRIPTIVE SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white rounded-xl p-8 mt-10 shadow-xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Oviya Nursery?</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            We focus on ensuring every child is happy, confident, and curious.
            With creative learning, caring teachers, and a safe environment,
            we bring your child forward into society with strong values and skills.
          </p>

          <Link href="/#contact">
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg shadow-md text-lg font-semibold">
              Contact Us for Admission
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

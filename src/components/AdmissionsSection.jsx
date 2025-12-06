"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Admissions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 
    px-4 sm:px-8 md:px-10 pt-24 pb-12">
      <div className="max-w-6xl mx-auto">

        {/* HEADER BANNER */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="bg-gradient-to-r from-purple-600 to-orange-400 text-white 
          p-6 sm:p-10 rounded-2xl shadow-lg mb-10 text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Admissions Open
          </h1>
          <p className="mt-2 text-sm sm:text-base">
            Welcome to Oviya Nursery School – where learning is joyful!
          </p>
        </motion.div>

        {/* GRID SECTIONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {[
            { title: "Pre-KG", img: "/images/prekg.jpeg", desc: "A playful and safe space where children begin their learning journey." },
            { title: "LKG", img: "/images/lkg.jpeg", desc: "Building early academic and social skills in a supportive environment." },
            { title: "UKG", img: "/images/ukg.jpeg", desc: "Preparing confident young learners for primary schooling." },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 + index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-xl text-center text-gray-800"
            >
              <div className="relative w-full h-48 sm:h-52 rounded-lg overflow-hidden mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                {item.title}
              </h2>

              <p className="mb-4 text-sm sm:text-base text-gray-800">
                {item.desc}
              </p>

              <Link href="/#contact">
                <button className="bg-purple-600 hover:bg-purple-700 text-white 
                px-5 py-2 rounded-lg shadow-md">
                  Apply Now
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* EXTRA SECTION */}
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          className="bg-white rounded-xl p-6 sm:p-8 mt-10 shadow-xl text-center text-gray-800"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Why Choose Oviya Nursery?
          </h2>

          <p className="text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto">
            We focus on ensuring every child is happy, confident, and curious.
            With creative learning, caring teachers, and a safe environment,
            we bring your child forward into society with strong values and skills.
          </p>

          <Link href="/#contact">
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white 
            px-6 sm:px-8 py-3 rounded-lg shadow-md text-base sm:text-lg font-semibold">
              Contact Us for Admission
            </button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}

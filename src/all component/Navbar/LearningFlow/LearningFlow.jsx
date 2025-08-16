import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaTasks,
  FaRocket,
  FaBrain,
  FaMedal,
  FaUsers,
} from "react-icons/fa";

const learningSteps = [
  { step: 1, title: "Discover Concepts", desc: "Learn basics step by step.", icon: <FaLightbulb className="text-yellow-400 text-4xl" /> },
  { step: 2, title: "Practice Daily", desc: "Consistent practice builds mastery.", icon: <FaTasks className="text-green-400 text-4xl" /> },
  { step: 3, title: "Hands-on Projects", desc: "Apply skills in real scenarios.", icon: <FaRocket className="text-red-400 text-4xl" /> },
  { step: 4, title: "Sharpen Your Mind", desc: "Improve logic & problem solving.", icon: <FaBrain className="text-blue-400 text-4xl" /> },
  { step: 5, title: "Earn Achievements", desc: "Collect badges and celebrate growth.", icon: <FaMedal className="text-yellow-300 text-4xl" /> },
];

const guidelines = [
  "Practice at least 1 hour daily.",
  "Break complex problems into smaller steps.",
  "Join community discussions for guidance.",
  "Track your progress & celebrate milestones.",
];

const motivationalQuotes = [
  "💡 Learning never exhausts the mind — Leonardo da Vinci",
  "🚀 Consistency is the key to mastery.",
  "🌟 Mistakes are proof that you are trying.",
  "🔥 Push your limits, grow your skills.",
];

const LearningFlow = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 text-gray-800 overflow-hidden px-6 md:px-20 py-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-purple-700 mb-4 drop-shadow-md">
          🌟 Start Your Learning Journey
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
          Follow a structured path, practice daily, build projects, track progress,
          and unlock achievements while having fun!
        </p>
      </motion.div>

      {/* Guidelines Section */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-600">
          📚 Learning Guidelines
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {guidelines.map((g, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
              className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform"
            >
              {g}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Motivational Quotes */}
      <section className="mb-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pink-600">🔥 Motivational Boost</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {motivationalQuotes.map((q, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.3, duration: 0.7 }}
              className="text-gray-700 text-lg md:text-xl"
            >
              {q}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Learning Features */}
      <section className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          { icon: <FaLightbulb size={40} />, title: "Innovative Thinking", desc: "Enhance creativity & problem solving." },
          { icon: <FaBrain size={40} />, title: "Logical Skills", desc: "Strengthen reasoning & logic." },
          { icon: <FaUsers size={40} />, title: "Community Support", desc: "Join a network of learners." },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.7 }}
            className="bg-white/40 backdrop-blur-sm p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform text-center"
          >
            <div className="mb-4 text-purple-600">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 opacity-90">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Timeline Section */}
      <section className="relative mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-700">📈 Learning Timeline</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300/50 hidden md:block"></div>

          {learningSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              className={`mb-12 flex flex-col md:flex-row items-center ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } relative`}
            >
              {/* Node */}
              <div className="flex flex-col items-center md:w-1/2">
                <div className="bg-white/30 backdrop-blur-sm border border-white/20 p-5 rounded-full shadow-md flex items-center justify-center w-16 h-16 mb-4 md:mb-0">
                  {step.icon}
                </div>
              </div>
              {/* Content */}
              <div className="bg-white/30 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-md md:w-1/2 md:mx-6 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="opacity-90">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 md:px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-base md:text-xl font-bold rounded-full shadow-md hover:shadow-xl transition-all duration-300"
        >
          Start Learning Now 🚀
        </motion.button>
      </section>
    </div>
  );
};

export default LearningFlow;

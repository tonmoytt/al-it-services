import { useEffect, useState } from "react";
import ShowMainStored from "./ShowMainStored/ShowMainStored";
import { motion } from "framer-motion";

const Store = () => {
  const [store, setStore] = useState([]);

  useEffect(() => {
    fetch("/Storedmain.json")
      .then((res) => res.json())
      .then((data) => setStore(data));
  }, []);

  return (
    <div className="bg-white">
      {/* ===== Courses Grid ===== */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 px-6 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 pb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {store?.map((data2) => (
          <ShowMainStored key={data2.id} propsData={data2} />
        ))}
      </motion.div>

      {/* ===== About Section ===== */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-pink-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>
        <p className="max-w-3xl mx-auto text-pink-800 text-lg md:text-xl">
          We are committed to providing quality courses and resources to help you grow your skills.
          Our mission is to inspire learning and foster innovation.
        </p>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-50">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-yellow-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Students Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Ayesha", review: "This platform transformed my career!" },
            { name: "Rahim", review: "High quality courses and great support." },
            { name: "Karim", review: "I learned so much in a short time." },
          ].map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <p className="text-gray-600 italic">"{t.review}"</p>
              <h4 className="mt-4 font-semibold text-gray-800">- {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-green-50 via-green-100 to-green-50">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: "How do I enroll in a course?", a: "Simply sign up and select your desired course." },
            { q: "Do you provide certificates?", a: "Yes, we provide certificates after completion." },
            { q: "Are courses self-paced?", a: "Most of our courses can be done at your own pace." },
          ].map((faq, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition transform hover:scale-105 duration-500 cursor-pointer"
            >
              <h4 className="font-semibold mb-2">{faq.q}</h4>
              <p className="text-gray-600">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-blue-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <p className="text-gray-600 mb-6">We’d love to hear from you! Reach us at:</p>
        <p className="font-semibold text-blue-800">Email: support@example.com</p>
        <p className="font-semibold text-blue-800">Phone: +880 1234-567890</p>
      </section>
    </div>
  );
};

export default Store;

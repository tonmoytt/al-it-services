import { motion } from "framer-motion";

import img1 from './../../../assets/Author img/WhatsApp Image 2025-08-15 at 11.00.21 PM.jpeg'
import img2 from './../../../assets/Author img/tttttt.jpg'
import img3 from './../../../assets/Author img/mama.jpeg'

const About = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-indigo-100 py-16 px-4 md:px-20 lg:px-32">

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-serif font-extrabold text-center text-indigo-800 underline mb-12"
      >
        About Us
      </motion.h1>

      {/* About / Intro */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-8 items-center mb-16"
      >
        <div className="space-y-4">
          <p className="text-lg md:text-xl text-indigo-700 font-medium">
            Welcome to <span className="font-bold text-purple-600">Studeon-Institute</span>, where innovation meets passion. 
            We are a dynamic team of professionals dedicated to empowering learners. Our journey began in 2010, and since then, we have been on a relentless pursuit of excellence.
          </p>
          <p className="text-lg md:text-xl text-indigo-700 font-medium">
            At Studeon-Institute, we believe in knowledge, creativity, and growth. These principles guide everything we do, from the courses we design to the relationships we build.
          </p>
        </div>
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src="https://i.ibb.co/MZCN6Vv/22.jpg"
          alt="About Image"
          className="rounded-xl shadow-2xl w-full h-80 object-cover"
        />
      </motion.div>

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-2xl shadow-xl p-8 mb-16 hover:shadow-2xl transition-shadow duration-500"
      >
        <h2 className="text-3xl font-bold text-purple-700 mb-4">Our Mission</h2>
        <p className="text-lg text-indigo-700 font-medium">
          Our mission is clear: to empower students with cutting-edge skills and knowledge for a brighter future. Every day, we strive to provide innovative and practical learning experiences that make a real impact.
        </p>
      </motion.div>

      {/* What Sets Us Apart */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-3 gap-8 mb-16"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-purple-600 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <h3 className="text-xl font-bold mb-2">Quality</h3>
          <p>We never compromise on quality. Every course and service exceeds industry standards.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-green-600 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <h3 className="text-xl font-bold mb-2">Innovation</h3>
          <p>We thrive on innovation and explore new methods and technologies to provide the best solutions.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-indigo-700 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <h3 className="text-xl font-bold mb-2">Support</h3>
          <p>Our team is always ready to support and guide our students on their learning journey.</p>
        </motion.div>
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow duration-500 mb-16"
      >
        <h2 className="text-3xl font-bold text-purple-700 mb-4">Contact Us</h2>
        <p className="text-lg text-indigo-700 font-medium mb-2">Email: <span className="font-semibold">studeon_institute@gmail.com</span></p>
        <p className="text-lg text-indigo-700 font-medium mb-2">Instagram: <span className="font-semibold">@studeon_institute</span></p>
        <p className="text-lg text-indigo-700 font-medium mb-2">Location: Bogura, Bangladesh</p>
        <p className="text-lg text-indigo-700 font-medium">Phone: 098753738</p>
      </motion.div>

      {/* Our Team */}
      {/* Our Team */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="mt-16"
>
  <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Meet Our Team</h2>
  <div className="grid md:grid-cols-3 gap-8">
    {[
      { name: "Minhaz", img: img1 },
      { name: "Tonmoy", img: img2 },
      { name: "mama", img: img3 }
    ].map((member, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-500"
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-indigo-700 font-medium">Instructor / Mentor</p>
      </motion.div>
    ))}
  </div>
</motion.div>


      {/* Achievements */}
      <motion.div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-8">Our Achievements</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["1000+ Students", "50+ Courses", "10 Awards"].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-2xl font-bold">{item}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div className="mt-16">
        <h2 className="text-3xl font-bold text-purple-700 text-center mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {["John Doe", "Jane Smith"].map((name, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <p className="text-indigo-700 mb-4">
                "Studeon-Institute transformed my career! The courses are top-notch and very practical."
              </p>
              <h3 className="font-bold">{name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Values */}
      <motion.div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Integrity", "Excellence", "Innovation"].map((val, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-purple-700">{val}</h3>
              <p className="text-indigo-700 mt-2">We focus on {val.toLowerCase()} in everything we do.</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div className="mt-16 mb-16">
        <h2 className="text-3xl font-bold text-purple-700 text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4 md:w-2/3 mx-auto">
          {[
            { q: "What courses do you offer?", a: "We offer a wide range of programming, design, and digital marketing courses." },
            { q: "Do you provide certifications?", a: "Yes, all courses come with completion certificates recognized in the industry." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <h3 className="font-bold text-indigo-700">{item.q}</h3>
              <p className="mt-2 text-indigo-600">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default About;

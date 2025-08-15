import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Anotherpageshow = () => {
  const [data, setData] = useState(null);
  const params = useParams();
  const loader = useLoaderData();

  useEffect(() => {
    const findLoader = loader?.find((item) => item.id === parseInt(params.id));
    setData(findLoader);
  }, [params.id, loader]);

  return (
    <div className="bg-teal-200">
      {/* Main card */}
      <div className="  p-6 md:p-16 bg-teal-200 flex justify-center">
        <div className="card w-full md:w-3/4 lg:w-2/3 bg-white shadow-xl rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl active:scale-95 active:shadow-lg">
          
          {/* Image with overlay */}
          <div className="relative h-80 md:h-96 overflow-hidden">
            <img
              src={data?.img}
              alt={data?.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            <span className="absolute hidden md:block top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full font-semibold shadow-lg">
              {data?.category}
            </span>
            <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full font-bold shadow-lg">
              ${data?.price}
            </span>
          </div>

          {/* Card body */}
          <div className="p-6 md:p-10 flex flex-col gap-4">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 text-center">
              {data?.title || data?.category}
            </h2>
            <p className="text-gray-700 text-md md:text-lg">{data?.description}</p>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4">
              <Link to="/login">
                <button className="relative px-5  py-2 rounded-lg bg-purple-600 text-white font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-lg">
                  Buy Now
                </button>
              </Link>

              <Link to='/'>
                <button className="relative px-5 py-2 rounded-lg bg-green-500 text-white font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-lg">
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Extra sections */}
      <div className="max-w-6xl mx-auto mt-1 md:mt-4 px-6 md:p-10 space-y-6 md:space-y-12">
        {/* Section 1 - Features */}
        <section className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
          <h3 className="text-2xl font-bold mb-4 text-purple-700">Features</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>High-quality content</li>
            <li>Interactive lessons</li>
            <li>Expert instructors</li>
            <li>Lifetime access</li>
          </ul>
        </section>

        {/* Section 2 - Reviews */}
        <section className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
          <h3 className="text-2xl font-bold mb-4 text-green-700">Reviews</h3>
          <p className="text-gray-700">⭐⭐⭐⭐⭐ "Excellent course! Learned a lot."</p>
          <p className="text-gray-700 mt-2">⭐⭐⭐⭐ "Very informative and easy to follow."</p>
        </section>

        {/* Section 3 - Related Courses */}
        <section className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Related Courses</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition duration-300">Course 1</div>
            <div className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition duration-300">Course 2</div>
            <div className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition duration-300">Course 3</div>
          </div>
        </section>

        {/* Section 4 - FAQ */}
        <section className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
          <h3 className="text-2xl font-bold mb-4 text-pink-700">FAQ</h3>
          <p className="text-gray-700 mb-2"><strong>Q:</strong> How long does it take to complete?</p>
          <p className="text-gray-600 mb-4">A: Usually 4–6 weeks depending on your pace.</p>
          <p className="text-gray-700 mb-2"><strong>Q:</strong> Is there a certificate?</p>
          <p className="text-gray-600">A: Yes, a verified certificate is provided at completion.</p>
        </section>

        {/* Section 5 - Enrollment CTA */}
        <section className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center">
          <h3 className="text-2xl font-bold mb-4 text-purple-600">Ready to Start?</h3>
          <Link to="/login">
            <button className="px-8 py-3 rounded-full bg-purple-600 text-white font-bold shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
              Enroll Now
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Anotherpageshow;

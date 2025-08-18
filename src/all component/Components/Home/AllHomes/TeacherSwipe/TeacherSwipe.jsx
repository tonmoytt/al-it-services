import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
 

const TeacherSwipe = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch("/Teacher.json") // your JSON file with teacher data
            .then((res) => res.json())
            .then((data) => setTeachers(data));
    }, []);

    return (
        <div className="w-full bg-gradient-to-r mt-1 md:mt-40 from-purple-50 to-purple-100 mb-4 py-3 md:py-16">
            <div className="max-w-7xl mx-auto px-6">


                {/* Teachers Swiper */}
                <div className="mt-12">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="py-6"
                    >
                        {teachers.map((teacher, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center">
                                    <img
                                        src={teacher.image}
                                        alt={teacher.name}
                                        className="w-48 h-48 mx-auto  object-cover"
                                    />
                                    <h4 className="text-lg font-semibold mt-4 text-gray-900">
                                        {teacher.name}
                                    </h4>
                                    <p className="text-sm text-gray-500">{teacher.category}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TeacherSwipe;

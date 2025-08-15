import Marquee from "react-fast-marquee";

const Marque = () => {
    return (
        <div className="mb-20 bg-cyan-200">
            <div className="bg-slate-100 flex mx-2 md:mx-28 lg:mx-28 mt-6 pl-4 py-2 items-center">
                <button className="btn btn-secondary text-xl font-serif  px-2 mr-2">Our Services</button>
                <Marquee pauseOnHover={true} speed={100}>
                Workshops and Webinars, Career Fairs, Educational Conferences, Training Programs, etc.
                </Marquee>
            </div>
        </div>
    );
};

export default Marque;
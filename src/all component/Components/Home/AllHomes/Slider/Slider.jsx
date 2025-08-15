


const Slider = () => {
    return (
        <div>
            <h1 className="text-center text-3xl font-serif underline font-semibold">Our Traning picture</h1>
            <div className="my-10">
                <div className="carousel   bg-slate-800 w-full ">
                    <div id="slide1" className="carousel-item relative w-full h-96 md:h-[700px]">
                        <img src="https://i.ibb.co/MZCN6Vv/22.jpg" className="w-full bg-opacity-60" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/nQMcvJ3/55.jpg" className="w-full h-96 md:h-[700px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/Lk527wL/11.jpg" className="w-full h-96 md:h-[700px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/N7VZvCq/66.jpg" className="w-full h-96 md:h-[700px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
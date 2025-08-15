import React from 'react';
import Benner from './AllHomes/Benner/Benner';
import Featured from './AllHomes/Benner/Featured/Featured';
import Marque from './AllHomes/Marquee/Marquee';
import CourseShow from './AllHomes/CourseShow/CourseShow';
import Courseregistetion from './AllHomes/Courseregistetion/Courseregistetion';
import Slider from './AllHomes/Slider/Slider';

const Home = () => {
    return (
     <div>
        

           <Benner></Benner>
           <Featured></Featured>
           <Marque></Marque>
           <Courseregistetion></Courseregistetion>
           <Slider></Slider>
            
             
        </div>
    );
};

export default Home;
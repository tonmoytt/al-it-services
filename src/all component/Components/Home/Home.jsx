import React from 'react';
import Benner from './AllHomes/Benner/Benner';
import Featured from './AllHomes/Benner/Featured/Featured';
import Marque from './AllHomes/Marquee/Marquee';
import CourseShow from './AllHomes/CourseShow/CourseShow';
import Courseregistetion from './AllHomes/Courseregistetion/Courseregistetion';
import Slider from './AllHomes/Slider/Slider';
import Specillaty from './AllHomes/Specillaty/Specillaty';
import TeacherSwipe from './AllHomes/TeacherSwipe/TeacherSwipe';

const Home = () => {
    return (
     <div>
        

           <Benner></Benner>
           <TeacherSwipe></TeacherSwipe>
           <Featured></Featured>
           <Specillaty></Specillaty>
           <Marque></Marque>
           <Courseregistetion></Courseregistetion>
           <Slider></Slider>
            
             
        </div>
    );
};

export default Home;
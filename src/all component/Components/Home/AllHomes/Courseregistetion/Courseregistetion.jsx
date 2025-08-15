import { useEffect, useState } from "react";
import CourseShow from "../CourseShow/CourseShow";
 
 

 

const Courseregistetion = () => {
 
    const [course,setcourse]=useState([])
    useEffect(() =>{
        fetch('/feature.json')
        .then(res => res.json())
        .then(data => setcourse(data))
        // .then(data => console.log(data))
    },[])

    
    return (
        <div className="my-16 " >
           
             <hr />
            <hr />
            <hr className="mb-4" />
           
            <h1 className="text-2xl text-blue-400 mt-10 text-center"> <span className="bg-green-200 px-3 rounded-lg font-semibold">Most Useful Content</span> <hr className="mx-96 mt-2" /> <hr className="mx-96" /><hr className="mx-96" /></h1>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 bg-red-300 md:bg-red-300 lg:bg-red-300  p-4 md:p-10 lg:p-10 my-10 " >
             {
                course.map(data => <CourseShow key={data.id} propsData={data}></CourseShow> )
             }
             </div>
        </div>
    );
};

export default Courseregistetion;
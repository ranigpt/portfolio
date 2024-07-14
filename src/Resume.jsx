
import { Navbaar } from "./Mainpage"
import { FaStar } from 'react-icons/fa';
import React, { useState } from "react"

const Rating = ({ defaultRating }) => {
    const [rating, setRating] = useState(defaultRating);

    const handleRating = (index) => {
        // Set the rating to index + 1 (number of filled stars)
        setRating(index + 1);
    };

    return (
        <div className="flex m-2">
            {[...Array(5)].map((star, index) => (
                <FaStar
                    key={index}
                    size={20}
                    color={index < rating ? 'yellow' : 'gray'}
                    onClick={() => handleRating(index)}
                    className="cursor-pointer"
                />
            ))}
        </div>
    );
};


const Resume = () => {
    return (
        <div className="w-full">
            {/* Your other components and content */}

            <Navbaar/>
            <div>

            </div>
            <div>

                <div className="flex flex-row text-2xl text-white ">
                <h1 className="text-2xl text-white m-2">
                    
                    
                    Skills 
                    </h1>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 m-2 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
</svg>


</div>

                <h1 className="text-amber-300 text-xl mt-2 p-2 shadow-md rounded-md">Web technology</h1>
                <div className="flex flex-row">
                    <div className="flex">
                        <h2 className="text-xl gap-2 text-white m-2">React</h2>
                        <Rating defaultRating={5} /> {/* 5 stars for React */}
                    </div>

                    <div className="flex">
                        <h2 className="text-xl gap-2 text-white m-2">Node.js</h2>
                        <Rating defaultRating={3} /> {/* 3 stars for Node.js */}
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="flex">
                        <h2 className="text-xl gap-2 text-white m-2">MongoDB</h2>
                        <Rating defaultRating={4} /> {/* 4 stars for MongoDB */}
                    </div>

                    <div className="flex">
                        <h2 className="text-xl gap-2 text-white m-2">Express.js</h2>
                        <Rating defaultRating={4} /> {/* 0 stars initially for Express.js */}
                    </div>
                </div>
            </div>


            <div>
                

                <h1 className=" text-amber-300 text-xl mt-2  p-2 shadow-md rounded-md">
                    Programming Languages
                </h1>
                              <div className="flex flex-row">
                
                                <div className="flex">
                          <h2 className="text-xl gap-2 text-white m-2"> Python </h2>
                
                          <Rating defaultRating={3} />
                                </div>
                
                
                                <div className="flex">
                          <h2 className="text-xl gap-2 text-white m-2"> Java </h2>
                
                          <Rating defaultRating={4} />
                                </div>
                
                                </div>
                <div className="flex flex-row">
                
                
                
                
                                <div className="flex">
                          <h2 className="text-xl gap-2 text-white m-2">C++ </h2>

                          <Rating defaultRating={5} />

              <div className="flex">
          <h2 className="text-xl gap-2 text-white m-2">C# </h2>

          <Rating defaultRating={4} />

              </div>
                </div>
                </div>
            </div>


            <div>

            <div className="flex flex-row text-2xl text-white ">
                <h1 className="text-2xl text-white m-2">
                    
                    
                    Education
                    </h1>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>

</div>


            <Eductional/>
            </div>

            <div className="ml-2">
                <Cgpa/>
            </div>
            {/* Other sections of your Resume component */}
        </div>
    );
};



const Eductional =()=>{

    return(
        <div>
            <div>
                

                <div>
                    <ul className="text-white m-2 ">

                        <li className="text-yellow-200 list-disc">HVPS Ramniranjan Jhunjhunwala College</li>
                        
        <h2>2021 — 2025 </h2>
           <h3>I'm currently pursuing B.Sc. in Information Technology from HVPS Ramniranjan Jhunjhunwala College.</h3>

<li className="text-yellow-200 list-disc m-1">National Education Society's junior College</li>
<h2>2021</h2>
<h3>I Completed XII from HSC board affilated from Maharastra</h3>

<li className="text-yellow-200 list-disc">SMT R.S.S vidya mandir School</li>
<h2>2019</h2>
<h3>I Completed X from SSC board affilated from Maharastra</h3>

                    </ul>
                </div>
            </div>
        </div>
    )
}



const Cgpa =()=>{

    return (
        <div>
            <h1 className="text-white text-2xl m-2">
                SEMESTER
            </h1>

            <div>
                <ul className="text-white m-1 flex gap-2 ">

                    <li className="list-disc text-yellow-200">SEM -IV</li>
                    <h3>9.08</h3>

                    <li className="list-disc ml-5 text-yellow-200">SEM -III</li>
                    <h3>9.19</h3>


                    <li className="list-disc ml-5 text-yellow-200">SEM -II</li>
                    <h3>8.80</h3>

                    <li className="list-disc ml-5 text-yellow-200">SEM -I</li>
                    <h3>9.12</h3>
                </ul>
            </div>
        </div>
    )
}

export default Resume;
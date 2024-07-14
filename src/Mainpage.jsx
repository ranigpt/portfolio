
import Aboutme from "./Aboutme"
import Projects from "./Projects"
import React from "react";
import { Link } from "react-router-dom";



export const Navbaar = ()=>{

    return(

        

            <div className="">
               
                    <ul className="bg-gray-700 flex justify-end items-end flex-row  text-white  overflow-hidden shadow-md rounded-sm p-2">
                        <li className="justify-items-end gap-2 m-2">
                           <Link to="/">Home</Link>  
                        </li>
                        <li className="m-2">
                        <Link to="/projects">Projects</Link>
                        </li>
                        <li className="m-2">
                           <Link to="/certificate" >Certificates</Link> 
                        </li>
                        <li className="m-2">

                            <Link to="/resume" >Resume</Link>
                            
                        </li>
                    </ul>
                
            </div>
        
    )
}

const Mainpage =()=>{

    return(

        <div className="">


<div className="  ">
    <Navbaar/>
</div>


<div >
    <Aboutme/>
</div>
<div>

</div>
        </div>
    )
}


export default Mainpage;
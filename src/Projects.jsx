import imageSrc from "./assets/blue.jpg";
import { Navbaar } from "./Mainpage";
const Projects =()=>{

    return(

        <div className="flex justify-center items-center w-full flex-col">

               <div className="w-full">
                    <Navbaar/>
                </div>

            <div className="bg-slate-300 flex  flex-col rounded-md m-2 p-4 ">

                

            <div className="flex justify-start items-center flex-row m-6 gap-2 w-full">



    <div className="text-black bg-slate-400 p-2 shadow-md rounded-md m-3 w-60 h-auto">
        <h1>
            Resume Builder
        </h1>

        <img src="https://www.hloom.com/images/Resume-Builder-desktop-banner.png " alt="resume" 
        className="w-60 object-cover" />
        <p className="text-xl p-2 ">Frontend :- HTML CSS javascript
            Backend :- Node js Mongo db</p>
    </div>

    <div className="text-black bg-slate-400 p-2 shadow-md rounded-md m-3 w-60 h-auto">
        <h1>Second Language</h1>

        <img src="https://assets.telegraphindia.com/telegraph/2021/Dec/1638788172_resized-pic-3.jpg" alt="second language"
         className="w-60" />
        <p>Frontend :- HTML CSS javascript
            Backend :- Node js Mongo db</p>
    </div>
</div>


<div className="flex justify-start items-center flex-row m-6 gap-2">
    <div className="text-black bg-slate-400 p-2 shadow-md rounded-md m-3 w-60 h-auto">
        <h1>Post Website</h1>

        <img src="https://thumbs.dreamstime.com/b/blog-text-office-desk-surrounded-notepad-laptop-computer-smart-phone-pencil-clips-glasses-plant-top-view-concept-137051653.jpg"
        alt="blog" className="w-60"/>
        <p>Frontend :- HTML CSS javascript
            Backend :- Node js Mongo db</p>
    </div>

    <div className="text-black bg-slate-400 p-2 shadow-md rounded-md m-3 w-60 h-auto">
        <h1>Blue coller connection</h1>
        <img src={imageSrc} 
        alt="blue" className="w-60"/>
        <p>Frontend :- HTML CSS javascript
            Backend :- Node js Mongo db</p>
    </div>
</div>
            </div>
        </div>
    )
}

export default Projects;
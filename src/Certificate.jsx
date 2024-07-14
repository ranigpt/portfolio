import {Link} from "react-router-dom";
import image from "./assets/image.png"
import python from "./assets/python.png";
import ninja from "./assets/coding.jpg";
import {Navbaar } from "./Mainpage"


const Certificate =()=>{

    return(

        <div className="flex justify-center items-center  flex-col w-full">

            <div className="w-full">
                <Navbaar/>
            </div>
        <div className="flex justify-center items-center bg-slate-400 rounded-md flex-col m-2 ">

            <div className=" flex justify-start flex-row items-center bg-slate-100 p-2 m-3">

            <div className="flex justify-center items-center flex-col">
                <h1 className="text-black">
                    Responsive Web design
                </h1>
                <Link to =" " />

                <img src={image} alt="web " className="w-96"/>

                <Link/>
            </div>


            <div className="flex justify-center items-center  flex-col">
                <h1 className="text-black">
                    Python 
                </h1>
                <Link to ="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzIzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNjI1MTE4NV8xNzE2OTc5MDMwLnBuZyIsInVzZXJuYW1lIjoiUmFuaSBEaW5lc2ggR3VwdGEifQ&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2Fthumb_6251185_1716979030.png&_branch_match_id=1335519493318496896&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k92MjbMjgovj%2FJKAgAwXK%2B2IwAAAA%3D%3D" />

                <img src={python} alt="web " className="w-96"/>

                <Link/>
            </div>

            </div>

            <div className="flex justify-start flex-row items-center bg-slate-100 p-2 m-3">

            <div className="flex justify-center items-center flex-col">
                <h1>
                    HTML Fundamentals 
                </h1>
                <Link to ="https://www.naukri.com/code360/profile/Queen" />

                <img src={ninja} alt="web " className="w-96"/>

                <Link/>
            </div>


            {/* <div className="flex justify-center items-center">
                <h1>
                    Responsive Web design
                </h1>
                <Link to =" " />

                <img src=" " alt="web "/>

                <Link/>
            </div> */}
        </div>

        </div>

        </div>
    )
}


export default Certificate;
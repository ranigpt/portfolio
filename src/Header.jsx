

import RaniImg from "./assets/Photo from Rani.jpg" 

const Header =()=>{

    return(

        

            <div className="w-96 h-screen bg-slate-600 text-white rounded-2xl shadow-md mt-5 ml-3">
                <div className="flex justify-center items-center ">

                <div className="flex justify-center items-center flex-col mt-32">

                    <div>

                        
             
             <img src={RaniImg} alt="profile photo" 
              className="w-32 h-36 rounded-md object-cover mb-3"/>

</div>

<div className="flex flex-col m-2">

<div className="flex flex-row gap-8">

    <email>Email</email>

    <h3>rani2004g2@gmail.com</h3>

</div>

<div className="flex flex-row gap-x-20">

    <h2 className=" ">Phone</h2>

    <h3>873652716</h3>

</div>

<div className="flex flex-row gap-x-20">

    <h2>Dob</h2>

    <h3>02 - Nov - 2004</h3>

</div>
</div>
</div>    
</div>
            </div>
        
    )
}

export default Header;

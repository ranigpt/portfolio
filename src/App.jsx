import React from "react";
import ReactDom from "react-dom/client";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Projects from "./Projects";
import Certificate from "./Certificate";
import Resume from "./Resume";

// const App =()=>{
//   return(


//   <div className="w-full h-full bg-slate-900">
//     <div className="flex flex-row">

      
//       <div className="">
//       <Header/>
// </div>
      

//       <div className="flex justify-start items-start flex-col w-full">

//       <Mainpage/>

//       </div>
//     </div>
//   </div>
//   )
// };

// export default App;


const App = () => {
  return (
    <Router>
      <div className="w-full h-full bg-slate-900">
        <div className="flex flex-row" >
          <div className="flex m-2 mt-4  p-2">
            <Header />
          </div>

          <div className="flex justify-start items-start flex-col w-full">
            
            <Routes>
              <Route path="/" element={<Mainpage />} />
              <Route path="/projects" element={<Projects />} />

              <Route path="/certificate" element={<Certificate />} />
              <Route path="/resume" element={<Resume/>} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
import React from "react";
import bg1 from "../../images/acc.png";
import bg2 from "../../images/sf.png";
import bg3 from "../../images/tic.png";

function Projects() {
  const customFontStyle = {
    fontFamily: "'Geist Regular', sans-serif",
    fontWeight: 600,
    fontStyle: "normal",
  };
  return (
    
    <>
    <div 
       style={customFontStyle}
       className="flex flex-row justify-between text-black  p-20 border-b-2 border-black bg-white">

      <div className="w-1/2">
          <a href="https://synapseforge.vercel.app/"><img className="w-[700px] rounded-xl shadow-2xl " src={bg2} alt="" /></a>
        </div>
        <div className="w-1/2 p-8 font-semibold  mr-8 ">
          <h1 className="text-5xl capitalize ml-8">SYNAPSE FORGE </h1>
          <p className="text-md mt-6 capitalize ml-8">
          The "Accurate Classes" website is a dynamic and modern platform designed for an ed-tech company, built using React. The website provides a user-friendly interface to deliver educational content and resources effectively. It showcases a clean, responsive design that caters to various screen sizes, ensuring accessibility and usability for all users.
          </p>
          <div className="border ml-10 mt-6  p-2 rounded-2xl m-2 inline-block shadow-sm shadow-black hover:bg-gray-900 hover:text-white transition">
            <a href="https://synapseforge.vercel.app/">Visit The Project</a>
          </div>
        </div>

      </div>
      <div 
       style={customFontStyle}
        className=" flex flex-row justify-between text-black bg-gray-50 p-20 border-b-2 border-zinc-900 ">
        
        <div className="w-1/2 p-8 font-semibold  mr-8 ">
          <h1 className="text-5xl capitalize ml-8 leading-none">Accuarate Classess</h1>
          <p className="text-lg mt-6 capitalize  ml-8">
          The "Accurate Classes" website is a dynamic and modern platform designed for an ed-tech company, built using React. The website provides a user-friendly interface to deliver educational content and resources effectively. It showcases a clean, responsive design that caters to various screen sizes, ensuring accessibility and usability for all users.
          </p>
          <div className="border ml-10 mt-6  p-2 rounded-2xl m-2 inline-block shadow-sm shadow-black hover:bg-gray-900 hover:text-white transition">
           <a href="https://accurate-classes.netlify.app/">Visit The Project</a> 
          </div>
        </div>
        <div className="w-1/2">
          <a href="https://accurate-classes.netlify.app/"><img className="w-[700px] rounded-xl  shadow-2xl " src={bg1} alt="" /></a>
        </div>
      </div>

      <div 
       style={customFontStyle}
       className="flex flex-row justify-between text-black  p-20 border-b-2 bg-white">

      <div className="w-1/2 bg-gray-900 p-4 rounded-xl">
          <a href="https://ticgame.tech/"><img className="w-[700px]  rounded-xl shadow-2xl " src={bg3} alt="" /></a>
        </div>
        <div className="w-1/2 p-8 font-semibold  mr-8 ">
          <h1 className="text-5xl capitalize ml-8">GAMING WEBSITE </h1>
          <p className="text-md mt-6 capitalize ml-8">
          The "Accurate Classes" website is a dynamic and modern platform designed for an ed-tech company, built using React. The website provides a user-friendly interface to deliver educational content and resources effectively. It showcases a clean, responsive design that caters to various screen sizes, ensuring accessibility and usability for all users.
          </p>
          <div className="border ml-10 mt-6  p-2 rounded-2xl m-2 inline-block shadow-sm shadow-black hover:bg-gray-900 hover:text-white transition">
            <a href="https://ticgame.tech/">Visit The Project</a>
          </div>
        </div>

      </div>



      
    </>
  );
}

export default Projects;

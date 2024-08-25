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

  const ProjectSection = ({ imgSrc, title, description, link, reversed }) => (
    <div
      style={customFontStyle}
      className={`flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } justify-between text-black p-6 lg:p-20 border-b-2 border-black ${
        reversed ? "bg-gray-50" : "bg-white"
      }`}
    >
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
        <a href={link}>
          <img
            className="w-full lg:w-[700px] rounded-xl shadow-2xl"
            src={imgSrc}
            alt={title}
          />
        </a>
      </div>
      <div className="w-full lg:w-1/2 p-4 lg:p-8 font-semibold">
        <h1 className="text-3xl lg:text-5xl capitalize mb-4 lg:mb-0">{title}</h1>
        <p className="text-md mt-4 lg:mt-6 capitalize">{description}</p>
        <div className="inline-block mt-6 p-2 rounded-2xl border shadow-sm shadow-black hover:bg-gray-900 hover:text-white transition">
          <a href={link}>Visit The Project</a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <ProjectSection
        imgSrc={bg2}
        title="SYNAPSE FORGE"
        description="The 'Synapse Forge' website is a dynamic and modern platform designed for an innovative project, built using React. The website provides a user-friendly interface to showcase the project effectively. It features a clean, responsive design that caters to various screen sizes, ensuring accessibility and usability for all users."
        link="https://synapseforge.vercel.app/"
      />

      <ProjectSection
        imgSrc={bg1}
        title="Accurate Classes"
        description="The 'Accurate Classes' website is a dynamic and modern platform designed for an ed-tech company, built using React. The website provides a user-friendly interface to deliver educational content and resources effectively. It showcases a clean, responsive design that caters to various screen sizes, ensuring accessibility and usability for all users."
        link="https://accurate-classes.netlify.app/"
        reversed
      />

      <ProjectSection
        imgSrc={bg3}
        title="GAMING WEBSITE"
        description="The 'Gaming Website' is an engaging platform designed for gaming enthusiasts. Built with modern web technologies, it offers an immersive experience for users to explore various games and gaming-related content. The website features a sleek, responsive design that adapts seamlessly to different devices, providing an optimal viewing experience for both desktop and mobile users."
        link="https://ticgame.tech/"
      />
    </>
  );
}

export default Projects;
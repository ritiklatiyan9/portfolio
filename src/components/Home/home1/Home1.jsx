import React, { useState, useEffect } from "react";
import Preloader from "../../Preloader/Preloader.jsx"; // Adjust the import path as needed
import alpha1 from "../../../images/bg-img1.png";
import alpha2 from "../../../images/gif3d.gif";
import alpha3 from "../../../images/profile.gif";
import alpha4 from "../../../images/img.png";
import imgwd from "../../../images/img-withdog.png";
import { FaArrowRight } from "react-icons/fa";

function useTypewriter(
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000
) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
      }
    };

    const typingInterval = setInterval(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearInterval(typingInterval);
  }, [
    words,
    wordIndex,
    isDeleting,
    text,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return text;
}

function Home1() {
  const skills = ["CODE", "MERN STACK", "NODE JS", "DEVOPS", "React Native"];
  const typewriterText = useTypewriter(skills);

  return (
    <>
      <Preloader />
      <div className="flex flex-col p-8 lg:flex-row justify-between bg-gray-100 border-b-2 border-black mb-4">
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:ml-40 p-4 lg:p-0">
          <div className="w-80 mb-8 mx-auto lg:mx-0">
            <img className="rounded-2xl shadow-2xl" src={alpha4} alt="" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-center lg:text-left">Ritik Latiyan</h2>
          <p className="text-2xl lg:text-3xl font-semibold text-center lg:text-left m-1">
            <span className="text-yellow-600">JavaScript</span> Developer
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col space-y-10 mb-10 p-4 lg:p-0">
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-0.3"
            className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10"
          >
            <div className="w-full lg:w-56 mx-auto lg:mx-0">
              <img className="rounded-2xl shadow-2xl" src={alpha1} alt="" />
            </div>
            <div className="w-full lg:w-44 mx-auto lg:mx-0">
              <img className="rounded-2xl shadow-2xl" src={alpha2} alt="" />
            </div>
          </div>
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-0.1"
            className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10"
          >
            <div className="w-full lg:w-96 mx-auto lg:mx-8">
              <img className="rounded-2xl shadow-2xl" src={alpha3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:flex-row justify-center">
        <div className="w-full lg:w-1/2 p-20 flex justify-center lg:justify-start">
          <img className="w-72 mt-10 lg:ml-20 lg:mt-40" src={imgwd} alt="" />
        </div>
        <div className="w-full lg:w-1/2 text-3xl lg:text-5xl font-semibold flex flex-col justify-center items-center mt-10 lg:mt-40">
          <h1 className="text-center lg:text-left">Know About Me More</h1>
          <div className="flex items-center mt-4">
            <span className="rounded-full px-6 inline-block border-zinc-900 capitalize py-1 text-2xl border">
              <a href="#">Click Here</a>
            </span>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Home1;

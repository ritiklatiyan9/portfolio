import React from "react";
import Preloader from "../../Preloader/Preloader";
import { Link } from "react-router-dom";

import alpha1 from "../../../assets/images/1.png";
import alpha2 from "../../../assets/images/gif3d.gif";
import alpha3 from "../../../assets/images/profile.gif";
import alpha4 from "../../../assets/images/2.png";
import ele1 from "../../../assets/images/ele1.png";
import imgwd from "../../../assets/images/img-withdog.png";
import { FaArrowRight } from "react-icons/fa";

function useTypewriter(words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [wordIndex, setWordIndex] = React.useState(0);
  const [isWaiting, setIsWaiting] = React.useState(false);

  React.useEffect(() => {
    let timer;

    const handleTyping = () => {
      const currentWord = words[wordIndex];

      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((current) => (current + 1) % words.length);
        }
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
        if (text === currentWord) {
          setIsWaiting(true);
          timer = setTimeout(() => setIsWaiting(false), pauseTime);
        }
      }
    };

    timer = setTimeout(
      handleTyping,
      isWaiting ? pauseTime : isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [words, wordIndex, isDeleting, text, typingSpeed, deletingSpeed, pauseTime, isWaiting]);

  return text;
}

function Home1() {
  const skills = ["CODE", "MERN STACK", "NETWORKING", "DEVOPS", "REACT NATIVE"];
  const typewriterText = " < "+ useTypewriter(skills) + "  > ";

  return (
    <>
     
      <Preloader />
      <div 
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
       className="flex flex-col p-4 lg:flex-row justify-between bg-gray-50 border-b-2 border-black mb-4">
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:ml-4 xl:ml-40 p-4 lg:p-0">
          <div className="w-64 sm:w-80 mb-8 mx-auto lg:mx-0">
            <img
              className="me-photo rounded-2xl shadow-2xl w-full"
              src={alpha4}
              alt="Profile"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center lg:text-left">
            Ritik Latiyan
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center lg:text-left m-1">
            Full Stack <span className="text-yellow-500">JavaScript</span> Developer
          </p>
          <p className="text-lg sm:text-xl text-violet-800 lg:text-2xl font-bold text-center lg:text-left mt-2">
             {typewriterText}
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col space-y-6 lg:space-y-10 mb-6 lg:mb-10 p-4 lg:p-0">
          <div className="flex flex-row space-x-4 lg:space-x-10 justify-center lg:justify-start">
            <div className="w-1/2 lg:w-56">
              <img
                className="rounded-2xl shadow-2xl w-full"
                src={alpha1}
                alt="Background"
              />
            </div>
            <div className="w-1/2 lg:w-44">
              <img className="rounded-2xl shadow-2xl w-full" src={alpha2} alt="3D GIF" />
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <div className="w-full sm:w-3/4 lg:w-96 lg:mx-8">
              <img className="rounded-2xl shadow-2xl w-full" src={alpha3} alt="Profile GIF" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-yellow-400 mb-10 lg:flex-row justify-center">
        <div className="w-full lg:w-1/2 p-6 sm:p-12 lg:p-20 flex justify-center lg:justify-start">
          <img
            className="w-44 sm:w-60 lg:w-96 mt-10 lg:ml-36 lg:mt-40"
            src={imgwd}
            alt="With Dog"
          />
        </div>
        <div className="w-full lg:w-1/2 text-xl sm:text-2xl lg:text-5xl font-semibold flex flex-col justify-center mb-20 sm:mb-40 lg:mb-60 px-6 sm:px-10 lg:px-20 mt-10 lg:mt-40">
          <img className="w-56 sm:w-56 lg:w-64 mx-auto lg:mx-0" src={ele1} alt="Element" />
          <h1 className="text-center lg:text-left font-semibold mt-4">KNOW ABOUT ME</h1>
          <div className="flex justify-center lg:justify-start mt-4">
            <span className="rounded-full px-4 sm:px-6 inline-block border-zinc-900 capitalize py-1 text-lg sm:text-2xl border">
            <Link to="/about" className="flex items-center">
      Click Here
      <FaArrowRight className="ml-2 rotate-[-45deg]" />
    </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home1;
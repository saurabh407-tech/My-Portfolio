import { useEffect } from "react";
import Typed from "typed.js";
import profileImg from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";


const Hero = () => {


  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: [
        "Web Developer.",
        "Graphic Designer.",
        "Good in Problem Solving."
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: ".",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 -mt-16"
    >
     
      <img
        src={profileImg}
        alt="Saurabh Shukla"
        className="w-52 h-52 rounded-full border-2 border-blue-400 shadow-lg mb-4"
      />

     

      <h1 className="text-4xl font-bold text-yellow-300 tracking-wide animate-pulse">
        Saurabh Shukla
      </h1>

      
      <h2 className="text-xl text-blue-400 font-semibold mt-2">
        Full Stack Developer
      </h2>

     
      <div className="mt-2 h-8 flex items-center justify-center">
        <span
          id="typed-text"
          className="text-lg text-gray-300 font-medium inline-block w-[320px] text-center"
        ></span>
      </div>

     
      <p className="max-w-2xl mt-6 text-gray-400 leading-relaxed px-4 text-lg">
        I am a BTech Computer Science student with a strong interest in software development and technology.
        I have learned programming languages including C, Java, and Python, and have hands-on experience with 
        HTML, CSS, JavaScript, and React. 
        I am passionate about becoming a full-stack developer.
      </p>
      <div className="flex gap-4 mt-8">
      <a
    href={resume}
    download
    className="px-6 py-3 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition"
  >
    Download Resume
  </a>
</div>
    </section>
  );
};

export default Hero;

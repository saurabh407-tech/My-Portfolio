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
      className="min-h-screen bg-gradient-to-b from-[#1A3F5F] via-[#0A1628] to-[#17142C] flex flex-col items-center justify-center text-center px-6 -mt-16"
    >
     
      <img
        src={profileImg}
        alt="Saurabh Shukla"
        className="w-52 h-52 rounded-full border-2 border-blue-400 shadow-lg mb-4"
      />

     

      <h1 className="text-4xl font-bold text-yellow-400 tracking-wide animate-pulse">
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

     
      <p className="max-w-2xl mt-6 text-gray-300 leading-relaxed px-4 text-lg">
        I am a MERN Stack Developer with a strong foundation in Java programming and a passion for building scalable web applications. I enjoy solving problems, learning new technologies, and am seeking opportunities to contribute and grow as a Software Developer.
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

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-800 px-8 py-1">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        
        {/* Name */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold  text-gray-800 stroke-text tracking-wide">
            Saurabh Shukla
          </h1>
          <span className="text-sm text-yellow-400 bg-gray-700 px-1.5 py-0.5  inline-flex items-center rounded-lg font-medium">
            Full Stack Developer
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-14 text-lg font-bold  text-black">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400  transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400  transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400  transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400  transition">
              Contact
                </a>

          </li>
        </ul>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/saurabh-shukla-050a43294"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500  border border-blue-500 hover:bg-amber-300 hover:text-white transition-all duration-300"
          >
            <FaLinkedin className="text-blue-100 group-hover:text-white text-lg" />
            <span className="hidden md:block text-sm font-semibold">
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/saurabh407-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 border border-gray-600 hover:bg-amber-300 hover:text-white transition-all duration-300"
          >
            <FaGithub className="text-gray-300 group-hover:text-white text-lg" />
            <span className="hidden md:block text-sm font-semibold">
              GitHub
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

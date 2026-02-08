import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-950 text-center">
      <h2 className="text-3xl font-bold text-blue-400 mb-4">Contact Me</h2>
      <p className="text-gray-400 mb-10">
        Feel free to reach out for opportunities or collaboration
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/saurabh-shukla-050a43294"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 justify-center px-6 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition"
        >
          <FaLinkedin className="text-xl" />
          LinkedIn
        </a>

        <a
          href="https://github.com/saurabh407-tech"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 justify-center px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition"
        >
          <FaGithub className="text-xl" />
          GitHub
        </a>

        <a
          href="mailto:saurabhshukla8314@gmail.com"
          className="flex items-center gap-3 justify-center px-6 py-3 rounded-xl border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition"
        >
          <FaEnvelope className="text-xl" />
          Email
        </a>
      </div>
    </section>
  );
};

export default Contact;

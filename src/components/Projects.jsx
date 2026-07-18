const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-28 px-8 py-16 bg-gradient-to-b from-[#1A3F5F] via-[#0A1628] to-[#17142C]"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Project 1 */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Edubridge</h3>
          <p className="text-gray-400 my-2">
            A full-stack MERN application designed for student collaboration, featuring resource sharing, AI-based teammate recommendations, real-time messaging, and role-based authentication.
          </p>
          <a
            href="https://github.com/saurabh407-tech/-edubridge"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub Repository
          </a>
        </div>

              {/* Project 2 */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Hirematch</h3>
          <p className="text-gray-400 my-2">
           An AI-powered MERN Stack application that analyzes resumes, matches them with job descriptions, and provides personalized suggestions to improve ATS compatibility.
          </p>
          <a
            href="https://github.com/saurabh407-tech/HireMatch"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub Repository
          </a>
        </div>
        
      

        {/* Project 3 */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">React Project</h3>
          <p className="text-gray-400 my-2">
            A collection of modern UI components and layouts built using ReactJS focusing on responsiveness and design.
          </p>
          <a
            href="https://github.com/saurabh407-tech/08-UI-PROJECT"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub Repository
          </a>
        </div>

        {/* Project 4 */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Frontend Project</h3>
          <p className="text-gray-400 my-2">
            A collection of frontend projects built using HTML, CSS, and JavaScript to practice core JS concepts and UI interactions.
          </p>
          <a
            href="https://github.com/saurabh407-tech/Frontend-Js-Project"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

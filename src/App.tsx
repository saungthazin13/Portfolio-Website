import React from "react";

const App: React.FC = () => {
  return (
    <>
      <header className="bg-gray-900 dark:bg-gray-800 text-white text-center p-8 relative">
        <img
          src="\images\profile.png"
          alt="Saung Thazin Oo Profile Photo"
          className="w-32 h-32 rounded-full object-cover border-4 border-green-500 mx-auto mb-4"
        />
        <h1 className="text-3xl font-semibold mb-2">Hello, I’m Saung Thazin Oo</h1>
        <p className="mb-4">Developer Position</p>

        <div className="flex justify-center gap-4">


          <a
            href="/files/CV Form.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume"
            className="bg-green-500 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition"
          >
            📄 View CV
          </a>

          <a
            href="files/CV Form.pdf"
            download
            aria-label="View Resume"
            className="bg-green-500 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition"
          >
            📄 download  CV
          </a>

        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-10">
        <section
          id="about"
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-500"
        >
          <h2 className="text-2xl font-semibold border-l-4 border-green-500 pl-3 mb-4">
            👨‍💻 About Me
          </h2>
          <p>
            I hold a Bachelor's degree in Computer Science from XYZ University and
            have completed multiple backend development certifications including
            Node.js and MongoDB fundamentals.
          </p>
          <p className="mt-3">
            I have gained practical experience through internships and freelance
            projects, focusing on building robust RESTful APIs with JWT
            authentication and efficient database designs.
          </p>
          <p className="mt-3">
            <strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, Mongoose,
            JWT, REST APIs, GraphQL, Docker, Git, Postman.
          </p>
          <p className="mt-3">
            I am passionate about creating clean, scalable backend systems and
            constantly improving my skills by learning new technologies. My career
            goal is to become a proficient backend developer contributing to
            impactful, real-world projects.
          </p>
          <p className="mt-3">
            As a dedicated team player, I am proactive, detail-oriented, and enjoy
            solving complex problems. I believe that effective communication and
            collaboration are essential for delivering successful software
            solutions.
          </p>
        </section>

        <section
          id="projects"
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-500 space-y-8"
        >
          <h2 className="text-2xl font-semibold border-l-4 border-green-500 pl-3">
            🚀 Projects
          </h2>

          <div className="flex flex-col md:flex-row bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-colors duration-500">
            <img
              src="\images\task.png"
              alt="Task API Project Screenshot"
              className="w-full md:w-1/3 object-cover"
            />
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-2">📝 Task Manager API</h3>
              <p>
                A personal task tracker API with full CRUD operations and JWT
                authentication.
              </p>
              <p>
                <strong>Stack:</strong> Node.js, Express, MongoDB, JWT
              </p>
              <a
                href="https://github.com/saungthazin13/Ecommerce-site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline mt-2 font-semibold"
              >
                🔗 View Code
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-colors duration-500">
            <img
              src="\images\task.png"
              alt="Blog API Project Screenshot"
              className="w-full md:w-1/3 object-cover"
            />
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-2">📰 Blog API</h3>
              <p>
                Blog post API with admin-user roles, secure access, and MongoDB
                schema design.
              </p>
              <p>
                <strong>Stack:</strong> Node.js, Express, MongoDB, Mongoose
              </p>
              <a
                href="https://github.com/saungthazin13/Ecommerce-site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline mt-2 font-semibold"
              >
                🔗 View Code
              </a>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-500"
        >
          <h2 className="text-2xl font-semibold border-l-4 border-green-500 pl-3 mb-4">
            📫 Contact
          </h2>
          <p>Email: saung1322001@email.com</p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/saungthazin13/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              saungthazin13
            </a>
          </p>
        </section>
      </main>

      <footer className="text-center bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 p-4 border-t border-gray-200 dark:border-gray-600">
        <p>Built with ❤️ by Saung Thazin | &copy; 2025</p>
      </footer>
    </>
  );
};

export default App;

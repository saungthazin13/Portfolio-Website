import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        {/* Header */}
        <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
            {/* Logo / Name */}
            <h1 className="text-2xl font-bold text-green-600 dark:text-green-400 tracking-tight">
              <Link to="/"> Saung Thazin Oo</Link>
            </h1>

            {/* Navigation Menu */}
            <nav className="flex space-x-6 text-sm md:text-base font-medium">
              <Link
                to="/"
                className="relative text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition"
              >
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/about"
                className="relative text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="relative text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="relative text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="flex-grow max-w-5xl mx-auto px-4 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm">
            &copy; 2025 Saung Thazin Oo. Built with ❤️ using React + Tailwind
            CSS
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;

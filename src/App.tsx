import React from "react";

const App: React.FC = () => {
  return (
    <>
      <header className="bg-gray-900 dark:bg-gray-800 text-white text-center p-8 relative">
        <img
          src="\images\profilo-image.jpg"
          alt="Saung Thazin Oo Profile Photo"
          className="w-32 h-32 rounded-full object-cover border-4 border-green-500 mx-auto mb-4"
        />
        <h1 className=" md:text-3xl font-semibold mb-2  text-lg">
          Hello, I’m Saung Thazin Oo
        </h1>
        <p className="mb-4">React Developer Position</p>

        <div className="flex justify-center gap-4">
          <a
            href="/files/CV form.pdf"
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
            📄 download CV
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
          <p className=" text-base/8 text-justify font-medium">
            I graduated with a Bachelor of Computer Science (Honours) from the
            University of Computer Studies (Myeik). I am highly passionate about
            creating modern and innovative websites using React, and I
            continuously explore new frontend technologies to stay up to date
            with the latest trends. While my main focus is on frontend
            development, I also have a foundational understanding of backend
            development. I have working knowledge of Node.js and the Prisma
            database, and I am capable of contributing to full-stack projects at
            a basic level. I am eager to further improve my skills and am highly
            motivated to participate in real-world projects that make a
            meaningful impact.
          </p>

          <p className="mt-3 text-base/8 text-justify font-medium">
            I’m passionate about building clean, reliable systems and
            continuously improving my skills through new technologies. With a
            frontend focus and some backend experience, I aim to grow as a
            developer. I’m proactive, collaborative, and enjoy solving
            real-world problems as part of a team.
          </p>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold border-l-4 border-green-500 pl-3 mb-4">
              🛠 Tech Stack
            </h2>

            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-green-600">
                  Languages
                </h3>
                <p className="text-sm sm:text-base">
                  JavaScript (ES6+), TypeScript, HTML5, CSS
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-green-600">
                  Frontend Frameworks & Libraries
                </h3>
                <p className="text-sm sm:text-base">
                  React.js, shadcn/ui, Tailwind CSS, React Router
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-green-600">
                  State Management
                </h3>
                <p className="text-sm sm:text-base">
                  Redux Toolkit, Zustand (optional)
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-green-600">
                  UI & Styling
                </h3>
                <p className="text-sm sm:text-base">
                  Tailwind CSS, shadcn/ui (Radix-based UI library)
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-green-600">
                  Form & Validation
                </h3>
                <p className="text-sm sm:text-base">React Hook Form, Zod</p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-green-600">
                  API & Data Fetching
                </h3>
                <p className="text-sm sm:text-base">
                  REST API, Axios, React Query (TanStack Query)
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-green-600">
                  Developer Tools
                </h3>
                <p className="text-sm sm:text-base">Git, GitHub, npm</p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-green-600">
                  Deployment Platforms
                </h3>
                <p className="text-sm sm:text-base">
                  Vercel, Render, GitHub Pages
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-green-600">
                  Build Tools
                </h3>
                <p className="text-sm sm:text-base">Vite</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-500 space-y-8"
        >
          <h2 className="text-2xl font-semibold border-l-4 border-green-500 pl-3">
            🚀 Projects
          </h2>

          <div className="flex flex-col md:flex-row bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-colors duration-500">
            <div className="md:w-1/3 w-full h-auto md:h-auto">
              <img
                src="\images\travel.PNG"
                alt="TravelPay"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-center md:w-2/3 w-full">
              <h3 className="text-xl font-semibold mb-2">📝 TravelPay</h3>
              <p className="text-base text-justify font-medium text-gray-800 dark:text-gray-100">
                This is a Trip Payment App built . It lets users search trips,
                view details, fill payment form, and get a success confirmation.
              </p>
              <p className="mt-3">
                <strong>Stack:</strong> React, Vite , TypeScript,Tailwind CSS ,
                Shadcn/ui ,React Router,React Hook Form + Zod,clsx, lucide-react
              </p>
              <a
                href="https://github.com/saungthazin13/TravelPayment"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline mt-2 font-semibold"
              >
                🔗 View Code
              </a>
              <a
                href="https://travel-payment.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600  "
              >
                🔗 https://travel-payment.vercel.app/
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-colors duration-500">
            <div className="md:w-1/3 w-full h-auto md:h-auto">
              <img
                src="\images\Funiture shop.PNG"
                alt="Funiture Shop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-center md:w-2/3 w-full">
              <h3 className="text-xl font-semibold mb-2">📝 Funiture Shop</h3>
              <p className="text-base text-justify font-medium text-gray-800 dark:text-gray-100">
                Transform your living space with our beautifully crafted
                furniture. Whether you're looking for classic designs or modern
                comfort, we have the perfect pieces for your home.
              </p>
              <p className="mt-3">
                <strong>Stack:</strong> React, Vite , TypeScript,Tailwind CSS ,
                Shadcn/ui ,Lucide Icons,Recharts,React Router
              </p>
              <a
                href="https://github.com/saungthazin13/Ecommerce-site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline mt-2 font-semibold"
              >
                🔗 View Code
              </a>
              <a
                href="https://ecommerce-site-hokx.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600  "
              >
                🔗 https://ecommerce-site-hokx.vercel.app/
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-colors duration-500">
            <div className="md:w-1/3 w-full h-auto md:h-auto">
              <img
                src="\images\admindash.png"
                alt="Ecommerce AdminDashboard"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-center md:w-2/3 w-full">
              <h3 className="text-xl font-semibold mb-2">
                📝 Ecommerce Admin Dashboard
              </h3>
              <p className="text-base text-justify font-medium text-gray-800 dark:text-gray-100">
                A responsive eCommerce Admin Dashboard that lets store admins
                manage products, orders, users, sales, and discounts efficiently
                with insightful charts and a clean, user-friendly UI.
              </p>
              <p className="mt-3">
                <strong>Stack:</strong> React, Vite , TypeScript,Tailwind CSS ,
                Shadcn/ui ,Lucide Icons,Recharts,React Router
              </p>
              <a
                href="https://github.com/saungthazin13/AdminDashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline mt-2 font-semibold"
              >
                🔗 View Code
              </a>
              <a
                href="https://admin-dashboard-89ei.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600  "
              >
                🔗 https://admin-dashboard-89ei.vercel.app/
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-colors duration-500">
            <div className="md:w-1/3 w-full h-auto md:h-auto">
              <img
                src="\images\fashs.png"
                alt="Fashion Shop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-center md:w-2/3 w-full">
              <h3 className="text-xl font-semibold mb-2">📝 Fashion Shop</h3>
              <p className="text-base text-justify font-medium text-gray-800 dark:text-gray-100">
                A modern and stylish fashion shop offering a wide selection of
                men’s and women’s clothing — from everyday wear to trendy
                seasonal outfits.
              </p>

              <a
                href="https://github.com/saungthazin13/fashionshop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline mt-2 font-semibold"
              >
                🔗 View Code
              </a>
              <a
                href="https://fashionshop-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600  "
              >
                🔗 https://fashionshop-one.vercel.app/
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-colors duration-500">
            <div className="md:w-1/3 w-full h-auto md:h-auto">
              <img
                src="\images\calculator.png"
                alt=" Loan Calculator"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-center md:w-2/3 w-full">
              <h3 className="text-xl font-semibold mb-2">📝 Loan Calculator</h3>
              <p className="text-base text-justify font-medium text-gray-800 dark:text-gray-100">
                Developed a clean and functional Yoma loan calculator clone
                using ES6, focusing on UX and precise loan calculations.
              </p>

              <a
                href="https://github.com/saungthazin13/CalculatorProject"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline mt-2 font-semibold"
              >
                🔗 View Code
              </a>
              <a
                href="https://calculator-project-sable-phi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600  "
              >
                🔗 https://calculator-project-sable-phi.vercel.app/
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
          <p>Email: saung1322001@gmail.com</p>
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

import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {

    document.body.style.overflow = menuOpen ? "hidden" : "";

  }, [menuOpen]);

  return (

    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center h-16">

          <a href="#home" className="font-mono text-xl font-bold text-white">

            {" "} Group<span className="text-pink-400"> Seven</span> {" "}

          </a>

          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>

            &#9776;

          </div>

          <div className="hidden md:flex items-center space-x-8">

            <a href="#home" className="text-gray-300 hove:text-white transition-colors">
              
              {" "} Home

            </a>

            <a href="#decide" className="text-gray-300 hove:text-white transition-colors">

              {" "} DECIDE Framework {" "}

            </a>

            <a href="#evaluation" className="text-gray-300 hove:text-white transition-colors">

              {" "} Evaluation Result {" "}

            </a>

            <a href="#tasks" className="text-gray-300 hove:text-white transition-colors">

              {" "} List of Tasks {" "}

            </a>

            <a href="#improvement" className="text-gray-300 hove:text-white transition-colors">

              {" "} Proposed Impovements {" "}

            </a>

            <a href="#workbook" className="text-gray-300 hove:text-white transition-colors">

              {" "} Workbook {" "}

            </a>

            <a href="#about" className="text-gray-300 hove:text-white transition-colors">

              {" "} About {" "}

            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};

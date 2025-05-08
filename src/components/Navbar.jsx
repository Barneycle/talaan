import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {

    document.body.style.overflow = menuOpen ? "hidden" : "";

  }, [menuOpen]);

  return (

    <nav className="fixed top-0 w-full z-40 bg-[rgba(0,0,0,0.7)] backdrop-blur-lg border-b border-white/10 shadow-lg">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center h-16">

          <a href="#home" className="font-mono text-xl font-bold text-white">

            {" "} Group<span className="text-pink-400"> Seven</span> {" "}

          </a>

          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>

            &#9776;

          </div>

          <div className="hidden md:flex items-center space-x-8">

          <Link to="/hci2ProjectEvaluation" className="text-gray-300 hover:text-white transition-colors">Home</Link>

          <Link to="/decide" className="text-gray-300 hover:text-white transition-colors">DECIDE Framework</Link>

          <Link to="/evaluation" className="text-gray-300 hover:text-white transition-colors">Evaluation Result</Link>

          <Link to="/tasks" className="text-gray-300 hover:text-white transition-colors">List of Tasks</Link>

          </div>

        </div>

      </div>

    </nav>

  );

};

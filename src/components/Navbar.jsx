import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {

    document.body.style.overflow = menuOpen ? "hidden" : "";

  }, [menuOpen]);

  return (

<nav className="fixed top-0 w-full z-40 bg-blue-900 backdrop-blur-lg border-b border-white/10 shadow-lg">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center h-16">

          <Link to="/" className="font-mono text-xl font-bold text-white">

            {" "} Talaan<span className="text-blue-300">+</span> {" "}

          </Link>

          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>

            &#9776;

          </div>

          <div className="hidden md:flex items-center space-x-8">

          <Link to="/home" className="text-gray-300 hover:text-white transition-colors">Home</Link>

          <Link to="/admin" className="text-gray-300 hover:text-white transition-colors">Admin</Link>

          <Link to="/organizer" className="text-gray-300 hover:text-white transition-colors">Organizer</Link>

          <Link to="/participants" className="text-gray-300 hover:text-white transition-colors">Participants</Link>

          <Link to="/" className="text-gray-300 hover:text-blue-300 transition-colors font-semibold border border-white rounded px-3 py-1 hover:bg-white hover:text-blue-900 transition-colors">
            Log In
          </Link>

          </div>

        </div>

      </div>

    </nav>

  );

};

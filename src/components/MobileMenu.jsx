import { useEffect } from "react";
import { Link } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {

  return (

    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${ menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"} `}>

<button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-2xl md:text-3xl focus:outline-none cursor-pointer" aria-label="Close Menu">
        
        &times;
      
      </button>

<Link to="/" onClick={() => setMenuOpen(false)} className={`text-lg md:text-xl lg:text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${ menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5" } `}>
      
        Home
      
      </Link>

<Link to="/decide" onClick={() => setMenuOpen(false)} className={`text-lg md:text-xl lg:text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${ menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5" } `}>
        
        DECIDE Framework

      </Link>

<Link to="/evaluation" onClick={() => setMenuOpen(false)} className={`text-lg md:text-xl lg:text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${ menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5" } `}>
       
        Evaluation Result
        
      </Link>

<Link to="/tasks" onClick={() => setMenuOpen(false)} className={`text-lg md:text-xl lg:text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${ menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5" } `}>

        List of Tasks

      </Link>

    </div>
  );
};

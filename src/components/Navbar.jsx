import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(null);
  const [menuItems, setMenuItems] = useState([
    { name: "Home", to: "/" },
    { name: "Admin", to: "/admin" },
    { name: "Organizer", to: "/organizer" },
    { name: "Participants", to: "/participants" },
    { name: "Log In", to: "/login", special: true }
  ]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    // Update menu items based on current path
    const path = location.pathname;
    if (path === "/organizer/create-event" || path === "/organizer/create-survey") {
      setActiveSection("CreateEvent");
      setMenuItems([
        { name: "Home", to: "/" },
        { name: "Events", to: "/organizer/view-events" },
        { name: "Survey Analytics", to: "/organizer/survey-analytics" }
      ]);
    } else if (path.startsWith("/organizer")) {
      setActiveSection("Organizer");
      setMenuItems([
        { name: "Home", to: "/" },
        { name: "Events", to: "/organizer/view-events" },
        { name: "Survey Analytics", to: "/organizer/survey-analytics" }
      ]);
    } else if (path.startsWith("/admin")) {
      setActiveSection("Admin");
      setMenuItems([
        { name: "Home", to: "/" },
        { name: "Admin Dashboard", to: "/admin" }
      ]);
    } else if (path.startsWith("/participants")) {
      setActiveSection("Participants");
      setMenuItems([
        { name: "Home", to: "/" },
        { name: "Participants", to: "/participants" }
      ]);
    } else {
      setActiveSection(null);
      setMenuItems([
        { name: "Home", to: "/" },
        { name: "Admin", to: "/admin" },
        { name: "Organizer", to: "/organizer" },
        { name: "Participants", to: "/participants" },
        { name: "Log In", to: "/login", special: true }
      ]);
    }
  }, [location.pathname]);

  const handleSectionClick = (section, to) => {
    setActiveSection(section);
    if (section === "Organizer") {
      setMenuItems([
        { name: "Home", to: "/" },
        { name: "View Events", to: "/organizer/view-events" },
        { name: "Survey Analytics", to: "/organizer/survey-analytics" },
        { name: "Create Event", to: "/organizer/create-event", special: true }
      ]);
    } else if (section === "Admin") {
      setMenuItems([
        { name: "Home", to: "/" },
        { name: "Admin Dashboard", to: "/admin" }
      ]);
    } else if (section === "Participants") {
      setMenuItems([
        { name: "Home", to: "/" },
        { name: "Participants", to: "/participants" }
      ]);
    } else if (section === "CreateEvent") {
      setMenuItems([
        { name: "Home", to: "/" },
        { name: "View Events", to: "/organizer/view-events" }
      ]);
    } else {
      // Default menu
      setMenuItems([
        { name: "Home", to: "/" },
        { name: "Admin", to: "/admin" },
        { name: "Organizer", to: "/organizer" },
        { name: "Participants", to: "/participants" },
        { name: "Log In", to: "/login", special: true }
      ]);
    }
    setMenuOpen(false); // Close mobile menu on selection
    if (to) {
      navigate(to);
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-blue-900 backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="font-mono text-xl font-bold text-white">
              {" "} Gan<span className="text-blue-300">App</span> {" "}
            </Link>
            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) =>
                item.special ? (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="text-gray-300 hover:text-blue-300 transition-colors font-semibold border border-white rounded px-3 py-1 hover:bg-white hover:text-blue-900 transition-colors"
                    onClick={() => handleSectionClick(null)}
                    target={item.name === "Create Event" ? "_blank" : undefined}
                    rel={item.name === "Create Event" ? "noopener noreferrer" : undefined}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="text-gray-300 hover:text-white transition-colors"
                    onClick={() => handleSectionClick(item.name, item.to)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="h-16" />
    </>
  );
};

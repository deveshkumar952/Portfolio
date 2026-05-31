import { Link } from "react-router-dom";

function Navbar() {
  // Helper function to handle smooth scrolling to sections
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Updates the URL hash without reloading the page
      window.history.pushState(null, null, `/#${targetId}`);
    }
  };

  return (
    <nav className="bg-transparent relative z-50">
      <div className="flex items-center justify-between py-5">
        <div className="flex shrink-0 items-center">
          <Link
            to="/"
            className="text-[#16f2b3] text-3xl font-bold"
          >
            Devesh Kumar
          </Link>
        </div>

        {/* Cleaned up layout classes below to ensure links are active and clickable */}
        <ul className="flex flex-row space-x-2 items-center text-sm" id="navbar-default">
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleScroll(e, "about")}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 cursor-pointer">ABOUT</div>
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              onClick={(e) => handleScroll(e, "experience")}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 cursor-pointer">EXPERIENCE</div>
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              onClick={(e) => handleScroll(e, "skills")}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 cursor-pointer">SKILLS</div>
            </a>
          </li>
          <li>
            <a 
              href="#education" 
              onClick={(e) => handleScroll(e, "education")}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 cursor-pointer">EDUCATION</div>
            </a>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" to="/blog">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 cursor-pointer">BLOGS</div>
            </Link>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, "projects")}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 cursor-pointer">PROJECTS</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
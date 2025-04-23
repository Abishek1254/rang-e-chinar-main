import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import ResourceDropdownMenu from "./ResourceDropdown";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isResourceDropdownOpen, setIsResourceDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsResourceDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header
        className={`py-4 px-4 md:px-6 lg:px-8 w-full font-quicksand fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-sm bg-black/30" : "bg-transparent"
        }`}
        style={{ position: 'fixed', top: 0, width: '100%' }}
      >
        <div className="flex flex-row items-center w-full">
          {/* Logo */}
          <Link to="/">
  <div className=" rounded-full bg-gradient-to-br from-orange-200 via-rose-300 to-pink-400 p-[2px] shadow-md hover:shadow-lg transition-shadow duration-300">
    <img
      src="/common/Rang_E_Chinar-removebg-preview.png"
      alt="Rang-e-Chinar Logo"
      style={{height:"80px", width: "90px" }}
      className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full bg-white p-1 transition-transform duration-300 ease-in-out hover:scale-105"
    />
  </div>
</Link>




          {/* Navbar Links */}
          <div className="hidden lg:flex font-semibold items-center ml-auto md:space-x-6 lg:space-x-8 xl:space-x-10">
            <NavLink to="/" label="Home" />
            <NavLink to="/events" label="Events" />
            <NavLink to="/schedule" label="Schedule" />
            {/* <a
  href="https://rangechinar-registration-from.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-white/80 text-lg lg:text-xl xl:text-2xl font-semibold relative group transition-all duration-300 font-quicksand"
>
  Register
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/60 group-hover:w-full transition-all duration-300 group-hover:shadow-glow"></span>
</a> */}


            {/* Resources Dropdown */}
            <div className="relative inline-block" ref={dropdownRef}>
              <button
                className="text-white hover:text-white/80 flex items-center text-lg lg:text-xl xl:text-2xl font-semibold transition-all duration-300 font-quicksand"
                onClick={() => setIsResourceDropdownOpen(!isResourceDropdownOpen)}
              >
                Resources
                <FaChevronDown
                  className={`ml-2 transition-transform duration-200 ${
                    isResourceDropdownOpen ? "rotate-180" : ""
                  } text-sm lg:text-base`}
                />
              </button>
              <ResourceDropdownMenu
                isDropdownOpen={isResourceDropdownOpen}
                setIsDropdownOpen={setIsResourceDropdownOpen}
              />
            </div>

            <NavLink to="/contact" label="Contact" />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-auto">
            <button
              className="text-white text-2xl p-2 rounded-full bg-transparent border border-white/30 hover:border-white/60 transition-all duration-300"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="lg:hidden">
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      </div>

      {/* Prevent content hiding behind header */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};

const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="text-white hover:text-white/80 text-lg lg:text-xl xl:text-2xl font-semibold relative group transition-all duration-300 font-quicksand"
  >
    {label}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/60 group-hover:w-full transition-all duration-300 group-hover:shadow-glow"></span>
  </Link>
);

export default Header;
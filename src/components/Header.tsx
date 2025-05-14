
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-background border-b" : "py-6"
      }`}
    >
      <div className="content-container flex justify-between items-center">
        <Link to="/" className="font-playfair tracking-wider text-xl lg:text-2xl">
          NOTO
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm">
          <Link 
            to="/projects" 
            className={`hover-underline ${location.pathname.includes('/project') ? 'after:scale-x-100' : ''}`}
          >
            Projects
          </Link>
          <Link 
            to="/about" 
            className={`hover-underline ${location.pathname === '/about' ? 'after:scale-x-100' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`hover-underline ${location.pathname === '/contact' ? 'after:scale-x-100' : ''}`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Menu</span>
          <div className="w-6 flex flex-col gap-1.5">
            <span 
              className={`block h-px bg-noto-black transition-transform ${
                isMenuOpen ? "w-6 -rotate-45 translate-y-1.5" : "w-6"
              }`}
            ></span>
            <span 
              className={`block h-px bg-noto-black transition-opacity ${
                isMenuOpen ? "opacity-0" : "w-4 opacity-100"
              }`}
            ></span>
            <span 
              className={`block h-px bg-noto-black transition-transform ${
                isMenuOpen ? "w-6 rotate-45 -translate-y-1.5" : "w-5"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-noto-white pt-24 px-4 md:hidden transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col space-y-6 text-xl">
          <Link 
            to="/projects" 
            className="py-2 border-b border-noto-lightgray"
          >
            Projects
          </Link>
          <Link 
            to="/about" 
            className="py-2 border-b border-noto-lightgray"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="py-2 border-b border-noto-lightgray"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

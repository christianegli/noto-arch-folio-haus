import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  isTransparent?: boolean;
}

const Header = ({ isTransparent = false }: HeaderProps) => {
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

  const isTransparentHeader = isTransparent && !isScrolled && !isMenuOpen;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-6"
      } ${
        isTransparentHeader 
          ? "bg-transparent" 
          : "bg-background border-b"
      }`}
    >
      <div className="content-container flex justify-between items-center">
        <Link 
          to="/" 
          className={`font-helvetica font-bold uppercase tracking-widest text-xl lg:text-2xl ${
            isTransparentHeader ? "text-white" : ""
          }`}
        >
          NOTO
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex space-x-8 text-sm ${
          isTransparentHeader ? "text-white" : ""
        }`}>
          <Link 
            to="/projects" 
            className={`uppercase tracking-wide hover-underline ${location.pathname.includes('/project') ? 'after:scale-x-100' : ''}`}
          >
            Projekte
          </Link>
          <Link 
            to="/about" 
            className={`uppercase tracking-wide hover-underline ${location.pathname === '/about' ? 'after:scale-x-100' : ''}`}
          >
            Info
          </Link>
          <Link 
            to="/contact" 
            className={`uppercase tracking-wide hover-underline ${location.pathname === '/contact' ? 'after:scale-x-100' : ''}`}
          >
            Kontakt
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none ${
            isTransparentHeader ? "text-white" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Menü</span>
          <div className="w-6 flex flex-col gap-1.5">
            <span 
              className={`block h-px transition-transform ${
                isMenuOpen ? "w-6 -rotate-45 translate-y-1.5" : "w-6"
              } ${
                isTransparentHeader ? "bg-white" : "bg-noto-black"
              }`}
            ></span>
            <span 
              className={`block h-px transition-opacity ${
                isMenuOpen ? "opacity-0" : "w-4 opacity-100"
              } ${
                isTransparentHeader ? "bg-white" : "bg-noto-black"
              }`}
            ></span>
            <span 
              className={`block h-px transition-transform ${
                isMenuOpen ? "w-6 rotate-45 -translate-y-1.5" : "w-5"
              } ${
                isTransparentHeader ? "bg-white" : "bg-noto-black"
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
            className="uppercase tracking-wide py-2 border-b border-noto-lightgray"
          >
            Projekte
          </Link>
          <Link 
            to="/about" 
            className="uppercase tracking-wide py-2 border-b border-noto-lightgray"
          >
            Info
          </Link>
          <Link 
            to="/contact" 
            className="uppercase tracking-wide py-2 border-b border-noto-lightgray"
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

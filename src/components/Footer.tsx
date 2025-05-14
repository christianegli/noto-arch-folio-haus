
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-noto-white py-16">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-xl mb-4">NOTO</h3>
            <p className="text-noto-gray text-sm mb-4 max-w-xs">
              NOTO is a German architecture firm dedicated to creating thoughtful, 
              innovative spaces that merge functionality with aesthetic excellence.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans font-medium text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover-underline">Home</Link></li>
              <li><Link to="/projects" className="hover-underline">Projects</Link></li>
              <li><Link to="/about" className="hover-underline">About</Link></li>
              <li><Link to="/contact" className="hover-underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-medium text-sm uppercase tracking-wider mb-4">Contact</h4>
            <address className="not-italic text-sm space-y-2">
              <p>Torstraße 140</p>
              <p>10119 Berlin</p>
              <p>Germany</p>
              <p className="mt-4">
                <a href="mailto:info@noto-architektur.de" className="hover-underline">
                  info@noto-architektur.de
                </a>
              </p>
              <p>
                <a href="tel:+493012345678" className="hover-underline">
                  +49 30 123 45 678
                </a>
              </p>
            </address>
          </div>

          <div>
            <h4 className="font-sans font-medium text-sm uppercase tracking-wider mb-4">Social</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover-underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover-underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover-underline">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-noto-lightgray mt-12 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-noto-gray">
          <p>&copy; {currentYear} NOTO Architektur. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/privacy" className="hover-underline">Privacy Policy</Link>
            <Link to="/terms" className="hover-underline">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

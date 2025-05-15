import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-noto-white py-16">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="font-helvetica font-bold uppercase tracking-widest text-xl mb-4">NOTO</h3>
            <p className="text-noto-gray text-sm mb-4 max-w-xs">
              NOTO ist ein deutsches Architekturbüro, das sich der Schaffung durchdachter,
              innovativer Räume verschrieben hat, die Funktionalität mit ästhetischer Exzellenz verbinden.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans font-medium text-sm uppercase tracking-wider mb-4">Kontakt</h4>
            <address className="not-italic text-sm space-y-2">
              <p>Thedestraße 2</p>
              <p>22767 Hamburg</p>
              <p>Germany</p>
              <p className="mt-4">
                <a href="mailto:mail@bueronoto.de" className="hover-underline">
                  mail@bueronoto.de
                </a>
              </p>
              <p>
                <a href="tel:+04034967040" className="hover-underline">
                  +040 34967040
                </a>
              </p>
            </address>
          </div>

          <div>
            <h4 className="font-sans font-medium text-sm uppercase tracking-wider mb-4">Social Media</h4>
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
          <p>&copy; {currentYear} NOTO Architektur. Alle Rechte vorbehalten.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/privacy" className="uppercase tracking-wide hover-underline">Datenschutzrichtlinie</Link>
            <Link to="/terms" className="uppercase tracking-wide hover-underline">Nutzungsbedingungen</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

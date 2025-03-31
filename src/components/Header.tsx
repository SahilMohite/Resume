import React, { useState } from 'react';
import { Menu, X, Linkedin, Facebook, Instagram } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [coffeeLinkBg, setCoffeeLinkBg] = useState<string>('bg-yellow-300');

  const handleCoffeeLinkClick = () => {
    setCoffeeLinkBg('bg-white');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 p-4 sm:p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="p-2 border-2 border-white flex justify-center items-center">
            <h1 className="text-1xl font-bold font-serif text-white">SM</h1>
          </div>

          {/* Hamburger Menu Button - Only visible on mobile */}
          <button 
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block flex-grow">
            <ul className="flex space-x-8 items-center justify-center font-serif text-white">
              <li>
                <a href="/home" className="text-base transform transition-transform duration-300 opacity-80 hover:opacity-100 hover:scale-125">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-base transform transition-transform duration-300 opacity-80 hover:opacity-100 hover:scale-125">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-base transform transition-transform duration-300 opacity-80 hover:opacity-100 hover:scale-125">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-base transform transition-transform duration-300 opacity-80 hover:opacity-100 hover:scale-125">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/buy-me-a-coffee"
                  className={`hover:underline ${coffeeLinkBg} text-black p-1 text-sm rounded-lg`}
                  onClick={handleCoffeeLinkClick}
                >
                  Buy Me Coffee
                </a>
              </li>
            </ul>
          </nav>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex space-x-4 items-center">
            <a 
              href="https://www.linkedin.com/in/sahil-mohite-a39957235/" 
              className="text-white hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-blue-600 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://www.instagram.com/sahil_mohite26" 
              className="text-white hover:text-pink-600 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="mt-4">
            <ul className="flex flex-col space-y-4 font-serif text-white">
              <li>
                <a href="/home" className="block text-base hover:opacity-80">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="block text-base hover:opacity-80">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="block text-base hover:opacity-80">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="block text-base hover:opacity-80">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/buy-me-a-coffee"
                  className={`block hover:underline ${coffeeLinkBg} text-black p-1 text-sm rounded-lg w-fit`}
                  onClick={handleCoffeeLinkClick}
                >
                  Buy Me Coffee
                </a>
              </li>
            </ul>

            {/* Mobile Social Icons */}
            <div className="flex space-x-4 mt-4 pb-2">
              <a href="https://www.linkedin.com/in/sahil-mohite-a39957235/" className="text-white hover:text-blue-400">
                LinkedIn
              </a>
              <a href="#" className="text-white hover:text-blue-600">
                Facebook
              </a>
              <a href="https://www.instagram.com/sahil_mohite26" className="text-white hover:text-pink-600">
                Instagram
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
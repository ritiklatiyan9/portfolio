import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaUser, FaProjectDiagram, FaPhone } from 'react-icons/fa';

const customFontStyle = {
  fontFamily: "'SF Pro Icons Regular', sans-serif",
  fontWeight: 600,
  fontStyle: "normal",
};
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.header-container') && !event.target.closest('.mobile-menu-button')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
    
    style={customFontStyle}
    className="bg-gray-950 text-white shadow-md relative z-50">
      <div className="container mx-auto px-4 py-5 header-container">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link to="/" className="hover:text-red-500 transition-colors duration-300">Persona.</Link>
          </div>
          
          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu} 
              className="mobile-menu-button text-white focus:outline-none p-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
            >
              <FaBars size={24} />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className={`lg:flex ${isOpen ? 'flex' : 'hidden'} flex-col lg:flex-row absolute lg:relative top-full left-0 w-full lg:w-auto bg-gray-950 lg:bg-transparent`}>
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 p-4 lg:p-0">
              {[
                { icon: FaHome, text: 'Home', path: '/' },
                { icon: FaUser, text: 'About', path: '/about' },
                { icon: FaProjectDiagram, text: 'Projects', path: '/projects' },
                { icon: FaPhone, text: 'Contact', path: '/contact' }
              ].map((item, index) => (
                <li key={index} className="transition-transform duration-200 transform hover:-translate-y-1">
                  <Link 
                    to={item.path} 
                    className="flex items-center hover:text-red-500 transition-colors duration-300" 
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="mr-2" />
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
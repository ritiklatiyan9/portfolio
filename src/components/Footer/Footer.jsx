import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FaHandPointLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Column 1 */}
          <div className="bg-gray-950 text-white p-6  shadow-lg">
            <h1 className="text-2xl font-bold mb-4">
               Find me on Social <span className='text-green-400'>Media</span>
            </h1>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FaInstagram className="text-pink-500" />
                <p>
                  <a
                    href="https://www.instagram.com/ritik_latiyan_9?igsh=d2Fza3JhMXNkY3V4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500"
                  >
                    On Instagram
                  </a>{" "}
                </p>{" "}
                <FaHandPointLeft size={24} />
              </div>
              <div className="flex items-center space-x-2">
                <FaLinkedin className="text-blue-500" />
                <p>
                  <a
                    href="https://linkedin.com/in/ritik-latiyan-b27394253"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500"
                  >
                    On LinkedIn
                  </a>
                </p>
                <FaHandPointLeft size={24} />
              </div>
              <div className="flex items-center space-x-2">
                <FaGithub className="text-gray-500" />
                <p>
                  <a
                    href="https://github.com/ritiklatiyan9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-500"
                  >
                    On GitHub
                  </a>
                </p>{" "}
                <FaHandPointLeft size={24} />
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div>
            <h2 className="text-xl font-bold mb-2 mt-4">Quick <span className='text-green-400'>Links</span></h2>
            <ul className="space-y-2">
            <li><Link to="/" className="hover:text-red-500">Home</Link></li>
      <li><Link to="/about" className="hover:text-red-500">About</Link></li>
      
      <li><Link to="/projects" className="hover:text-red-500">Projects</Link></li>
      <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h2 className="text-xl font-bold mb-2"><span className='text-green-400'>Address</span></h2>
            <p className="text-sm"> Alpha City , Meerut , India</p>
            <p className="text-sm">Email: meritiklatiyan@gmail.com</p>
            <p className="text-sm">Phone: +91 9760302690</p>
          </div>
        </div>
        <hr className="border-gray-700 my-4" />
        <p className="text-sm text-center">&copy; 2024 My Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

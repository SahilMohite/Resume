import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-[-14px] ">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="text-lg sm:text-xl font-bold">Sahil Mohite</h2>
          <p className="text-sm sm:text-base">Frontend Developer | UI/UX Designer</p>
        </div>
        <div>
          <ul className="flex justify-center space-x-4 sm:justify-end">
            <li>
              <a href="/" className="hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Skills</a> 
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Sahil Mohite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

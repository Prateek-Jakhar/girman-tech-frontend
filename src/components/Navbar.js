import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
      <img
        src={"company-logo.svg"}
        alt="Logo"
        className="w-1/6 md:w-1/4 lg:w-1/5 max-w-sm"
      />

      <div className="hidden md:flex space-x-4">
        <a href="#search" className="text-blue-600">
          SEARCH
        </a>
        <a
          href="http://girmantech.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          WEBSITE
        </a>
        <a
          href="https://www.linkedin.com/company/girmantech"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </a>
        <a
          href="mailto:contact@girmantech.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          CONTACT
        </a>
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-blue-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48">
            <a href="#search" className="block px-4 py-2 text-blue-600">
              SEARCH
            </a>
            <a
              href="http://girmantech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-blue-600"
            >
              WEBSITE
            </a>
            <a
              href="https://www.linkedin.com/company/girmantech"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-blue-600"
            >
              LINKEDIN
            </a>
            <a
              href="mailto:contact@girmantech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-blue-600"
            >
              CONTACT
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

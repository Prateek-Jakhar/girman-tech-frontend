import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">
        Girman Technologies
      </div>
      <div className="space-x-4">
        <a href="#search" className="text-blue-600">
          SEARCH
        </a>
        <a href="http://girmantech.com" target="_blank">
          WEBSITE
        </a>
        <a href="https://www.linkedin.com/company/girmantech" target="_blank">
          LINKEDIN
        </a>
        <a href="mailto:contact@girmantech.com" target="_blank">
          CONTACT
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

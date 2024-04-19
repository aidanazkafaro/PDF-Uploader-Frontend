// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt, FaSignOutAlt } from 'react-icons/fa'; // Importing icons from react-icons

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Icon */}
        <Link to="/home" className="text-white text-3xl font-bold flex items-center">
          <FaFileAlt className="mr-2" /> {/* Using the file icon */}
          MyPDFApp
        </Link>
        {/* Right side buttons */}
        <div>
          {/* Uploaded Files button */}
          <Link to="/uploadedfiles" className="text-white text-lg font-semibold mr-4 flex items-center">
            <FaFileAlt className="mr-1" /> {/* Using the file icon */}
            Uploaded Files
          </Link>
          {/* Logout button */}
          <Link to="/" className="text-white text-lg font-semibold flex items-center">
            <FaSignOutAlt className="mr-1" /> {/* Using the sign-out icon */}
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

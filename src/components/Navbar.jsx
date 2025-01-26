import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import logo from "../images/logo.png";
import Login from "./login"; // Import your Login component

function Navbar() {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="border border-red-500 w-full flex items-center justify-between mx-auto p-4">
          {/* Logo Section */}
          <div className="border border-red-500 flex items-center space-x-3 rtl:space-x-reverse">
            <label htmlFor="logo-upload" className="cursor-pointer">
              <img
                src={logo}
                className="h-20 w-20 object-cover rounded-full"
                alt="Logo"
                title="Click to upload a new logo"
              />
            </label>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center md:order-2 space-x-3">
            {/* Login Button */}
            <button
              onClick={() => setShowModal(true)} // Open the modal on click
              className="text-sm bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Render the Login Modal when showModal is true */}
      {showModal && <Login closeModal={() => setShowModal(false)} />}
    </>
  );
}

export default Navbar;

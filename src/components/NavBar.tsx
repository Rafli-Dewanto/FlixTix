import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'


const NavBar = ({ page }: { page?: string }) => {
  const [isMobile, setIsMobile] = useState(false);

  function toggleNav() {
    setIsMobile(!isMobile);
  }

  return (
    <>
      <nav className="pt-5 bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <Link to={`/`} className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              FlixTix
            </span>
          </Link>
          {/* Hamburger */}
          <button
            onClick={toggleNav}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* desktop links */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={`/`}
                  className={`block ${page === '' ? 'text-dodger-blue-500' : 'black'
                    } py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={`/profile`}
                  className={`block ${page === 'profile' ? 'text-dodger-blue-500' : 'black'
                    } py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  to={`/transactions`}
                  className={`block ${page === 'transactions' ? 'text-dodger-blue-500' : 'black'
                    } py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  My Tickets
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* mobile links */}
      <div className={`${isMobile ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col p-4 mx-5 mt-10 border-gray-100 rounded-lg order mfont-medium md:hidden md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link
              to={`/`}
              className={`block ${page === '' ? 'text-dodger-blue-500' : 'text-gray-950'} py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={`/profile`}
              className={`block ${page === 'profile' ? 'text-dodger-blue-500' : 'text-gray-950'} py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
            >
              My Account
            </Link>
          </li>
          <li>
            <Link
              to={`/transactions`}
              className={`block ${page === 'transactions' ? 'text-dodger-blue-500' : 'text-gray-950'} py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
            >
              My Tickets
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="relative flex w-full flex-wrap items-center justify-center bg-neutral-100 py-2 text-neutral-500 shadow-lg  hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
        <div className="flex w-full  flex-wrap items-center  justify-center px-3">
          <div className="header">
            <Link to="/">
              <h1 className="block text-black text-2xl font-bold mb-2 place-items-center">
                Contact Management
              </h1>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

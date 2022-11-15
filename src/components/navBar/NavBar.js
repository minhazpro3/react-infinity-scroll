import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { UseUserContext } from "../context/useContext";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const { logout } = UseUserContext();
  return (
    <div>
      <nav className="bg-indigo-800">
        <div className="md:flex  justify-between items-center sticky top-0 z-20 container mx-auto px-8 md:px-0">
          <div className="flex items-center justify-between">
            <div>
              <img
                className=" w-16 p-3"
                src="https://i.ibb.co/SPsyvjJ/infinity.png"
                alt=""
              />
            </div>

            <HiMenuAlt2
              onClick={() => setShowNav(!showNav)}
              className="md:hidden block w-10 h-10 p-2 cursor-pointer"
            />
          </div>

          <div
            className={
              (showNav ? "left-0" : "-left-full") +
              " left-0 md:static md:flex md:space-y-0   items-center md:bg-transparent md:text-gray-500 md:w-auto fixed bottom-0 top-12 md:space-x-10 bg-gray-600 bg-opacity-80 w-10/12 text-white space-y-4 p-2 transition-left"
            }
          >
            <button onClick={logout} className="font-bold text-white">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

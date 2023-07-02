import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="fixed top-4 right-4 z-50 bg-transparent border-none cursor-pointer"
        onClick={handleToggleMenu}
      >
        <span
          className={`block w-[24px] h-1 bg-purple-600 transition-all duration-300 transform ${
            isOpen ? "rotate-45 translate-y-[8px]" : ""
          }`}
        ></span>
        <span
          className={`block w-[24px] h-1 bg-purple-600 mt-1 transition-all  duration-300 opacity-100 ${
            isOpen ? "opacity-[0]" : ""
          }`}
        ></span>
        <span
          className={`block w-[24px] h-1 bg-purple-600 mt-1 transition-all duration-300 transform ${
            isOpen ? "-rotate-45 -translate-y-[8px]" : ""
          }`}
        ></span>
      </button>
      <div
        className={`fixed top-0 right-0 w-full h-full bg-black bg-opacity-75 z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 list-none p-0 m-0 text-center">
          <li className="mb-6">
            <button
              onClick={() => navigate("search")}
              className="text-purple-600 hover:text-blue-800 text-xl"
            >
              Search a Pokémon
            </button>
          </li>
          <li>
          <button
              onClick={() => navigate("bookmarks")}
              className="text-purple-600 hover:text-blue-800 text-xl"
            >
              See Bookmarks
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;

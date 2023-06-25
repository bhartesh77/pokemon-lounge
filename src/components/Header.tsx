import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { AiOutlineBook, AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 text-white pt-8 pr-32">
      <img
        src={Logo}
        alt="Logo"
        className="h-36 absolute left-16"
      />

      <div className="flex ml-auto">
        <Link to="/search">
          <button className="flex items-center justify-center px-4 py-2  text-white hover: focus:outline-none">
            
            SEARCH A POKEMON
          </button>
        </Link>

        <Link to="/bookmarks">
          <button className="flex items-center justify-center ml-4 px-4 py-2  text-white  hover: focus:outline-none">
            
            SEE BOOKMARKS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import isMobile from "../utils/isMobile";

const Header = () => {
  if (isMobile())
    return (
      <div className="flex items-center justify-between px-2 py-2 text-white pt-8 pr-32">
        <img src={Logo} alt="Logo" className="h-36 absolute" />

        <BurgerMenu />
      </div>
    );

  return (
    <div className="flex items-center justify-between px-4 py-2 text-white pt-8 pr-32">
      <img src={Logo} alt="Logo" className="h-36 absolute left-16" />

      <div className="flex ml-auto">
        <Link to="/search">
          <button className="flex items-center justify-center px-4 py-2  text-white hover:scale-110 focus:outline-none ease-in-out duration-300">
            SEARCH A POKEMON
          </button>
        </Link>

        <Link to="/bookmarks">
          <button className="flex items-center justify-center px-4 py-2  text-white hover:scale-110 focus:outline-none ease-in-out duration-300">
            SEE BOOKMARKS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

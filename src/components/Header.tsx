import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import useIsMobile from "../hooks/useIsMobile";

const Header = () => {
  var isMobile = useIsMobile();
  if (isMobile)
    return (
      <div className="fixed z-50 flex items-center justify-between px-2 py-2 text-white pt-8 pr-32">
        <img src={Logo} alt="Logo" className="h-36 absolute" />

        <BurgerMenu />
      </div>
    );

  return (
    <div className="flex items-center justify-between px-2 py-2 text-white">
      <Link to="/">
        <img src={Logo} alt="Logo" className="h-40" />
      </Link>

      <div className="flex ml-auto">
        <Link to="/search">
          <button className="flex items-center justify-center px-4  text-white hover:scale-110 focus:outline-none ease-in-out duration-300">
            SEARCH A POKEMON
          </button>
        </Link>

        <Link to="/bookmarks">
          <button className="flex items-center justify-center px-4  text-white hover:scale-110 focus:outline-none ease-in-out duration-300">
            SEE BOOKMARKS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

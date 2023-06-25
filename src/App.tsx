import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineBook } from "react-icons/ai";
import isMobile from "./utils/isMobile";
import MobileWarning from "./components/MobileWarning";
import Header from "./components/Header";
import RightGhost from "./assets/RightGhost.jpg";
import './App.css';

function App() {
  if (isMobile()) return <MobileWarning />;

  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="h-[10vh]"><Header /></div>
      

      <div className="w-[100vw] flex h-[90vh]">
        <div></div>

        <img
      src={RightGhost}
      alt="Right Ghost"
      className="h-[50vh] bg-purple-500 rounded-tl-full rounded-bl-full ml-auto mt-20 neon-shadow-animation"
    />
      </div>
    </div>
  );
}
export default App;

<div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-500">
  <h1 className="text-3xl font-bold text-gray-800 mb-6">
    Welcome to Pokémon Lounge
  </h1>
  <div className="space-y-4">
    <div className="space-x-4 flex">
      <Link to="/search">
        <button className="flex items-center justify-center px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 focus:outline-none">
          <AiOutlineSearch className="text-xl mr-2" />
          Search a Pokémon
        </button>
      </Link>
      <Link to="/bookmarks">
        <button className="flex items-center justify-center px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 focus:outline-none">
          <AiOutlineBook className="text-xl mr-2" />
          See Bookmarks
        </button>
      </Link>
    </div>
  </div>
  <div className="mt-12 text-3xl text-white">{/* <GiPokemon /> */}</div>
</div>;

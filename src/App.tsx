import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineBook } from "react-icons/ai";
import isMobile from "./utils/isMobile";
import MobileWarning from "./components/MobileWarning";
import Header from "./components/Header";
import RightGhost from "./assets/RightGhost.jpg";
// import Poke from './assets/Poke.png'
import "./App.css";
import FeaturedPokemons from "./components/FeaturedPokemons";

function App() {

  const navigate = useNavigate();
  if (isMobile()) return <MobileWarning />;

  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="h-[10vh]">
        <Header />
      </div>

      <div className="w-[100vw] flex h-[90vh]">
        <div className="w-[35vw] flex flex-col pl-40 pt-32 z-10 relative">
          <div className="text-7xl text-white">Pokemon</div>
          <div className="text-7xl text-white">Lounge</div>
          <button
            className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-2 px-4 rounded-full shadow-xl shadow-inner backdrop-filter backdrop-blur-md backdrop-saturate-150 mt-8 w-32"
            onClick={() => navigate('compare')}
          >
            COMPARE
          </button>

          {/* <img src={Poke} className="h-56 w-56 absolute animate-bounce bottom-2 left-16"/> */}
        </div>

        <div className="w-[65vw] ml-auto">
          <img
            src={RightGhost}
            alt="Right Ghost"
            className="h-[50vh] bg-purple-500 rounded-tl-full ml-auto rounded-bl-full mt-16 neon-shadow-animation object-cover"
          />

          <div className="pl-32">
            <FeaturedPokemons />
          </div>
        </div>
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

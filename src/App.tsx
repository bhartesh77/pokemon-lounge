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
  if (isMobile())
    return (
      <div className="h-[100vh] w-[100vw]">
        <div className="h-[10vh]">
          <Header />
        </div>

        <div className="w-[100vw] flex h-[90vh]">
          <div className="w-[35vw] flex flex-col pl-4 pt-32 z-10 relative">
            <div className="text-5xl text-white">Pokemon</div>
            <div className="text-5xl text-white">Lounge</div>
            <button
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-2 px-4 rounded-full shadow-xl shadow-inner backdrop-filter backdrop-blur-md backdrop-saturate-150 mt-8 w-32"
              onClick={() => navigate("compare")}
            >
              COMPARE
            </button>

            {/* <img src={Poke} className="h-56 w-56 absolute animate-bounce bottom-2 left-16"/> */}
          </div>

          <div className="absolute">
            <img
              src={RightGhost}
              alt="Right Ghost"
              className="h-[50vh] w-[900px] bg-purple-500 rounded-3xl opacity-70 mt-16 neon-shadow-animation object-cover"
            />
          </div>

          <FeaturedPokemons />
        </div>
      </div>
    );

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

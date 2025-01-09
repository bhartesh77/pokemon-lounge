import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import RightGhost from "../../assets/RightGhost.jpg";
import FeaturedPokemons from "../../components/FeaturedPokemons";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="h-[10vh]">
          <Header />
        </div>

        <div className="w-[100vw] flex h-[90vh]">
          <div className="w-[35vw] flex flex-col pl-4 pt-28 z-10 relative">
            <div className="text-5xl text-white">Pokemon</div>
            <div className="text-5xl text-white">Lounge</div>
            <button
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-2 px-4 rounded-full shadow-xl shadow-inner backdrop-filter backdrop-blur-md backdrop-saturate-150 mt-8 w-32"
              onClick={() => navigate("compare")}
            >
              COMPARE
            </button>
          </div>

          <div className="absolute">
            <img
              src={RightGhost}
              alt="Right Ghost"
              className="h-[50vh] bg-purple-500 rounded-3xl opacity-90 mt-12 neon-shadow-animation object-cover"
            />
          </div>

          {/* <FeaturedPokemons /> */}
        </div>
    </div>
  );
}

export default Home;


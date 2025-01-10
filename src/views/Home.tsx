import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import RightGhost from "../assets/RightGhost.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <Header />

      <div className="relative h-2/3 w-3/4">
          <img
            src={RightGhost}
            alt="Right Ghost"
            className="w-full h-full bg-purple-500 rounded-3xl opacity-90 neon-shadow-animation object-cover"
          />

        <div className="absolute inset-0 flex  flex-col items-start justify-center ml-8">
          <div className="text-5xl text-white">Pokemon</div>
          <div className="text-5xl text-white">Lounge</div>
          <button
            className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-2 px-4 rounded-full shadow-xl shadow-inner backdrop-filter backdrop-blur-md backdrop-saturate-150 mt-8 w-32"
            onClick={() => navigate("compare")}
          >
            COMPARE
          </button>
        </div>
      </div>
  </div>
  );
}
export default Home;

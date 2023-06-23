import { Button } from "@mui/material";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  
  return (
    <>
      <div>Welcome to Pokémon Lounge</div>
      <div>
        <Link to="search"><Button>Search a Pokémon</Button></Link>
        <Link to="bookmarks"><Button>See Bookmarks</Button></Link>
      </div>
    </>
  );
}

export default App;

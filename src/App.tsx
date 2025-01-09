import "./App.css";
import HomeMobile from "./views/mobile/Home";
import HomeDesktop from "./views/Home";
import useIsMobile from "./hooks/useIsMobile";
function App() {
  const isMobile = useIsMobile();

  if (isMobile) return <HomeMobile />;
  return <HomeDesktop />;
}
export default App;

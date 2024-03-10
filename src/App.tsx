import BlackWallSection from "./Components/BlackWallSection/BlackWallSection";
import FeaturesBox from "./Components/FeaturesBox/FeaturesBox";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import WatchesCollection from "./Components/WatchesCollection/WatchesCollection";

function App() {
  return (
    <div className="w-full bg-black">
     
        <Navbar/>
        <Landing/>
        <FeaturesBox/>
        <WatchesCollection />
        <BlackWallSection />
    </div>
  );
}

export default App;

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
    </div>
  );
}

export default App;

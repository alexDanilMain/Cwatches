import BlackWallSection from "./Components/BlackWallSection/BlackWallSection";
import FeaturesBox from "./Components/FeaturesBox/FeaturesBox";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import MiniAboutSection from "./Components/MiniAboutSection/MiniAboutSection";
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
        <MiniAboutSection />
        <Footer />
    </div>
  );
}

export default App;

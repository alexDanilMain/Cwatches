import FeaturesBox from "./Components/FeaturesBox/FeaturesBox";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="w-full bg-black">
     
        <Navbar/>
        <Landing/>
        <FeaturesBox/>
    </div>
  );
}

export default App;

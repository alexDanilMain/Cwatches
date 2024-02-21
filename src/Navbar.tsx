import CwatchesLogo from "./imgs/navbar.images/Cwatches_Logo.png";
import SearchIcon from "./imgs/navbar.images/Search_Icon.svg";
import ShopIcon from "./imgs/navbar.images/Shop_Icon.svg";

function Navbar() {
  return (
    <div className="w-full h-[85px] bg-white">
      <div className="w-4/5 mx-auto h-full">
        <div className="flex justify-between h-full items-center">
          <img src={CwatchesLogo} className="w-[91px] h-[67px]" alt="Cwatches logo" />
          <div className="flex items-center gap-16">
            <button className="mr-12"> About CWATCHES</button>
            <div className="h-full flex items-center gap-2">
              <p> 0 </p>
              <img src={ShopIcon} className="w-6 h-6" alt="Shop Icon" />
            </div>
            <img src={SearchIcon} className="w-6 h-6" alt="Search Icon"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

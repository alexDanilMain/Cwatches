import ShoppingCart from "./NavbarFlexList";
import NavbarImgList from "./NavbarImgList";
import NavbarLinkList from "./NavbarLinkList";
import SearchIcon from "../../imgs/navbar.images/Search_Icon.svg";

function NavbarList() {
    return (
        <ul className="flex items-center gap-16">
            <NavbarLinkList />
            <ShoppingCart />
            <NavbarImgList image={SearchIcon}/>
        </ul>
    );
  }
  
  export default NavbarList;
  
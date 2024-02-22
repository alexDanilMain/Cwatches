import ShopIcon from "../../imgs/navbar.images/Shop_Icon.svg";

function ShoppingCart() {
    return (
        <li className="h-full flex items-center gap-2">
        <p> 0 </p>
        <img src={ShopIcon} className="w-6 h-6" alt="Shop Icon" />
      </li>
    );
  }
  
  export default ShoppingCart;
  
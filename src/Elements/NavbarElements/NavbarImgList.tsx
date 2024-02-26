
interface NavbarImgListProps {
    image: string; 
  }

  
const NavbarImgList: React.FC<NavbarImgListProps> = ({image}) => {
    return (
        <li className="w-6 h-6">
        <img src={image} alt="Search Icon" />
      </li>
    );
  }
  
  export default NavbarImgList;
  

interface NavbarImgListProps {
    image: string; // Assuming image is passed as a string path to the image source
  }

  
const NavbarImgList: React.FC<NavbarImgListProps> = ({image}) => {
    return (
        <li className="w-6 h-6">
        <img src={image} alt="Search Icon" />
      </li>
    );
  }
  
  export default NavbarImgList;
  
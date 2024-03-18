import CwatchesLogoImg from "../imgs/navbar.images/Cwatches_Logo.png";
interface extra {
    extraClass: string;
  }


const CwatchesLogo:React.FC <extra> = ({extraClass}) => {

    return (
        <img src={CwatchesLogoImg} className={`w-[59px] h-[45px] lg:w-[91px] lg:h-[67px] ${extraClass}`} alt="Cwatches logo" />
    );
  }
  
  export default CwatchesLogo;
  

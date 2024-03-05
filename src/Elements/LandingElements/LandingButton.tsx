
interface LandingButtonText {
    ButtonText: string; 
  }


const LandingButton: React.FC<LandingButtonText> = ({ButtonText}) => {
    return (
        <button className="w-[161px] h-[37px] text-[14px] lg:w-72 lg:h-16 bg-white rounded-full text-black lg:text-2xl font-bold">
            {ButtonText}
      </button>
    );
  }
  
  export default LandingButton;
  
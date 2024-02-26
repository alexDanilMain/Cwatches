
interface LandingButtonText {
    ButtonText: string; 
  }


const LandingButton: React.FC<LandingButtonText> = ({ButtonText}) => {
    return (
        <button className="w-72 h-16 bg-white rounded-full text-black text-2xl font-bold">
            {ButtonText}
      </button>
    );
  }
  
  export default LandingButton;
  
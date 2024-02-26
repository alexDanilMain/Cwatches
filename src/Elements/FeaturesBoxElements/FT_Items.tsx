interface LandingButtonText {
  Logo: string;
  Content: string;
}

const FT_Items: React.FC<LandingButtonText> = ({ Logo, Content }) => {
  return (
    <div className="flex items-center gap-6">
      <img src={Logo} alt="Delevery Icon" />
      <p>{Content}</p>
    </div>
  );
};

export default FT_Items;

import Heading from "../Heading";
import LandingButton from "./LandingButton";

function LandingFlexBlox() {
  const h1Content = "CUSTOMIZE YOUR TIME!";
  return (
    <div className="flex flex-col text-white mt-52 gap-20">
      <Heading  maxWidth="300px" color="white" content={h1Content} />
      <p className=" max-w-[540px] text-[22px]">
        Explore endless customization options and create a timepiece that speaks
        to your personality. Your time, your design - only at CustomWatches.
      </p>
    <LandingButton ButtonText="Customise It" />
    </div>
  );
}

export default LandingFlexBlox;

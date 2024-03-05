import Heading from "../Heading";
import LandingButton from "./LandingButton";

function LandingFlexBlox() {
  const h1Content = "CUSTOMIZE YOUR TIME!";
  return (
    <div className="flex flex-col items-center text-white mt-12 lg:mt-52 gap-5 lg:gap-20">
      <Heading  maxWidth="300px" color="white" content={h1Content} />
      <p className="max-w-[329px] lg:max-w-[540px] text-[12px] lg:text-[22px] text-center">
        Explore endless customization options and create a timepiece that speaks
        to your personality. Your time, your design - only at CustomWatches.
      </p>
    <LandingButton ButtonText="Customise It" />
    </div>
  );
}

export default LandingFlexBlox;

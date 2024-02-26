import LandingButton from "./LandingButton";

function LandingFlexBlox() {
  return (
    <div className="flex flex-col text-white mt-52 gap-20">
      <h1 className="text-[50px] max-w-72"> CUSTOMIZE YOUR TIME! </h1>
      <p className=" max-w-[540px] text-[22px]">
        Explore endless customization options and create a timepiece that speaks
        to your personality. Your time, your design - only at CustomWatches.
      </p>
    <LandingButton ButtonText="Customise It" />
    </div>
  );
}

export default LandingFlexBlox;

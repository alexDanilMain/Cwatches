import Container from "../../Elements/Container";
import ArmWithClock from "../../imgs/landing.images/ArmWithClock.png";
import GrayStar from "../../imgs/landing.images/GrayStar.png";

export default function Landing() {
  return (
    <div className="h-[995px] w-full relative overflow-hidden">
      <Container>
        <div className="flex flex-col text-white mt-52 gap-20">
          <h1 className="text-[50px] max-w-72"> CUSTOMIZE YOUR TIME! </h1>
          <p className=" max-w-[540px] text-[22px]">
            Explore endless customization options and create a timepiece that
            speaks to your personality. Your time, your design - only at
            CustomWatches.
          </p>
          <button className="w-72 h-16 bg-white rounded-full text-black text-2xl font-bold"> Customise It</button>
        </div>
      </Container>
      <img
        src={ArmWithClock}
        className="absolute right-0 bottom-0"
        alt="Arm with a clock"
      ></img>
      <img
        src={GrayStar}
        className="absolute left-0 bottom-0"
        alt="Arm with a clock"
      ></img>
    </div>
  );
}

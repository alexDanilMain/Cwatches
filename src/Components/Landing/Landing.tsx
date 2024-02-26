import Container from "../../Elements/Container";
import LandingFlexBlox from "../../Elements/LandingElements/LandingFlexBox";
import ArmWithClock from "../../imgs/landing.images/ArmWithClock.png";
import GrayStar from "../../imgs/landing.images/GrayStar.png";

export default function Landing() {
  return (
    <div className="h-[995px] w-full relative overflow-hidden">
      <Container>
            <LandingFlexBlox />
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

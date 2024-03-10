import Container from "../../Elements/Container";
import Heading from "../../Elements/Heading";
import watchCollection from "../../imgs/Customize/Grouped-Watches.png";



function BlackWallSection() {
  return (
    <div className="bg-black-wall text-white py-12">
        <Container>
            <div className="flex flex-col items-center gap-12">
                <Heading content="Customize your Model Style" maxWidth="207px" color="white"/>
                <div className="flex flex-col gap-4 items-center">
                    <img src={watchCollection} alt="3 Watches" />
                    <p> 250$ </p>
                </div>
                <button className="font-bold py-2 px-8 bg-white rounded-full text-black"> Select</button>
            </div>
      </Container>
    </div>
  );
}

export default BlackWallSection;

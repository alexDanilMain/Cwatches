import Container from "../../Elements/Container";
import FT_Items from "../../Elements/FeaturesBoxElements/FT_Items";
import deleveryIcon from "../../imgs/featuresbox.images/delevery_icon.svg";
import returnIcon from "../../imgs/featuresbox.images/return_icon.svg";
import warrantyIcon from "../../imgs/featuresbox.images/warranty_icon.svg";

function FeaturesBox() {
  return (
    <div className="bg-zinc-100 py-8 w-full ">
      <Container>
        <div className="flex flex-col gap-8 lg:justify-between lg:flex-row items-center h-full text-2xl">
            <FT_Items Logo={warrantyIcon} Content={"1 year warranty"} />

            <FT_Items Logo={deleveryIcon} Content={"Free courier delivery"} />

            <FT_Items Logo={returnIcon} Content={"Free returns within 7 day"} />
        </div>
      </Container>
    </div>
  );
}

export default FeaturesBox;

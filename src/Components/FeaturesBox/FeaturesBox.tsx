import Container from "../../Elements/Container";
import deleveryIcon from "../../imgs/featuresbox.images/delevery_icon.svg";
import returnIcon from "../../imgs/featuresbox.images/return_icon.svg";
import warrantyIcon from "../../imgs/featuresbox.images/warranty_icon.svg";

function FeaturesBox() {
  return (
    <div className="bg-zinc-100 h-32 w-full ">
      <Container>
        <div className="flex justify-between items-center h-full text-2xl">
          <div className="flex items-center gap-6">
            <img src={warrantyIcon} alt="Delevery Icon" />
            <p>1 year warranty</p>
          </div>

          <div className="flex items-center gap-6">
            <img src={deleveryIcon} alt="Delevery Icon" />
            <p>Free courier delivery</p>
          </div>

          <div className="flex items-center gap-6">
            <img src={returnIcon} alt="Delevery Icon" />
            <p>Free returns within 7 day</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FeaturesBox;

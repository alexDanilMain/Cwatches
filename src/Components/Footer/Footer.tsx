import Container from "../../Elements/Container";
import CwatchesLogo from "../../Elements/CwatchLogo";
import { FaFacebookF,FaTiktok,FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black w-full text-white text-sm text-center py-12">
      <Container>
        <div className="flex flex-col items-center  ">
          <CwatchesLogo invert="invert" />
          <ul className="my-8 gap-4 flex flex-col ">
            <li>
              <a href=""> About Cwatches</a>
            </li>
            <li>
              <a href=""> Cwatches@luxurysquaredtrading.com</a>
            </li>
            <li>
              <a href=""> Return Policy</a>
            </li>
            <li>
              <a href=""> Warranty</a>
            </li>
          </ul>
        </div>
        <hr />
        <p className="my-8">©2024Cwatches. All rights reserved </p>
        <div className="flex w-full justify-center gap-4">
            <FaFacebookF color="#707070"/>
            <FaTiktok color="#707070"/>
            <FaInstagram color="#707070"/>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

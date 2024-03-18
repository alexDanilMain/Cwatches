import Container from "../../Elements/Container";
import CwatchesLogo from "../../Elements/CwatchLogo";
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black w-full text-white text-sm text-center py-12">
        <Container>
            <div className="flex flex-col lg:flex-row lg: justify-between">
      <CwatchesLogo extraClass="invert mx-auto lg:mx-0" />
      <ul className="my-8 gap-4 flex flex-col lg:flex-row lg:flex-wrap lg:gap-0">
        <li className="lg:w-1/2 lg:order-1 text-start">
          <a href=""> About Cwatches</a>
        </li>
        <li className="lg:w-1/2 lg:order-3 text-start">
          <a href=""> Cwatches@luxurysquaredtrading.com</a>
        </li>
        <li className="lg:w-1/2 lg:order-2 lg:text-start lg:flex justify-end">
          <a href="" className="w-[90px]"> Return Policy</a>
        </li>
        <li className="lg:w-1/2 lg:order-4 lg:text-start lg:flex justify-end">
          <a href="" className="w-[90px]"> Warranty</a>
        </li>
      </ul>
      </div>
      <hr />
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <p className="my-8 lg:w-[400px] lg:text-start">©2024Cwatches. All rights reserved </p>

        <div className="flex w-full justify-center gap-4 lg:justify-end">
          <FaFacebookF color="#707070" />
          <FaTiktok color="#707070" />
          <FaInstagram color="#707070" />
        </div>
      </div>
      </Container>
    </footer>
  );
}

export default Footer;

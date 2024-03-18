import Container from "../../Elements/Container";
import CwatchesLogo from "../../Elements/CwatchLogo";
import NavbarList from "../../Elements/NavbarElements/NavBarList";
import NavbarBox from "../../Elements/NavbarElements/NavbarBox";
import NavbarSpacing from "../../Elements/NavbarElements/NavbarSpacing";

function Navbar() {
  return (
    <NavbarBox>
      <Container>
        <NavbarSpacing>
          <CwatchesLogo extraClass=""/>
          <NavbarList />
        </NavbarSpacing>
      </Container>
    </NavbarBox>
  );
}

export default Navbar;

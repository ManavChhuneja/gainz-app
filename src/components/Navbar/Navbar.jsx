import NavLogo from "./NavLogo/NavLogo";
import NavContainer from "./NavContainer/NavContainer";
import NavItem from "./NavItem/NavItem";

const Navbar = () => {
  return (
    <NavContainer>
      <NavLogo />
      <NavContainer>
        <NavItem text="Login" />
        <NavItem text="Sign Up" />
      </NavContainer>
    </NavContainer>
  );
};

export default Navbar;

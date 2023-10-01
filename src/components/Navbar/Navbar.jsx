import NavLogo from "./NavLogo/NavLogo";
import NavContainer from "./NavContainer/NavContainer";
import NavItem from "./NavItem/NavItem";
import { signInWithGoogle } from "../../firebase";
import { signOut } from "../../firebase";

const Navbar = (props) => {
  return (
    <NavContainer>
      <NavLogo />
      <NavContainer>
        {props.userAuthStatus ? (
          <NavItem text="Sign Out" signInMethod={signOut} />
        ) : (
          <NavItem text="Login With Google" signInMethod={signInWithGoogle} />
        )}
        {props.userAuthStatus ? (
          <NavItem
            text="Toggle History"
            historyHandler={props.historyHandler}
          />
        ) : null}
      </NavContainer>
    </NavContainer>
  );
};

export default Navbar;

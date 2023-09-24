import "./NavItem.css";

const NavItem = (props) => {
  return <p onClick={props.signInMethod}>{props.text}</p>;
};

export default NavItem;

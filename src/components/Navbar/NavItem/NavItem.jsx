import "./NavItem.css";
import React, { useState } from "react";

const NavItem = (props) => {
  const [displayText, setDisplayText] = useState(props.text);
  const handleOnClick = () => {
    // Execute signInMethod if provided
    if (props.signInMethod) {
      props.signInMethod();
    }

    // Execute historyHandler if provided
    if (props.historyHandler) {
      props.historyHandler();
    }
    if (props.text === "History" || props.text === "Close History") {
      setDisplayText((prevState) =>
        prevState === "History" ? "Close History" : "History"
      );
    }
  };

  return (
    <p onClick={handleOnClick}>
      {props.text === "History" || props.text === "Close History"
        ? displayText
        : props.text}
    </p>
  );
};

export default NavItem;

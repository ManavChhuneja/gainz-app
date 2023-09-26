import "./NavItem.css";
import React, { useState } from "react";

const NavItem = (props) => {
  const handleOnClick = () => {
    // executing sign in method if provided
    if (props.signInMethod) {
      props.signInMethod();
    }

    // executing history handler if provided
    if (props.historyHandler) {
      props.historyHandler();
    }
  };

  return <p onClick={handleOnClick}>{props.text}</p>;
};

export default NavItem;

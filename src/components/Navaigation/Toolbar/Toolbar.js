import React, { useState, useRef } from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";
const Toolbar = (props) => {
  const [clicked, setClick] = useState(false);
  const handleClick = () => {
    setClick(!clicked);
  };
  return (
    <header className={classes.Toolbar}>

      <NavigationItems myRef={handleClick} clicked={clicked} />
      <div
        className={
          clicked
            ? [classes.active, classes.headerBurger].join(" ")
            : classes.headerBurger
        }
        onClick={handleClick}
      >
        <span></span>
      </div>
    </header>
  );
};
export default Toolbar;

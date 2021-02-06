import React from "react";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navaigation/Toolbar/Toolbar";
const Layout = (props) => {
  return (
    <React.Fragment>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};
export default Layout;

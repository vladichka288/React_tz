import React from "react";
import classes from "./ListElement.module.css";
const ListElement = (props) => {
  return (
    <li className={classes.Wrapper}>
      <div>{props.index}</div>
      <div>{props.name}</div>
      <div>{props.priority}</div>
      <div>{props.status}</div>
      <div onClick={props.removeProductFunc}>delete</div>
    </li>
  );
};
export default ListElement;

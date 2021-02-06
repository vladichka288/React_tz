import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  let links = [];
  links = [
    { link: "/listView", label: "List View" },
    { link: "/entryView", label: "Entry View" },
  ];

  let linksElements = links.map((element, id) => {
    return (
      <NavigationItem {...props} link={element.link} key={id}>
        {element.label}
      </NavigationItem>
    );
  });
  return (
    <nav
      className={
        props.clicked
          ? [classes.active, classes.headerMenu].join(" ")
          : classes.headerMenu
      }
    >
      <ul className={classes.NavigationItems}>{linksElements}</ul>
    </nav>
  );
};

export default NavigationItems;

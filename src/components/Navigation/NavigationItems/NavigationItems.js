import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigationitems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      {" "}
      Burger Builder{" "}
    </NavigationItem>
    <NavigationItem link="/"> Checkout </NavigationItem>
  </ul>
);

export default Navigationitems;

import React from "react";
import MealImg from "../../assets/headerFoodImage.jpg";
import HeaderCartButton from "./HeaderButtonCard";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealImg} alt="A Table Full of delicious food" />
      </div>
    </React.Fragment>
  );
};
export default Header;
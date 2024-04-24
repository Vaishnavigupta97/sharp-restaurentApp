import React from "react";

import HeaderButtonCard from "./HeaderButtonCard";
import classes from "./Header.module.css";
import mealsImage from "../../assets/headerFoodImage.jpg";


const Header = (props) => {
    return(
        <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderButtonCard onClickBtn ={props.onShowCart} />
        </header>
        <div className={classes.mealImage}>
            <img src={mealsImage} alt="meal Image"/>
        </div>
        </React.Fragment>
    )
}

export default Header;
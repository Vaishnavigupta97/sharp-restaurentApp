import React from "react";

import HeaderButtonCard from "./HeaderButtonCard";
import classes from "./Header.module.css";


const Header = () => {
    return(
        <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderButtonCard />
        </header>
        <div className={classes.mealImage}></div>
        </React.Fragment>
    )
}

export default Header;
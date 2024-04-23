import React from "react";

import MealsSummary from "./MealsSummary";
import AvaliableMeans from "./AvaliableMeans";

const Meals = () => {
    return(
        <React.Fragment>
        <MealsSummary />
        <AvaliableMeans />
        </React.Fragment>
    )
}

export default Meals;
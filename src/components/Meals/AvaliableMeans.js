import React from "react";
import classes from "./AvaliableMeans.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
const dummyMeals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  const Meals = dummyMeals.map((meal) => {
    const { id, name, description, price } = meal;
    return (
      <MealItem
        key={id}
        id={id}
        name={name}
        description={description}
        price={price}
        items={meal}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{Meals}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
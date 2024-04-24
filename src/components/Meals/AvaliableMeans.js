import classes from "./AvaliableMeans.module.css";

const DUMMY_MEALS = [
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


const AvaliableMeans = () => {
    const mealsList = DUMMY_MEALS.map((meal) => {
        return (
            <>
                <li>
                    <p className={classes.mealName}>{meal.name}</p>
                    <p className={classes.mealDiscription}>{meal.description}</p>
                    <p className={classes.mealPrice}>${meal.price}</p>
                </li>
            </>
        )
    });
    return (
        <>
            <section className={classes.mealListSection}>
                <ul type="none">
                    {mealsList}
                </ul>
            </section>
        </>
    )
}

export default AvaliableMeans;
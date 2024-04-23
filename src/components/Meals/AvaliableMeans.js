import classes from "./AvaliableMeans.module.css";

const DUMMY_MEALS = [
    {
        id: 1,
        name: "sushi",
        description: "abcd",
        price: 16.5
    },
    {
        id: 2,
        name: "sss",
        description: "abcdefgh",
        price: 16.5
    },
]


const AvaliableMeans = () => {
    const mealsList = DUMMY_MEALS.map((meal) =>{
       return <li>{meal.name}</li>
    });
    return(
        <>
        <section>
            <ul>
                {mealsList}
            </ul>
        </section>
        </>
    )
}

export default AvaliableMeans;
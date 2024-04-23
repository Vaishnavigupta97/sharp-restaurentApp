import classes from "./MealsSummary.module.css"

const MealsSummary = () => {
    return (
        <>
            <div className={classes.mealSummaryParent}>
                <section className={classes.MealsSummary}>
                    <h2>Delicious food, Delivered to you</h2>
                    <p>choose your favorite meal from our broad selection of available meals
                        and enjoy a delicious lunch or dinner at home
                    </p>
                    <p>All our meals are cooked with high Quality ingredients, just-in-time and
                        of course by experienced chefs..!
                    </p>
                </section>
            </div>
        </>
    )
}

export default MealsSummary;
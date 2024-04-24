import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderButtonCard = () => {
    return (
        <>
            <button className={classes.cardButton}>
                <span className={classes.CartIcon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.buttonCartNumber}>0</span>
            </button>
        </>
    )
}

export default HeaderButtonCard;
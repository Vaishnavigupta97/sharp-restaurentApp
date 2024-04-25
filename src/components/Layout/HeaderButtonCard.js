import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const HeaderButtonCard = (props) => {
     const cartCtx = useContext(CartContext);
     const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
     }, 0);
    return (
        <>
            <button className={classes.cardButton} onClick={props.onClickBtn}>
                <span className={classes.CartIcon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.buttonCartNumber}>{numberOfCartItems}</span>
            </button>
        </>
    )
}

export default HeaderButtonCard;
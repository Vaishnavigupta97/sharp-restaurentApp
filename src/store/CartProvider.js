import CartContext from "./cart-context";

const CartProvider = (props) => {
    const addItemtoCartHandler = () => { }
    const removeItemfromcartHandler = () => { }
    const cartContex = {
        items: [],
        totalAmount: 0,
        addItem: addItemtoCartHandler,
        removeItem: removeItemfromcartHandler
    }
    return (
        <CartContext.Provider value={cartContex}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;
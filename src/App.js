import './App.css';
import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const showCartHandler = () => {
    setCartVisible(true);
  }
  const hideCartHandler = () => {
    setCartVisible(false);
  }
  return (
    <CartProvider>
      {cartVisible && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main className='App'>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

import './App.css';
import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const showCartHandler = () => {
    setCartVisible(true);
  }
  const hideCartHandler = () => {
    setCartVisible(false);
  }
  return (
    <React.Fragment>
      {cartVisible && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main className='App'>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;

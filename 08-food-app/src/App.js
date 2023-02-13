import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  function openCardHandler() {
    setCartIsOpen(true);
  }

  function closeCardHandler() {
    setCartIsOpen(false);
  }

  return (
    <CartProvider>
      {cartIsOpen ? <Cart onCloseCart={closeCardHandler}></Cart> : null}
      <Header onOpenCard={openCardHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

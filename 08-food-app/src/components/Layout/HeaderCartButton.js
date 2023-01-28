import styles from "./HeaderCartButton.module.css";
import CartIcon from "./../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const context = useContext(CartContext);

  // Number of all items which are ordered by the user. Every Item can be ordered more than 1 time, thats why we have to sum up like:
  const numberOfCartItems = context.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  function openCartHandler() {
    props.onOpenCard();
  }

  return (
    <button className={styles.button} onClick={openCartHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}> {numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;

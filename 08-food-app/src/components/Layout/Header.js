import React from "react";
import { Fragment } from "react";
import mealsImage from "./../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onOpenCard={props.onOpenCard} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="Table full of food!"></img>
      </div>
    </Fragment>
  );
};

export default Header;

import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./Header.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header(props) {
  const counts = props.items.map((item) => {
    return item.amount;
  });

  const totalCount = counts.reduce((a, b) => a + b, 0);

  return (
    <header className={classes.header}>
      <h2>Sabjiwala</h2>
      <Button className={classes.cartButton} onClick={props.showModal}>
        <ShoppingCartIcon></ShoppingCartIcon>
        <p>Your Cart</p>
        <p className={classes.cartCount}>{totalCount}</p>
      </Button>
    </header>
  );
}

export default Header;

import { useEffect, useState } from "react";
import Button from "../../UI/Button/Button";
import classes from "./ProductCart.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function ProductCart(props) {
  const [count, setCount] = useState(props.item.amount);

  function changeHandler(event) {
    const value = event.target.value;
    if (value >= 0) {
      setCount(value);
    }
  }

  useEffect(() => {
    setCount(props.item.amount);
  }, [props.item.amount]);

  function addToCart(event) {
    event.preventDefault();
    props.addToCart(props.item.id, count);
  }

  return (
    <form className={classes.productCart} onSubmit={addToCart}>
      <div>
        <Button
          className={classes.iconButton}
          onClick={() => {
            setCount(count - 1);
          }}
        >
          <RemoveIcon />
        </Button>

        <input onChange={changeHandler} value={count} />
        <Button
          className={classes.iconButton}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <AddIcon />
        </Button>
      </div>
      <Button type="submit">+Add</Button>
    </form>
  );
}

export default ProductCart;

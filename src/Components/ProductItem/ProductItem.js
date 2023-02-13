import classes from "./ProductItem.module.css";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductCart from "../ProductCart/ProductCart";

function ProductItem(props) {
  return (
    <li className={classes.productItem}>
      <ProductDetails item={props.item} />
      <ProductCart addToCart={props.addToCart} item={props.item} />
    </li>
  );
}

export default ProductItem;

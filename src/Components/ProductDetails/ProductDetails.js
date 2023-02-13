import classes from "./ProductDetails.module.css";

function ProductDetails(props) {
  return (
    <div className={classes.productDetails}>
      <h3>{props.item.name}</h3>
      <p>{props.item.desc}</p>
      <h4>₹{props.item.price}</h4>
    </div>
  );
}

export default ProductDetails;

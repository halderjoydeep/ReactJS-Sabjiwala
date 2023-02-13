import ProductItem from "../ProductItem/ProductItem";
import Card from "../../UI/Card/Card";
import classes from "./ProductList.module.css";

function ProductList(props) {
  return (
    <Card className={classes.productListCard}>
      <ul>
        {props.items.map((item) => (
          <ProductItem key={item.id} item={item} addToCart={props.addToCart} />
        ))}
      </ul>
    </Card>
  );
}

export default ProductList;

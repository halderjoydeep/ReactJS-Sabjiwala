import Card from "../../UI/Card/Card";
import Modal from "../../UI/Modal/Modal";
import classes from "./CartModal.module.css";
import Button from "../../UI/Button/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function CartModal(props) {
  const cartItems = props.items.filter((item) => {
    return item.amount !== 0;
  });

  const totalAmounts = cartItems.map((item) => {
    return Number(item.amount) * Number(item.price);
  });

  const totalAmount = totalAmounts.reduce((a, b) => a + b, 0);

  return (
    <Modal closeModal={props.closeModal}>
      <Card className={`${classes.cartModal}`}>
        {cartItems.map((item) => {
          return (
            <li key={item.id}>
              <div className={classes.left}>
                <h3>{item.name}</h3>
                <div>
                  <p className={classes.price}>₹{item.price}</p>
                  <div className={classes.amount}>x {item.amount}</div>
                </div>
              </div>
              <div className={classes.right}>
                <Button
                  className={classes.iconButton}
                  onClick={() => {
                    props.addToCart(item.id, item.amount - 1);
                  }}
                >
                  <RemoveIcon />
                </Button>
                <Button
                  className={classes.iconButton}
                  onClick={() => {
                    props.addToCart(item.id, item.amount + 1);
                  }}
                >
                  <AddIcon />
                </Button>
              </div>
            </li>
          );
        })}
        <div className={classes.total}>
          <h2>Total Amount</h2>
          <h2>₹{totalAmount}</h2>
        </div>
        <div className={classes.actions}>
          <Button className={classes.closeBtn} onClick={props.closeModal}>
            Close
          </Button>
          <Button className={classes.checkoutBtn}>{`Checkout >>`}</Button>
        </div>
      </Card>
    </Modal>
  );
}

export default CartModal;

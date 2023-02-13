import classes from "./ShowcaseCard.module.css";
import Card from "../../UI/Card/Card";

function ShowcaseCard() {
  return (
    <Card className={classes.showcaseCard}>
      <h2>
        <span>Fresh</span> Vegetables delivered to you
      </h2>
      <p>
        Buy your favourite items from our broad selection of vegetables. All our
        vegetables are super fresh directly coming from farmers
      </p>
    </Card>
  );
}

export default ShowcaseCard;

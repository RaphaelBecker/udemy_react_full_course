import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

// * Pass object data into this component by using props to make it reusabel and dynamic
// * Passing content into Card directive which is picked up by props.child in Card component
// * wrapp css around directives with help of divs
function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3> {props.title} </h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

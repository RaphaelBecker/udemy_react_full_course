import classes from "./Card.module.css";

// props.children is any content which is passed between the directives of the parents component:
function Card(props) {
  return <div className={classes.card}> {props.children} </div>;
}

export default Card;

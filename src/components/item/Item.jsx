//import { Link, useLocation } from "react-router-dom";
import ItemOptions from "../itemOptions/ItemOptions";
import css from "./ItemList.module.css";

const Item = ({
  id,
  name,
  price,
  rating,
  location,
  description,
  gallery: { thumb },
}) => {
  return (
    <div className={css.container} key={id}>
      <img src={thumb} alt="img" />
      <div className={css.cardWrapper}>
        <h2 className={css.name}>{name}</h2>
        <div className={css.price}>{price}</div>
        <div className={css.rating}>{rating}</div>
        <div className={css.location}>{location}</div>
        <div className={css.description}>{description}</div>
      </div>
      <ItemOptions />
      <button className={css.btn}>Show more</button>
    </div>
  );
};
export default Item;

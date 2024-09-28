import css from "./ItemOptions.module.css";

const ItemOptions = ({
  id,
  transmission,
  engine,
  AC,
  bathroom,
  kitchen,
  TV,
  radio,
  refrigerator,
  microwave,
  gas,
  water,
}) => {
  return (
    <div className={css.container} key={id}>
      <div className={css.cardWrapper}>
        <div className={css.transmission}>{transmission}</div>
        <div className={css.engine}>{engine}</div>
        <div className={css.AC}>{AC}</div>
        <div className={css.bathroom}>{bathroom}</div>
        <div className={css.kitchen}>{kitchen}</div>
        <div className={css.TV}>{TV}</div>
        <div className={css.radio}>{radio}</div>
        <div className={css.refrigerator}>{refrigerator}</div>
        <div className={css.microwave}>{microwave}</div>
        <div className={css.gas}>{gas}</div>
        <div className={css.water}>{water}</div>
      </div>
    </div>
  );
};
export default ItemOptions;

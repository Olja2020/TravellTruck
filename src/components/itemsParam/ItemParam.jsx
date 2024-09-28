import css from "./ItemOptions.module.css";

const ItemParams = ({ id, form, length, width, height, tank, consumption }) => {
  return (
    <div className={css.container} key={id}>
      <div className={css.cardWrapper}>
        <div className={css.form}>{form}</div>
        <div className={css.length}>{length}</div>
        <div className={css.width}>{width}</div>
        <div className={css.height}>{height}</div>
        <div className={css.tank}>{tank}</div>
        <div className={css.consumption}>{consumption}</div>
      </div>
    </div>
  );
};
export default ItemParams;

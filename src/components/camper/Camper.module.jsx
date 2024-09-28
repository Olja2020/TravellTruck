

import css from "./Item.module.css";

import { useNavigate } from "react-router-dom";
export const Item = ({ item }) => {
  
  const navigate = useNavigate();
  const handleShowMore = () => {
    navigate("/catalog/:id", { replace: true });
  };

  

  return (
    <div className={css.wrapper}>
      <input type="text" className={css.text} />
      <p className={css.text}>{item.text}</p>
      <button className={css.btn} onClick={handleShowMore}>
        Show more
      </button>
    </div>
  );
};

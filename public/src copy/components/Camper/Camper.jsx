import { NavLink } from 'react-router-dom';
import { useDispatch, 
  //useSelector 
  } from 'react-redux';
import styles from './Camper.module.css';
import { setActiveCamperId } from '../../redux/campers/slice.js';
//import { selectActiveCamperId } from '../../redux/campers/selectors.js';

const Camper = ({ camper }) => {
  const dispatch = useDispatch();
  //const activeCamperId = useSelector(selectActiveCamperId);

  const handleDetails = () => {
    dispatch(setActiveCamperId(camper.id));
  };

  return (
    <div className={styles.camperContainer}>
      <img
        className={styles.image}
        src={camper.gallery[0].original}
        alt={camper.name}
        width="292px"
        height="320px"
      />
      <div className={styles.info}>
        <div className={styles.textContainer}>
          <div className={styles.headerInfo}>
            <h2 className={styles.title}>{camper.name}</h2>
            <div className={styles.headerInfoRight}>
              <h2 className={styles.price}>&euro;{camper.price}</h2>
              <svg width="24px" height="24px" className={styles.favorite}>
                <use href="/images/icons.svg#iconHeart"></use>
              </svg>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.reviews}>
              <svg width="16px" height="16px">
                <use href="/images/icons.svg#iconStart"></use>
              </svg>
              <span>
                {camper.rating} ({camper.reviews.length} Reviews)
              </span>
            </div>
            <div className={styles.location}>
              <svg width="16px" height="16px">
                <use href="/images/icons.svg#iconMap"></use>
              </svg>
              <span>{camper.location}</span>
            </div>
          </div>
        </div>
        <p className={styles.description}>{camper.description}</p>
        <NavLink to={`/catalog/${camper.id}`} target="blank">
          <button type="button" className={styles.button} onClick={handleDetails}>
            Show more
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Camper;

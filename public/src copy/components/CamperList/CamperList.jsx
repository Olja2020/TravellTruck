import { useState } from 'react';
import { useSelector } from 'react-redux';
import Camper from '../Camper/Camper';
import styles from './CamperList.module.css';
import {
  selectError,
  selectIsLoading,
  selectCampers,
} from '../../redux/campers/selectors';
import { ClipLoader } from 'react-spinners';

const CamperList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const campers = useSelector(selectCampers);

 
  const [visibleCampers, setVisibleCampers] = useState(4); 

  
  const handleLoadMore = () => {
    setVisibleCampers((prevVisibleCampers) => prevVisibleCampers + 4); // Збільшуємо на 4 елементи
  };

  return (
    <>
      {isLoading && !error && (
        <div className={styles.loaderContainer}>
          <ClipLoader color="#FFC531" size={50} />
        </div>
      )}

      <ul className={styles.camperList}>
        {campers.slice(0, visibleCampers).map((camper) => (
          <li key={camper.id} className={styles.camperItem}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>

     
      {visibleCampers < campers.length && (
        <button onClick={handleLoadMore} className={styles.loadMoreBtn}>
          Load More
        </button>
      )}

      {error && <p className={styles.error}>Error loading campers: {error}</p>}
    </>
  );
};

export default CamperList;

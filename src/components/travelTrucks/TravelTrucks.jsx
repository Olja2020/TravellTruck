import styles from "./TravelTrucks.module.css";
import { useNavigate } from "react-router-dom";

const TravelTrucks = () => {
  const navigate = useNavigate();

  const handleTravelTrucksClick = () => {
    navigate("/catalog", { replace: true });
  };
  return (
    <div className={styles.travelTrucks}>
      <div className={styles.travelTrucksContainer}>
        <h1 className={styles.travelTrucksHeader}>Campers of your dreams</h1>

        <h2 className={styles.travelTrucksSubheader}>
          You can find everything you want in our catalog
        </h2>

        <button
          type="button"
          className={styles.travelTrucksButton}
          onClick={handleTravelTrucksClick}
        >
          View Now
        </button>
      </div>
    </div>
  );
};

export default TravelTrucks;

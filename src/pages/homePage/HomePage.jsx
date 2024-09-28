import TravelTrucks from '../../components/travelTrucks/TravelTrucks.jsx';
import styles from './HomePage.module.css';
const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.homePageContainer}>
        <div className={styles.homePageContainerBlock}>
            <TravelTrucks />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
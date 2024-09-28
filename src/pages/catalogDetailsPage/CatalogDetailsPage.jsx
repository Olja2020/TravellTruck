
import DescriptionTravelTrucks from '../../components/descriptionTravelTrucks/DescriptionTravelTrucks.jsx';
import FeaturesTravelTrucks from '../../components/featuresTravelTrucks/FeaturesTravelTrucks.jsx';
import ReviewsTravelTrucks from '../../components/reviewsTravelTrucks/ReviewsTravelTrucks.jsx';
import BookCampervan from '../../components/bookCampervan/BookCampervan.jsx';
import styles from './CatalogDetailsPage.module.css';
const CatalogDetailsPage = () => {
  return (
    <div className={styles.CatalogDetailsPage}>
      <div className={styles.CatalogDetailsPageContainer}>
        <div className={styles.CatalogDetailsPageContainerBlock}>
            <DescriptionTravelTrucks />
            <FeaturesTravelTrucks />
            <ReviewsTravelTrucks />
            <BookCampervan />    
          </div>
      </div>
    </div>
  );
};

export default CatalogDetailsPage;
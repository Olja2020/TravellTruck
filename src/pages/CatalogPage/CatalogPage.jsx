import css from './CatalogPage.module.css';
import { fetchCatalog } from '../../redux/campers/operations.js';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
// import {
//   selectCampers,
//   selectError,
//   selectIsLoading,
// } from '../../redux/campers/selectors.js';
import CamperList from '../../components/CamperList/CamperList.jsx';
// import CamperFilterList from '../../components/CamperFilterList/CamperFilterList.jsx';
//import VehicleEquipment from '../../components/vehicleEquipmentFilters/VehicleEquipmentFilters.jsx';
//import LocationTravelTrucks  from '../../components/LocationTravelTrucks/LocationTravelTrucks.jsx';
import CamperFilterlist from '../../components/CamperFilterList/CamperFilterList.jsx';
import FilterForm from '../../components/FilterForm/FilterForm.jsx';
const CatalogPage = () => {
  // const campers = useSelector(selectCampers);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);
  

  return (
    <main className={css.container}>
      <aside className={css.list}>
        {/* <LocationTravelTrucks></LocationTravelTrucks>  */}
         {/* <VehicleEquipment></VehicleEquipment> */}
         <FilterForm></FilterForm>
         <CamperFilterlist></CamperFilterlist>
      </aside>
      
      <div className={css.listCampers}>
        <CamperList/>
      </div>
    </main>
  );
};
export default CatalogPage;

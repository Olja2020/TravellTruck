import css from "./LocationTravelTrucks.module.css";
//import { 
  //useDispatch,
  // useSelector } from "react-redux";
//import { selectNameFilter } from "../../redux/filters/selectors";
//import { changeFilter } from "../../redux/filters/slice";

export default function LocationTravelTrucks() {
  //const dispatch = useDispatch();
 // const filter = useSelector(selectNameFilter);

  //const handleFilter = (e) => {
   // const name = e.target.value.trim();
    //dispatch(changeFilter(name));
 // };

  return (
    <div className={css.location}>
      <h2 className={css.subTitle}>Location</h2>
      <input
        type="text"
        className={css.searchInput}
        // value={filter}
        // onChange={handleFilter}
        
      />
      
    </div>
  );
}

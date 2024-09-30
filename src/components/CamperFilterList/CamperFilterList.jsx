


//import { useSelector, useDispatch } from 'react-redux';
     //import { Suspense, useEffect, } from 'react'; 
     //import Camper from '../Camper/Camper'; // Оголошення Camper як lazy
     //import css from './CamperFilterList.module.css';
    // import { selectError, selectIsLoading } from '../../redux/campers/selectors';
     
     //import { fetchCampers } from '../../redux/campers/slice'; 
     
      const CamperFilterList = () => {
      
       //const dispatch = useDispatch();
       
       //const isLoading = useSelector(selectIsLoading);
       //const error = useSelector(selectError);
       

//+=+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//console.log(selectFilters)
       //const filters = useSelector(selectFilters);

       //console.log( '111', filters); // Виведе значення state.filters в консоль
     
    //    useEffect(() => {
    //      dispatch(fetchCampers());
    //    }, [dispatch]);

    //    if (isLoading) {
    //      return (
    //        <div className={css.loaderContainer}>
    //          <СlipLoader />
    //        </div>
    //      );
    //    }

    //    if (error) {
    //      return <div>Error: {error}</div>;
    //    }

    //    return (
    //      <ul className={css.list}>
    //        <Suspense fallback={<div>Loading campers...</div>}>
    //          {campers.map((camper) => (
    //            <Camper key={camper.id} camper={camper} />
    //          ))}
    //        </Suspense>
    //      </ul>
    //    );
      };

     export default CamperFilterList;
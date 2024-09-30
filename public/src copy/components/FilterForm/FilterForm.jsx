import css from './FilterForm.module.css';
//import { Field, Form, Formik, ErrorMessage } from 'formik';
//import { useId } from 'react';
//import { filterSchema } from '../../validation.js';
// Массив с данными для чекбоксов

import axios from 'axios';
//import { useEffect } from 'react';
//import React from 'react';
//import { fetchCampers } from '../../redux/campers/slice';

// const CamperSearch = () => {
  //import axios from 'axios';
  import { useEffect, useState } from 'react';
  import { 
    //useSelector,
     useDispatch } from 'react-redux'; // Assuming you're using Redux
  import { fetchCampers } from '../../redux/campers/slice'; // Assuming you have this slice
  
  const CamperSearch = () => {
    const dispatch = useDispatch();
    //const campers = useSelector((state) => state.campers.campers); // Get campers from Redux state
    
    const [location, setLocation] = useState('Ukraine, Kyiv');
    const [ac, setAC] = useState(true);
    const [transmission, setTransmission] = useState('automatic');
    const [kitchen, setKitchen] = useState(true);
    const [tv, setTV] = useState(true);
    const [bathroom, setBathroom] = useState(true);
    const [form, setForm] = useState('alcove');
    
   const [filters, setFilters] = useState({
      location: {location},
      AC: {ac},
      transmission: {transmission},
      kitchen: {kitchen},
      TV: {tv},
      bathroom: {bathroom},
      form: {form},
     });
    
  
    useEffect(() => {
      dispatch(fetchCampers(filters)); 
    }, [filters, dispatch]); 
  
    
    const handleSubmit = async (event) => {
      event.preventDefault();

      const queryParams = Object.entries(filters).reduce((acc, [key, value]) => {

        console.log();
        if ( value === 'form') { 
          acc[key] = value;
        
          
        } 
        if (typeof value === 'boolean' && value) { 
         acc[key] = value;
       } 

        //const queryParams = `location=${location}&AC=${ac}&transmission=${transmission}&kitchen={kitchen}&TV=${tv}&bathroom=${bathroom}&form=${form}`;

        console.log( filters.transmission);
        console.log( value);
        return acc;
      }, {});
      
        
      
       console.log(queryParams);
        axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers', {
          params: queryParams,
        })
        .then(response => {
        
          console.log(response.data);
        })
        .catch(error => {
        
          console.error(error);
        });
       
      }
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    console.log(name, checked);
    setFilters({ ...filters, [name]: checked });
    console.log(  setLocation, setAC, setTransmission, setKitchen,setTV,setBathroom, setForm  );
  };


  return (

<div>
  
   <div className={css.location}>
      <h2 className={css.subTitle}>Location</h2>
      <input
        type="text"
        className={css.searchInput}
        id="location" 
        checked={filters.location}
        onChange={handleCheckboxChange}
        name="location"
      />
      
    </div>
      <div className={css.filters}>Filters</div>
      <h3 className={css.filtersName}>Vehicle equipment</h3>
       <div className={css.filterContainer}>

        <div className={css.filterItem }>
          
          <input 
            className={css.filterItems}
            type="checkbox" 
            id="ac" 
            value={ac} 
            // checked={filters.AC}
            onChange={handleCheckboxChange}
            name="AC"
           />
           <label htmlFor="ac"><svg 
             className={css.mediaIcon} 
             width="32" 
            height="32" 
             aria-label="icon"
           >
             <use href="../../../public/symbol-defs.svg#icon-Vector-1"></use>
           </svg>AC</label>
          
         </div>

         <div className={css.filterItem}>
          
           <input 
             className={css.filterItems}
             type="checkbox" 
             id="transmission" 
             value={transmission} 
             onChange={handleCheckboxChange}
             checked={filters.automatic}
             name="transmission"
           />
           <label htmlFor="Automatic"><svg 
             className={css.mediaIcon} 
             width="32" 
             height="32" 
             aria-label="icon"
           >
             <use href="../../../public/symbol-defs.svg#icon-diagram"></use>
          </svg>Automatic</label>
                   </div>

         <div className={css.filterItem}>
          
           <input 
             className={css.filterItems}
             type="checkbox" 
             id="kitchen" 
             value="kitchen" 
             onChange={handleCheckboxChange}
             checked={filters.kitchen}
             name="kitchen"
           />
           <label htmlFor="kitchen"><svg 
             className={css.mediaIcon} 
             width="32" 
             height="32"
             aria-label="icon"
           >  <use href="../../../public/symbol-defs.svg#icon-Group"></use>
           </svg>Kitchen</label>
          
        </div>

         <div className={css.filterItem}>
          
           <input 
             className={css.filterItems}
             type="checkbox" 
             id="TV" 
             value="TV" 
             onChange={handleCheckboxChange}
             checked={filters.TV}
             name="TV"
           />
           <label htmlFor="TV"><svg 
             className={css.mediaIcon} 
             width="32" 
             height="32" 
             aria-label="icon"
           >
             <use href="../../../public/symbol-defs.svg#icon-tv"></use>
           </svg>TV</label>
          
         </div>

         <div className={css.filterItem}>
          
           <input 
             className={css.filterItems}
             type="checkbox" 
             id="Bathroom" 
             value="bathroom" 
             onChange={handleCheckboxChange}
             checked={filters.bathroom}
             name="bathroom"
           />
           <label htmlFor="Bathroom"><svg 
             className={css.mediaIcon} 
             width="32" 
             height="32" 
             aria-label="icon"
           >
             <use href="../../../public/symbol-defs.svg#icon-bi_droplet"></use>
           </svg>Bathroom</label>
          
         </div>

        
       </div>


       <h3>Vehicle type</h3>

       <div className={css.filterContainer}>
          <div className={css.filterItem}> 
        
         <input 
           className={css.filterItems} 
           type="radio" 
           name="form"
           id="panelTruck" 
           value="panelTruck"
           onChange={handleCheckboxChange}
           checked={filters.panelTruck}
         />
         <label htmlFor="Van">  <svg 
           className={css.mediaIcon} 
           width="32" 
           height="32" 
           aria-label="icon"
        >
           <use href="../../../public/symbol-defs.svg#icon-bi_grid-1x2"></use>
         </svg>Van</label>
       
       </div>

        
        
         <div className={css.filterItem}>
          
           <input 
             className={css.filterItems}
             type="radio" 
             name="form"
             id="fullyIntegrated" 
             value="fullyIntegrated" 
             onChange={handleCheckboxChange}
             checked={filters.fullyIntegrated}
           />
           <label htmlFor="Fully Integrated"><svg 
             className={css.mediaIcon} 
             width="32" 
             height="32" 
            aria-label="icon"
          >
             <use href="../../../public/symbol-defs.svg#icon-bi_grid"></use>
           </svg>Fully Integrated</label>
          
         </div>

        <div className={css.filterItem}>
          
          <input 
             className={css.filterItems }
            type="radio" 
            name="form"
            id="alcove" 
             value="alcove" 
             onChange={handleCheckboxChange}
             checked={filters.alcove}
          />
           <label htmlFor="Alcove"><svg 
             className={css.mediaIcon} 
             width="32" 
             height="32" 
             aria-label="icon"
           >
             <use href="../../../public/symbol-defs.svg#icon-bi_grid-3x3-gap"></use>
           </svg>Alcove</label>
          
         </div>
         <button type="submit" className={css.filtersBtn} onClick={handleSubmit}>Search</button>
         </div>
     
    </div>
  );
 };


export default CamperSearch;

// import { 
   
//   createSlice } from '@reduxjs/toolkit';
// import { fetchCatalog, fetchCatalogById } from './operations.js';


// export const handlePending = state => {
//   state.isLoading = true;
// };

// export const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const campersSlice = createSlice({
//   name: 'campers',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
    
//   },
//   reducers: {
   
//     setActiveCamperId(state, action) {
//       state.activeCamperId = action.payload;
//     },
//     clearActiveCamperId(state) {
//       state.activeCamperId = null;
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchCatalog.rejected, handleRejected)
//       .addCase(fetchCatalog.pending, handlePending)
//       .addCase(fetchCatalog.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
       
//       })
//       .addCase(fetchCatalogById.rejected, handleRejected)
//       .addCase(fetchCatalogById.pending, handlePending)
//       .addCase(fetchCatalogById.fulfilled,(state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.activeCamperId = action.payload;
//         console.log(state.activeCamperId);
//       });
   
//   },
// });


// export const { setActiveCamperId, clearActiveCampertId } = campersSlice.actions;
// export const campersReducer = campersSlice.reducer;


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//      const initialState = {
//        items: [],
//        isLoading: false,
//        error: null,
//      };

//      export const fetchCampers = createAsyncThunk('campers/fetchCampers', async () => {
//        const response = await fetch('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
//        return response.json();
//      });

//      const campersSlice = createSlice({
//        name: 'campers',
//        initialState,
//        extraReducers(builder) {
//          builder
//            .addCase(fetchCampers.pending, (state) => {
//              state.isLoading = true;
//              state.error = null;
//            })
//            .addCase(fetchCampers.fulfilled, (state, action) => {
//              state.isLoading = false;
//              state.items = action.payload.items; // Оновлення items
//            })
//            .addCase(fetchCampers.rejected, (state, action) => {
//              state.isLoading = false;
//              state.error = action.error.message;
//            });
//        },
//      });

//      export const campersReducer = campersSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

   const initialState = {
     items: [],
     isLoading: false,
     error: null,
     activeCamperId: null,
     filter: '',
   };

   export const fetchCampers = createAsyncThunk('campers/fetchCampers', async () => {
     const response = await fetch('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
     return response.json();
   });

   const campersSlice = createSlice({
     name: 'campers',
     initialState,
     reducers: {
       setActiveCamperId: (state, action) => {
         state.activeCamperId = action.payload;
       },
       setFilter: 
        (state, action) => {
          state.filter = action.payload;
        },
       
     },
     extraReducers(builder) {
       builder
         .addCase(fetchCampers.pending, (state) => {
           state.isLoading = true;
           state.error = null;
         })
         .addCase(fetchCampers.fulfilled, (state, action) => {
           state.isLoading = false;
           state.items = action.payload.items; 
         })
         .addCase(fetchCampers.rejected, (state, action) => {
           state.isLoading = false;
           state.error = action.error.message;
         });
     },
   });

   export const { setActiveCamperId } = campersSlice.actions; // Додаємо експорт
   export const campersReducer = campersSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';
// //import { statusFilters } from './constants';

// const filtersInitialState = {
//   status: statusFilters.all,
// };
// const statusFilters = Object.freeze({
//   all: 'all',
//   active: 'active',
//   completed: 'completed',
// });

// const filtersSlice = createSlice({
//   name: 'filters',
//   initialState: filtersInitialState,
//   reducers: {
//     setStatusFilter(state, action) {
//       state.status = action.payload;
//     },
//   },
// });
// const filtersReducer = filtersSlice.reducer;

// //++++++++++++++++++++++++taskslice++++++++++++++++++++
// //++++++++++++++++++++++++++++++++++++++++++opre=====

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

// export const fetchTasks = createAsyncThunk(
//   'tasks/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/tasks');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// //++++++++++++++++++++++++++++++++++++++++++++++++
// //import { createSlice } from '@reduxjs/toolkit';
// //import { fetchTasks } from './operations';

// const handlePending = (state) => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTasks.pending, handlePending)
//       .addCase(fetchTasks.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchTasks.rejected, handleRejected)
//       .addCase(fetchTasks.pending, handlePending)
//       .addCase(fetchTasks.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(action.payload);
//       })}
//     }) 

//  const tasksReducer = tasksSlice.reducer;

// // _____________________________store_________

// import { configureStore } from '@reduxjs/toolkit';
// //import { tasksReducer } from './tasksSlice';
// //import { filtersReducer } from './filtersSlice';

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//     filters: filtersReducer,
//   },
// });


// export const { setStatusFilter } = filtersSlice.actions;
// //export const filtersReducer = filtersSlice.reducer;


// //=============================================
// import { useSelector, useDispatch } from 'react-redux';
// import { Button } from '../Button/Button';
// import { statusFilters } from '../../redux/constants';
// import { selectStatusFilter } from '../../redux/selectors';
// import { setStatusFilter } from '../../redux/filtersSlice';
// import css from './StatusFilter.module.css';

// export const StatusFilter = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector(selectStatusFilter);

//   const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

//   return (
//     <div className={css.wrapper}>
//       <Button
//         selected={filter === statusFilters.all}
//         onClick={() => handleFilterChange(statusFilters.all)}
//       >
//         All
//       </Button>


//==================================================

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   name: "",
// };

// export const filtersSlice = createSlice({
//   name: "filters",
//   initialState,
//   reducers: {
//     changeFilter: (state, action) => {
//       state.name = action.payload;
//     },
//   },
// });

// export const { changeFilter } = filtersSlice.actions;
// // export const selectNameFilter = (state) => state.filters.name;
// export const filtersReducer = filtersSlice.reducer;

//++++++++++++++++++++++++++++++++++++++++++++++++++=
import { createSlice } from "@reduxjs/toolkit";
import {  createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  //   location: "",
  AC: false,
  transmission: "automatic",
  kitchen: false,
  TV: false,
  bathroom: false,
  form: ''
};

export const fetchFilters = createAsyncThunk('campers/fetchFilters', async () => {
  const response = await fetch('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
  return response.json();
});

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setAC: (state, action) => {
      state.AC = action.payload;
    },
    setTransmission: (state, action) => {
      state.transmission = action.payload;
    },
    setKitchen: (state, action) => {
      state.kitchen = action.payload;
    },
    setTV: (state, action) => {
      state.TV = action.payload;
    },
    setBathroom: (state, action) => {
      state.bathroom = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
    resetFilters: (state) => {
      Object.assign(state, initialState); 
    },
  },extraReducers(builder) {
    builder
      .addCase(fetchFilters.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items; 
      })
      .addCase(fetchFilters.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setLocation,
  setAC,
  setTransmission,
  setKitchen,
  setTV,
  setBathroom,
  setForm,
  resetFilters,
} = filtersSlice.actions;

export const selectFilters = (state) => state.filters;

export const filtersReducer= filtersSlice.reducer;
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

// export const fetchCatalog = createAsyncThunk(
//   'campers/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/campers');
//       // console.log(response.data.items);

//       return response.data.items;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const fetchCatalogById = createAsyncThunk(
//   'campers/fetchById',
//   async ({ id }, thunkAPI) => {
//     try {
//       const response = await axios.get(`/campers/${id}`);
//       console.log(response.data);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
//       .addCase(fetchCampers.rejected, handleRejected)
//       .addCase(addTask.pending, handlePending)
//       .addCase(addTask.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(action.payload);
//       })
//       .addCase(addTask.rejected, handleRejected)
//       .addCase(deleteTask.pending, handlePending)
//       .addCase(deleteTask.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.items.findIndex(
//           (task) => task.id === action.payload.id
//         );
//         state.items.splice(index, 1);
//       })
//       .addCase(deleteTask.rejected, handleRejected)
//       .addCase(toggleCompleted.pending, handlePending)
//       .addCase(toggleCompleted.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.items.findIndex(
//           (task) => task.id === action.payload.id
//         );
//         state.items.splice(index, 1, action.payload);
//       })
//       .addCase(toggleCompleted.rejected, handleRejected);
  },
 });

export const tasksReducer = campersSlice.reducer;

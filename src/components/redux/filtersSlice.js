import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: `filter`,
  initialState: {
    filter: ``,
  },
  reducers: {
    filterValue: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { filterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const getFilter = state => state.filter.filter;

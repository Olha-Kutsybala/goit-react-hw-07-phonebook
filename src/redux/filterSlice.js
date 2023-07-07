import { createSlice } from '@reduxjs/toolkit';

const FilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setFilter } = FilterSlice.actions;
export const filterReducer = FilterSlice.reducer;

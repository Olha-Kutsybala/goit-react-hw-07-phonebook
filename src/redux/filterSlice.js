import { createSlice } from '@reduxjs/toolkit';

const FilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: {
      reducerer(state, action) {
        state.value = action.payload.value;
      },
    },
    prepare(value) {
      return {
        payload: { value },
      };
    },
  },
});

export const { setFilter } = FilterSlice.actions;
export const filterReducer = FilterSlice.reducer;

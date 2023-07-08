import { createSlice } from '@reduxjs/toolkit';

const FilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filter: {
      reducer(state, action) {
        state = action.payload.value;
        return state;
      },
    },
    prepare(value) {
      return {
        payload: { value },
      };
    },
  },
});

export const { filter } = FilterSlice.actions;
export const filterReducer = FilterSlice.reducer;

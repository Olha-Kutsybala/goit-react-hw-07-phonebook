import { createSlice, nanoid } from '@reduxjs/toolkit';

const ContactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prerare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    removeContact: {
      reducer(state, action) {
        return state.filter(({ id }) => {
          return id !== action.payload.id;
        });
      },
      prepare(id) {
        return {
          payload: { id },
        };
      },
    },
  },
});

export const { addContact, removeContact } = ContactSlice.actions;
export const ContactsReducer = ContactSlice.reducer;

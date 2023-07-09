import { createSlice, nanoid } from '@reduxjs/toolkit';

const ContactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        console.log(payload);
        state.items = [payload, ...state.items];
      },

      prepare(newContact) {
        return {
          payload: {
            id: nanoid(),
            ...newContact,
          },
        };
      },
    },
    removeContact(state, { payload }) {
      state.items = state.items.filter(({ id }) => {
        return id !== payload;
      });
    },
  },
});

export const { addContact, removeContact } = ContactSlice.actions;
export const ContactsReducer = ContactSlice.reducer;

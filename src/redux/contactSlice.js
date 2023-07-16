import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const ContactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [removeContact.pending]: handlePending,
    [removeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [removeContact.rejected]: handleRejected,
  },
  // reducers: {
  //   addContact: {
  //     reducer(state, { payload }) {
  //       console.log(payload);
  //       state.items = [payload, ...state.items];
  //     },

  //     prepare(newContact) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           ...newContact,
  //         },
  //       };
  //     },
  //   },
  //   removeContact(state, { payload }) {
  //     state.items = state.items.filter(({ id }) => {
  //       return id !== payload;
  //     });
  //   },
  // },
});

// export const { addContact, removeContact } = ContactSlice.actions;
export const ContactsReducer = ContactSlice.reducer;

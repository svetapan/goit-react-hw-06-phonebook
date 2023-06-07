import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    updateContact: (state, action) => {
      const { id } = action.payload;
      const index = state.contacts.findIndex(contact => contact.id === id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    filterContact: (state, action) => {
      state.filter = action.payload;
    }
  },
});

export const { addContact, deleteContact, updateContact, filterContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;

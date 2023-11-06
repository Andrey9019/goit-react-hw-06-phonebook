import { createSlice } from '@reduxjs/toolkit';

const ContactSlice = createSlice({
  name: `contacts`,
  initialState: { contacts: [] },
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactsRuduser = ContactSlice.reducer;
export const { addContact } = ContactSlice.actions;
export const { removeContact } = ContactSlice.actions;
export const getContacts = state => state.contacts.contacts;

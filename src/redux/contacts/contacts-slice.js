import { createSlice } from '@reduxjs/toolkit';

import {
  feachAllContactsLoading,
  feachAllContactsSuccess,
  feachAllContactsError,
  feachAddContactLoading,
  feachAddContactSuccess,
  feachAddContactError,
  feachDeleteContactLoading,
  feachDeleteContactSuccess,
  feachDeleteContactError,
} from './contacts-actions';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [feachAllContactsLoading]: store => {
      store.isLoading = true;
    },
    [feachAllContactsSuccess]: (store, { payload }) => {
      store.isLoading = false;
      store.items = payload;
    },
    [feachAllContactsError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
    [feachAddContactLoading]: store => {
      store.isLoading = true;
    },
    [feachAddContactSuccess]: (store, { payload }) => {
      store.isLoading = false;
      store.items.push(payload);
    },
    [feachAddContactError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
    [feachDeleteContactLoading]: store => {
      store.isLoading = true;
    },
    [feachDeleteContactSuccess]: (store, { payload }) => {
      store.isLoading = false;
      const index = store.items.findIndex(item => item.id === payload);
      store.items.splice(index, 1);
    },
    [feachDeleteContactError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
  },
});

export default contactsSlice.reducer;

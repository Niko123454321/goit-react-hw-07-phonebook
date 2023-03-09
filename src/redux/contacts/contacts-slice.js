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
  extraReducers: builder => {
    builder
      .addCase(feachAllContactsLoading, store => {
        store.isLoading = true;
      })
      .addCase(feachAllContactsSuccess, (store, { payload }) => {
        store.isLoading = false;
        store.items = payload;
      })
      .addCase(feachAllContactsError, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(feachAddContactLoading, store => {
        store.isLoading = true;
      })
      .addCase(feachAddContactSuccess, (store, { payload }) => {
        store.isLoading = false;
        store.items.push(payload);
      })
      .addCase(feachAddContactError, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(feachDeleteContactLoading, store => {
        store.isLoading = true;
      })
      .addCase(feachDeleteContactSuccess, (store, { payload }) => {
        store.isLoading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(feachDeleteContactError, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export default contactsSlice.reducer;

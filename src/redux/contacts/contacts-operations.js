import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../services/contacts';

export const feachAllContacts = createAsyncThunk(
  'contacts/feach-all',
  async (_, thunkUPI) => {
    try {
      const data = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkUPI.rejectWithValue(response.data.message);
    }
  }
);

export const feachAddContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const feachDeleteContsct = createAsyncThunk(
  'contact/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

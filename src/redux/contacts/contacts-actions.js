import { createAction } from '@reduxjs/toolkit';

export const feachAllContactsLoading = createAction('contacts/feach/loading');
export const feachAllContactsSuccess = createAction('contacts/feach/success');
export const feachAllContactsError = createAction('contacts/feach/error');

export const feachAddContactLoading = createAction('contacts/add/loading');
export const feachAddContactSuccess = createAction('contacts/add/success');
export const feachAddContactError = createAction('contacts/add/error');

export const feachDeleteContactLoading = createAction(
  'contacts/delete/loading'
);
export const feachDeleteContactSuccess = createAction(
  'contacts/delete/success'
);
export const feachDeleteContactError = createAction('contacts/delete/error');

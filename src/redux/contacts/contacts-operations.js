import * as api from '../../services/contacts';
import * as actions from './contacts-actions';

export const feachAllContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(actions.feachAllContactsLoading());
      const data = await api.getAllContacts();
      dispatch(actions.feachAllContactsSuccess(data));
    } catch ({ response }) {
      dispatch(actions.feachAllContactsError(response.data.message));
    }
  };

  return func;
};

export const feachAddContact = data => {
  const func = async dispatch => {
    try {
      dispatch(actions.feachAddContactLoading());
      const result = await api.addContact(data);
      dispatch(actions.feachAddContactSuccess(result));
    } catch ({ response }) {
      dispatch(actions.feachAddContactError(response.data.message));
    }
  };
  return func;
};

export const feachDeleteContsct = id => {
  const func = async dispatch => {
    try {
      dispatch(actions.feachDeleteContactLoading());
      await api.deleteContact(id);
      dispatch(actions.feachDeleteContactSuccess());
    } catch ({ response }) {
      dispatch(actions.feachDeleteContactError(response.data.message));
    }
  };
  return func;
};

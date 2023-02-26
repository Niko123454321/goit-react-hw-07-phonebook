import { ADD_CONTACT, DELETE_CONTACT } from './types';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContacts = [...state.contacts, action.payload];
      return { ...state, contacts: newContacts };
    case DELETE_CONTACT:
      const result = state.contacts.filter(item => item.id !== action.payload);
      return { ...state, contacts: result };
    default:
      return state;
  }
};

export default reducer;
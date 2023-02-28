import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { deleteContact } from 'redux/contacts/contacts-slice';
import Notiflix from 'notiflix';

import css from './contactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizFilter);
    });
    return result;
  };

  const handleDeliteContact = id => {
    dispatch(deleteContact(id));
    Notiflix.Notify.success('contact successfully deleted');
  };

  const items = getFilteredContacts();

  const myContacts = items.map(({ id, name, number }) => (
    <li key={id} className={css.li}>
      {name}: {number}{' '}
      <button type="button" onClick={() => handleDeliteContact(id)}>
        Delite
      </button>
    </li>
  ));

  return <ul>{myContacts}</ul>;
};

export default ContactList;

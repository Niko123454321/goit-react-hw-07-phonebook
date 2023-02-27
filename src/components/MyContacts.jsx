import { useSelector, useDispatch } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { addContact, deleteContact } from 'redux/contacts/contacts-actions';
import { setFilter } from 'redux/filter/filter-actions';
import { getAllContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

const MyContacts = () => {
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const isDublicate = searchName => {
    if (
      contacts.find(contact => {
        return contact.name.toLowerCase() === searchName.toLowerCase();
      })
    ) {
      return true;
    }
  };

  const handleAddContact = ({ name, number }) => {
    if (isDublicate(name)) {
      alert(`${name} is already in your contacts!`);
      return false;
    }
    dispatch(addContact({ name, number }));
  };
  const handleDeliteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

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

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter handleChange={handleFilter} />
      <ContactList
        items={getFilteredContacts()}
        removeContacts={handleDeliteContact}
      />
    </div>
  );
};

export default MyContacts;

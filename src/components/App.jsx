import { Provider } from 'react-redux';
import store from 'redux/store';

import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { useState, useEffect } from 'react';

const setToLocalStorage = (key, value) => {
  return window.localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = key => {
  return JSON.parse(window.localStorage.getItem(key));
};

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const myContacts = getFromLocalStorage('contacts');
    return myContacts ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => setToLocalStorage('contacts', contacts), [contacts]);

  const isChecked = searchName => {
    if (
      contacts.find(contact => {
        return contact.name.toLowerCase() === searchName.toLowerCase();
      })
    ) {
      return true;
    }
  };

  const addContact = ({ name, number }) => {
    if (isChecked(name)) {
      return alert(`${name} is already in your contacts!`);
    }
    setContacts(prevContacts => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return [...prevContacts, newContact];
    });
  };

  const handleFilter = ({ target }) => {
    setFilter(target.value);
  };

  return (
    <Provider store={store}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter onInputChange={handleFilter} filter={filter} />
        <ContactList />
      </div>
    </Provider>
  );
};

// // import { Component } from 'react';
// import { nanoid } from 'nanoid';

// import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList';
// import ContactForm from './ContactForm/ContactForm';
// import { useState, useEffect } from 'react';

// const setToLocalStorage = (key, value) => {
//   return window.localStorage.setItem(key, JSON.stringify(value));
// };

// const getFromLocalStorage = key => {
//   return JSON.parse(window.localStorage.getItem(key));
// };

// export const App = () => {
//   const [contacts, setContacts] = useState(() => {
//     const myContacts = getFromLocalStorage('contacts');
//     return myContacts ?? [];
//   });

//   const [filter, setFilter] = useState('');

//   useEffect(() => setToLocalStorage('contacts', contacts), [contacts]);

//   const isChecked = searchName => {
//     if (
//       contacts.find(contact => {
//         return contact.name.toLowerCase() === searchName.toLowerCase();
//       })
//     ) {
//       return true;
//     }
//   };

//   const addContact = ({ name, number }) => {
//     if (isChecked(name)) {
//       return alert(`${name} is already in your contacts!`);
//     }
//     setContacts(prevContacts => {
//       const newContact = {
//         id: nanoid(),
//         name,
//         number,
//       };
//       return [...prevContacts, newContact];
//     });
//   };

//   const deliteContact = id => {
//     setContacts(contacts.filter(contact => contact.id !== id));
//   };

//   const getFilterContacts = () => {
//     if (!filter) {
//       return contacts;
//     }
//     const normalizFilter = filter.toLowerCase();
//     const result = contacts.filter(({ name }) => {
//       return name.toLowerCase().includes(normalizFilter);
//     });
//     return result;
//   };

//   const handleFilter = ({ target }) => {
//     setFilter(target.value);
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={addContact} />
//       <h2>Contacts</h2>
//       <Filter onInputChange={handleFilter} filter={filter} />
//       <ContactList
//         contacts={getFilterContacts()}
//         deliteContact={deliteContact}
//       />
//     </div>
//   );
// };

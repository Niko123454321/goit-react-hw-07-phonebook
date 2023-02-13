// import { Component } from 'react';
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

  const deliteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const getFilterContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizFilter);
    });
    return result;
  };

  const handleFilter = ({ target }) => {
    setFilter(target.value);
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
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter onInputChange={handleFilter} filter={filter} />
      <ContactList
        contacts={getFilterContacts()}
        deliteContact={deliteContact}
      />
    </div>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     // console.log(contacts);
//     const parsContacts = JSON.parse(contacts);
//     // console.log(parsContacts);
//     if (parsContacts) {
//       this.setState({ contacts: parsContacts });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     // console.log('this: ', this.state.contacts);
//     // console.log('prevState: ', prevState.contacts);
//     if (this.state.contacts.length !== prevState.contacts.length) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   isСhecked(name) {
//     const { contacts } = this.state;
//     const normalizName = name.toLowerCase();
//     const result = contacts.find(({ name }) => {
//       return name.toLowerCase() === normalizName;
//     });
//     return Boolean(result);
//   }

//   addContact = ({ name, number }) => {
//     if (this.isСhecked(name)) {
//       return alert(`${name} is already in your contacts!`);
//     }

//     this.setState(prevState => {
//       const { contacts } = prevState;
//       const newContact = {
//         id: nanoid(),
//         name,
//         number,
//       };
//       return { contacts: [newContact, ...contacts], name: '', number: '' };
//     });
//   };

//   deliteContact = id => {
//     this.setState(({ contacts }) => {
//       const newContacts = contacts.filter(contact => contact.id !== id);
//       return { contacts: newContacts };
//     });
//   };

//   getFilterContacts() {
//     const { contacts, filter } = this.state;
//     if (!filter) {
//       return contacts;
//     }
//     const normalizFilter = filter.toLowerCase();
//     const result = contacts.filter(({ name }) => {
//       return name.toLowerCase().includes(normalizFilter);
//     });
//     return result;
//   }

//   handleFilter = ({ target }) => {
//     this.setState({ filter: target.value });
//   };

//   render() {
//     const { addContact, deliteContact } = this;
//     const { filter } = this.state;
//     const newContacts = this.getFilterContacts();
//     return (
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={addContact} />
//         <h2>Contacts</h2>
//         <Filter onInputChange={this.handleFilter} filter={filter} />
//         <ContactList contacts={newContacts} deliteContact={deliteContact} />
//       </div>
//     );
//   }
// }

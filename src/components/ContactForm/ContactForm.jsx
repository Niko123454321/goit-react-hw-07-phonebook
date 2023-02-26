import css from './contactForm.module.css';
import { useState } from 'react';
import initialState from './initialState';

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const newValue = value;
    setState(prevState => {
      return { ...prevState, [name]: newValue };
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { name, number } = state;

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.formElement}>
        <label>Name</label>
        <input
          onChange={handleChange}
          className={css.input}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.formElement}>
        <label>Number</label>
        <input
          onChange={handleChange}
          className={css.input}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

// import PropTypes from 'prop-types';
// import css from './contactForm.module.css';
// import { useState } from 'react';

// const ContactForm = ({ onSubmit }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     onSubmit({ name, number });
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <div className={css.formElement}>
//         <label>Name</label>
//         <input
//           onChange={evt => {
//             // console.log(evt.target.value);
//             setName(evt.target.value);
//           }}
//           className={css.input}
//           value={name}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </div>
//       <div className={css.formElement}>
//         <label>Number</label>
//         <input
//           onChange={evt => {
//             setNumber(evt.target.value);
//           }}
//           className={css.input}
//           value={number}
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </div>
//       <button type="submit" className={css.button}>
//         Add contact
//       </button>
//     </form>
//   );
// };

// export default ContactForm;

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

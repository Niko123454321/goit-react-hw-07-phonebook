import PropTypes from 'prop-types';
// import { Component } from 'react';
import css from './contactForm.module.css';
import { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  // console.log(onSubmit);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.formElement}>
        <label>Name</label>
        <input
          onChange={evt => {
            // console.log(evt.target.value);
            setName(evt.target.value);
          }}
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
          onChange={evt => {
            setNumber(evt.target.value);
          }}
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

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     this.props.onSubmit({ ...this.state });
//     this.setState({ name: '', number: '' });
//   };

//   onInputChenge = ({ target }) => {
//     const { name, value } = target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   render() {
//     const { handleSubmit, onInputChenge } = this;
//     const { name, number } = this.state;
// return (
//   <>
//     <form className={css.form} onSubmit={handleSubmit}>
//       <div className={css.formElement}>
//         <label>Name</label>
//         <input
//           onChange={onInputChenge}
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
//           onChange={onInputChenge}
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
//   </>
// );
//   }
// }

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

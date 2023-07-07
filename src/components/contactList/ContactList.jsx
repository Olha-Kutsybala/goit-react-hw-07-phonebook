import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { removeContact } from 'redux/contactSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <p className={css.contactInfo}>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.contactDeleteBtn}
            type="button"
            onClick={() => dispatch(removeContact(contact.id))}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
};
//pr
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;

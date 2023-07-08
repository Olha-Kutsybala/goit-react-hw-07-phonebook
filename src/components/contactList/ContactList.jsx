import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { removeContact } from 'redux/contactSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getListContacts = (() => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  })();

  return (
    <ul className={css.contactList}>
      {getListContacts.map(contact => (
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

// const ContactList = ({ contacts, onRemoveContact }) => {
//   return (
//     <ul className={css.contactList}>
//       {contacts.map(({ id, name, number }) => (
//         <li className={css.contactItem} key={id}>
//           <p className={css.contactInfo}>
//             {name}: {number}
//           </p>
//           <button
//             className={css.contactDeleteBtn}
//             type="button"
//             onClick={() => onRemoveContact(id)}
//           >
//             x
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

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

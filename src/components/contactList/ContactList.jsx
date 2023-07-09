import css from './ContactList.module.css';
import { useContacts } from 'hooks/useContacts';

const ContactList = () => {
  const { filteredContacts, removeContact } = useContacts();

  return (
    <>
      <ul className={css.contactList}>
        {filteredContacts.map(contact => (
          <li className={css.contactItem} key={contact.id}>
            <p className={css.contactInfo}>
              {contact.name}: {contact.number}
            </p>
            <button
              className={css.contactDeleteBtn}
              type="button"
              onClick={() => {
                removeContact(contact.id);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;

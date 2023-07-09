import { Toaster } from 'react-hot-toast';
import ContactList from './contactList';
import Filter from './filter';
import Form from './form';
import css from './App.module.css';
import { useContacts } from 'hooks/useContacts';

const App = () => {
  const { contacts } = useContacts();

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <Form />
      <h2 className={css.title}>Contacts</h2>
      {contacts.length >= 1 && <Filter />}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
      <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
    </div>
  );
};

export default App;

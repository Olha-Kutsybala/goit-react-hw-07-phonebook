import { Toaster } from 'react-hot-toast';
import ContactList from './contactList';
import Filter from './filter';
import Form from './form';
import css from './App.module.css';
import { useContacts } from 'hooks/useContacts';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';

const App = () => {
  const { contacts } = useContacts();
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <Form />
      {isLoading && !error && <b>Request in progress...</b>}
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

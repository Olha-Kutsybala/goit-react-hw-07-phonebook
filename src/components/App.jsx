import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import ContactList from './contactList';
import Filter from './filter';
import Form from './form';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, removeContact } from 'redux/contactSlice';
import { setFilter } from 'redux/filterSlice';

// const saveContact = localStorage.getItem('contacts');
// const parseSaveContact = JSON.parse(saveContact);

const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useState(
  //   parseSaveContact ?? [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ]
  // );

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = (name, number) => {
  //   const isExist = contacts.find(
  //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   );

  //   if (isExist) {
  //     toast.error(`${number} is already in contacts.`);
  //     return;
  //   }
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  // setContacts([contact, ...contacts]);
  //   setContacts(prevContacts => [...prevContacts, contact]);
  //   toast.success(`${name} successfully add.`);
  // };

  const getFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getListContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  // const removeContact = ContId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(prevContact => prevContact.id !== ContId)
  //   );
  // };

  return (
    <div className={css.container}>
      <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
      <h1 className={css.title}>Phonebook</h1>
      <Form onSubmit={addContact}></Form>
      <h2 className={css.title}>Contacts</h2>
      {contacts.length >= 1 && <Filter value={filter} onChange={getFilter} />}
      {contacts.length > 0 ? (
        <ContactList
          contacts={getListContacts()}
          onRemoveContact={removeContact}
        />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </div>
  );
};

export default App;

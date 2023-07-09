import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, getFilteredContact } from 'redux/selectors';
import * as contactsActions from 'redux/contactSlice';
import * as filterActions from 'redux/filterSlice';

export const useContacts = () => {
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilteredContact);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const addContact = newContact => {
    dispatch(contactsActions.addContact(newContact));
  };

  const removeContact = id => {
    dispatch(contactsActions.removeContact(id));
  };

  const setFilter = filter => {
    dispatch(filterActions.setFilter(filter));
  };

  return {
    filter,
    contacts,
    filteredContacts,
    addContact,
    setFilter,
    removeContact,
  };
};

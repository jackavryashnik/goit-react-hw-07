import './App.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';

function App() {
  const dispatch = useDispatch();
  const error = useSelector(state => state.contacts.error);
  const loading = useSelector(state => state.contacts.loading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox>Find contacts by name</SearchBox>
      {loading && !error && <p>Loading...</p>}
      {error && <p>Oops something went wrong. Try reloading</p>}
      <ContactList />
    </div>
  );
}

export default App;

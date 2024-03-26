import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectNameFilter } from '../../redux/filtersSlice';
import { selectItems } from '../../redux/contactsSlice';

const filterContacts = (contacts, nameFilter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(selectItems);
  const nameFilter = useSelector(selectNameFilter);

  const filteredContacts = filterContacts(contacts, nameFilter);

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;

import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import { useSelector } from 'react-redux';

export default function App() {
  const [filter, setFilter] = useState('');

  const contacts = useSelector(state => state.contacts);

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <div>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList contacts={getVisibleContacts()} />
      </div>
    </div>
  );
}

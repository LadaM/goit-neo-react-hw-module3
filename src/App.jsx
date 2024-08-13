import './App.css';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './components/ContactList/ContactList.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const addContact = (contact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { id: nanoid(), ...contact }]; //prevContacts.push({ id: nanoid(), ...contact });
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={'container'}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchContacts={handleSearch} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;

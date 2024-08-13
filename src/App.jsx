import './App.css';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './components/ContactList/ContactList.jsx';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

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

  return (
    <div className={'container'}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;

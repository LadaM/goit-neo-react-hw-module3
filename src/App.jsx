import './App.css';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './components/ContactList/ContactList.jsx';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', phoneNumber: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', phoneNumber: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', phoneNumber: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', phoneNumber: '227-91-26' },
];


function App() {
  const [contacts, setContacts] = useState(initialContacts);

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
    console.log(contacts);
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

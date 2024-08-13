import css from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contactsContainer}>
      {contacts.map(contact => (
        <Contact contact={contact} key={contact.id} deleteContact={deleteContact} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func,
};

export default ContactList;
import PropTypes from 'prop-types';

function Contact({ contact, deleteContact }) {
  return (<>
    <li>{contact.name}: {contact.phoneNumber}</li>
  </>);
}

Contact.propTypes = {
  contact: {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  },
  deleteContact: PropTypes.func,
};

export default Contact;
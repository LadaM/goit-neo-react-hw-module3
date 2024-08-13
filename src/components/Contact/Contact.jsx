import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { MdOutlineDeleteForever } from 'react-icons/md';
import classNames from 'classnames';

function Contact({ contact, deleteContact }) {
  return (<>
    <li className={css.contactCard}>
      <div className={css.itemsContainer}>
        <div className={css.item}><FaPhone /><p>{contact.name}</p></div>
        <div className={css.item}><IoPerson /><p>{contact.phoneNumber}</p></div>
      </div>
      <button className={classNames(css.item, css.button)} type="button" onClick={() => deleteContact(contact.id)}>
        <MdOutlineDeleteForever />
        Delete
      </button>
    </li>
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
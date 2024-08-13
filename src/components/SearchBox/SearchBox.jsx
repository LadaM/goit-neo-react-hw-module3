import PropTypes from 'prop-types';
import formStyles from '../Form.module.css';
import css from './SearchBox.module.css';

const SearchBox = ({ searchContacts }) => {
  return (
    <div className={css.container}>
      <label className={formStyles.label} htmlFor={'search'}>Search contacts by name</label>
      <input type="text" name="search"
             onChange={e => {searchContacts(e.target.value);}}
             className={formStyles.input}
      placeholder={"Enter search query..."}/>
    </div>
  );
};

SearchBox.propTypes = {
  searchContacts: PropTypes.func,
};

export default SearchBox;
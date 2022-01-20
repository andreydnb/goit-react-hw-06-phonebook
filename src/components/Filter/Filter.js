import shortid from 'shortid';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts.actions';
import styles from './filter.module.css'

const Filter = ({ value, onFilterInput }) => {
	const inputFilterId = shortid.generate();
  return (
    <label className={styles.label} htmlFor={inputFilterId}>
      Find contacts by name
      <input
        id={inputFilterId}
        className={styles.input}
        type="text"
        value={value}
        onChange={onFilterInput}
      />
    </label>
	);
};

const mstp = state => ({
	value: state.contacts.filter,
});

const mdtp = dispatch => ({
	onFilterInput: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mstp, mdtp)(Filter);

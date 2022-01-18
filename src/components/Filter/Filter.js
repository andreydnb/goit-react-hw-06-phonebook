   
import PropTypes from 'prop-types';
import styles from './filter.module.css';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { connect } from 'react-redux';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mstp = state => ({
	value: state.contacts.filter,
});

const mdtp = dispatch => ({
	onFilterInput: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mstp, mdtp)(Filter);
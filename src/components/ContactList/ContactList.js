import PropTypes from "prop-types";
import s from './contactList.module.css';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';


const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p className={s.info}>
            {name}: {number}
          </p>
          <button
            className={s.btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const getContacts = (allContacts, filter) => {
	console.log(allContacts);
	const normalizedFilter = filter.toLowerCase().trim();
	return allContacts.filter(
		contact =>
			contact.name.toLowerCase().trim().includes(normalizedFilter) ||
			contact.phone.toLowerCase().trim().includes(normalizedFilter),
	);
};

const mstp = ({ contacts: { items, filter } }) => ({
	contacts: getContacts(items, filter),
});

const mdtp = dispatch => ({
	onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mstp, mdtp)(ContactList);
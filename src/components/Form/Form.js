import shortid from 'shortid';
import { connect } from 'react-redux';
import { v4 as uuid4 } from 'uuid';
import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './contactForm.module.css'
import { addContact } from '../../redux/contacts/contacts.actions';

const initState = {
	name: '',
	phone: '',
};

class Form extends Component {
	state = initState;

	onInputChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });

	};

	onFormSubmit = e => {
		e.preventDefault();
		const { name, phone } = this.state;
		const { contacts } = this.props;
		const isContactExist = contacts.some(
			contact => contact.name === name || contact.phone === phone,
		);
		if (isContactExist) {
			alert(`${name} is already in contacts.`);
			return
		}
			if (name === '' || phone === '') {
			alert(`Add name and phone on new contact`);
			return
		}
		

		this.props.onFormSubmit({
			...this.state,
			id: uuid4(),
		});
		this.setState(initState);
	};

	render() {
		const inputNameId = shortid.generate();
		const inputPhoneId = shortid.generate();

		return (
			 <form className={styles.form} onSubmit={this.onFormSubmit}>
                <label className={styles.label}>Name
					<input
						className={styles.input}
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.onInputChange}
						id={inputNameId}
						placeholder="Andrii Hrytsai" />
                </label>
                <label className={styles.label}>Number
                    <input
                        className={styles.input}
                        type="text"
                        name="phone"
                        value={this.state.phone}
						onChange={this.onInputChange}
						id={inputPhoneId}
                        placeholder="099-99-99" />
                </label>
                <button className={styles.btn} type="submit">
                        Add contact
                    </button>
            </form>
		);
	}
}

Form.propTypes = {
	onFormSubmit: PropTypes.func.isRequired,
};

const mstp = state => ({
	contacts: state.contacts.items,
});

const mdtp = dispatch => ({
	onFormSubmit: contact => dispatch(addContact(contact)),
});

export default connect(mstp, mdtp)(Form);

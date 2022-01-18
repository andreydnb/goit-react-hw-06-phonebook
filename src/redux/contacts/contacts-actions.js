import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contact/add', (name, number) => ({
    payload: {
        id: shortid.generate(),
        name,
        number,
    },
}));

const deleteContact = createAction('contact/delete');
const clearFilter = createAction('contacts/clearFilter');
const changeFilter = createAction('contacts/changeFilter');

export { addContact, deleteContact, clearFilter, changeFilter };
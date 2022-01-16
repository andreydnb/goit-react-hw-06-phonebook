import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const InitialState = {
    contacts: [],
    filter: [],
    
}

const ContactInitialState = {
        name: '',
        number: '',
}


const ContactsReducer = (state => InitialState , {type, payload})
const ContactReducer = (state => ContactInitialState, {type, payload})
// @flow
//import {VisibilityFilters} from '../types/contacts'
import {combineReducers} from 'redux'
import contacts from './contacts'
import visibilityFilter from './visibilityFilter'

//const initialState = {
//  visibilityFilter: VisibilityFilters.SHOW_ALL,
//  contacts: [],
//  activeContactID: "",
//};

const contactsApp = combineReducers({
    contacts,
    visibilityFilter
})

export default contactsApp

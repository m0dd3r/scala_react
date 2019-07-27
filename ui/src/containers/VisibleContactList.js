import { connect } from 'react-redux'
import { toggleContact } from '../actions'
import ContactList from '../components/ContactList'
import { VisibilityFilters } from '../types/contacts'

const getVisibleContacts = (contacts, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return contacts;
        case VisibilityFilters.SHOW_CHAMPS:
            return contacts.filter(c => c.champ);
        case VisibilityFilters.SHOW_NOT_CHAMPS:
            return contacts.filter(c => !c.champ);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    contacts: getVisibleContacts(state.contacts, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleContact: id => dispatch(toggleContact(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactList)

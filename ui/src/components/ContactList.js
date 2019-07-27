import React from 'react'
import PropTypes from 'prop-types'
import Contact from './Contact'

const ContactList = ({ contacts, onContactClick }) => (
    <ul>
        {contacts.map((contact) => (
            <Contact key={contact.id} {...contact} onClick={() => onContactClick(contact.id)} />
        ))}
    </ul>
)

ContactList.propTypes = {
    Contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            champ: PropTypes.bool.isRequired,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onContactClick: PropTypes.func.isRequired
}

export default ContactList

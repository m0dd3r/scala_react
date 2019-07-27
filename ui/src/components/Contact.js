import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({onClick, champ, firstName, lastName}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: champ ? 'strong' : 'none'
        }}
        >
        { firstName } { lastName }
    </li>
)

Contact.propTypes = {
    onClick: PropTypes.func.isRequired,
    champ: PropTypes.bool.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
}

export default Contact 


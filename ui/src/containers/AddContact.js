import React from 'react'
import { connect } from 'react-redux'
import { addContact } from '../actions'

const AddContact = ({ dispatch }) => {
    let fname, lname, champ;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!fname.value.trim()) {
                        return
                    }
                    if (!lname.value.trim()) {
                        return
                    }
                    dispatch(addContact({
                        firstName: fname.value,
                        lastName: lname.value,
                        champ: champ.value
                    }))
                    fname.value = '';
                    lname.value = '';
                    champ.value = false;
                }}
            >
                <input ref={node => (fname = node)} />
                <input ref={node => (lname = node)} />
                <input type="checkbox" checked={champ} ref={node => (champ = node)} />
                <button type="submit">Add Contact</button>
            </form>
        </div>
    )
}

export default connect()(AddContact)

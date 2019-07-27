// @flow
import type {Action, Contact} from '../types/contacts';

function contacts(contacts: Contact[] = [], action: Action): Contact[] {
  switch (action.type) {
    case "ADD_CONTACT":
      return [
        ...contacts,
        action.contact,
      ];
    case "TOGGLE_CONTACT":
      return contacts.map((contact, index) => {
        if (index === action.index) {
          return Object.assign({}, contact, {
            champ: !contact.champ
          })
        }
        return contact;
      });
    default:
      return contacts;
  }
}

export default contacts

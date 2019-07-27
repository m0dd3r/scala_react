// @flow
import type {
  AddContactAction,
  Contact,
  SetVisibilityFilterAction,
  ToggleContactAction,
  VisibilityFilter
} from '../types/contacts';

/*
 * action creators
 */
export function addContact(contact: Contact): AddContactAction {
  return { type: "ADD_CONTACT", contact: contact }
}

export function toggleContact(index: number): ToggleContactAction {
  return { type: "TOGGLE_CONTACT", index: index }
}

export function setVisibilityFilter(filter: VisibilityFilter): SetVisibilityFilterAction{
  return { type: "SET_VISIBILITY_FILTER", filter: filter }
}

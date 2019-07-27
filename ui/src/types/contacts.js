// @flow

export type State = {
  +visibilityFilter: VisibilityFilter,
  +contacts: Array<Contact>,
  +activeContactID: string,
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_CHAMPS: 'SHOW_CHAMPS',
  SHOW_NOT_CHAMPS: 'SHOW_NOT_CHAMPS'
}

export type VisibilityFilter = $Keys<typeof VisibilityFilters>;

export type AddContactAction = { type: 'ADD_CONTACT', contact: Contact };
export type ToggleContactAction = { type: 'TOGGLE_CONTACT', index: number };
export type SetVisibilityFilterAction = { type: 'SET_VISIBILITY_FILTER', filter: VisibilityFilter }

export type Action =
| AddContactAction
| ToggleContactAction
| SetVisibilityFilterAction

export type Contact = {
  id: string,
  firstName: string,
  lastName: string,
  champ: boolean
}

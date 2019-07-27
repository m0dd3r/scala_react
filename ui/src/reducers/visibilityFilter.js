// @flow
import {VisibilityFilters} from '../types/contacts'
import type {Action, VisibilityFilter} from '../types/contacts'

function visibilityFilter(
    state: VisibilityFilter = VisibilityFilters.SHOW_ALL,
    action: Action): VisibilityFilter {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter

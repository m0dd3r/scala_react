import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../types/contacts'

const Footer = () => (
    <p>
        Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_NOT_CHAMPS}>Not Champs</FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_CHAMPS}>Champs</FilterLink>
    </p>
)

export default Footer

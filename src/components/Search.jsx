import React from 'react'

const Search = ({ searchCountry }) => {
    
    return (
        <input
            type="search"
            id="search"
            name="search"
            onChange={searchCountry}
            placeholder="Search for a country..." />
    )
}

export default Search
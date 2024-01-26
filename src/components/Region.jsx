import React from "react"

const Region = ({ regionFilter }) => {
  
    return (
        <select name="filter" id="filter" onChange={regionFilter}>
            <option value="All">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    )
  }

export default Region
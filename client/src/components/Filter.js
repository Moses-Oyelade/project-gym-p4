import React from 'react'

function Filter ({ search, onSearchChange }) {


  return (
    <div className="new-transaction">
        <h3>Filter By Package Plan</h3>
        <div id="filter-search">
            <input type="text"
            name="filter"
            onChange={e => onSearchChange(e.target.value)}
            value={search}
            placeholder="Search..."
            />
       
        </div>
    </div>
  )
}

export default Filter
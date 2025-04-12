import React from 'react'

function Filter({ filter, onCategoryChange }) {
  return (
    <div className="filter">
      <select name="filter" value={filter} onChange={onCategoryChange}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

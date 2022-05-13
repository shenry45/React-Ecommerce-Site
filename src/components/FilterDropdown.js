import React from 'react';

const FilterDropdown = (props) => {
    return (
            <form>
                <label htmlFor="filter">Filters</label>
                <select name='filter' onChange={props.filterChange}>
                    <option>No filter</option>
                    <option>Most to Least Protein</option>
                    <option>Least to Most Sodium</option>
                    <option>Least to Most Sugar</option>
                    <option>Milk-Free</option>
                </select>
            </form>
        )
}

export default FilterDropdown;
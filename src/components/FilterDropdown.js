import React from 'react';

import '../css/filterdropdown.css';

const FilterDropdown = (props) => {
    return (
            <form id="filter">
                <div>
                    <label htmlFor="filter">Filters</label>
                    <select name='filter' onChange={props.filterChange}>
                        <option>No filter</option>
                        <option>Most to Least Protein</option>
                        <option>Least to Most Sodium</option>
                        <option>Least to Most Sugar</option>
                        <option>Milk-Free</option>
                    </select>
                </div>
                <ul>
                    <li>
                        <input type="checkbox" name="milk-free" onChange={props.checkboxFilterChange}></input>
                        <label htmlFor="milk-free">Milf Free</label>
                    </li>
                    {/* <li>
                        <input type="checkbox" name="milk-free" onChange={props.checkboxFilterChange}></input>
                        <label htmlFor="milk-free">Milf Free</label>
                    </li>
                    <li>
                        <input type="checkbox" name="milk-free" onChange={props.checkboxFilterChange}></input>
                        <label htmlFor="milk-free">Milf Free</label>
                    </li> */}
                    
                </ul>
            </form>
        )
}

export default FilterDropdown;
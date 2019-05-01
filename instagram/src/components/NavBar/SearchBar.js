import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
    return (
        <div>
            <input
                placeholder ="Search" 
                value={props.data}
                onChange={props.handleChanges}
            />

        </div>
    )
}

export default SearchBar;

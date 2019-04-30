import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
    return (
        <div>
            <input
                placeholder ="Search" 
                value={props.todo}
            />

        </div>
    )
}

export default SearchBar;

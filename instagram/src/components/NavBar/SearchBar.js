import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={props.handleChanges}
        onKeyDown={props.searchPosts}
      />
    </div>
  );
};

export default SearchBar;

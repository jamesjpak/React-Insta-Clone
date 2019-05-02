import React from "react";
import './NavBar.css';
import SearchBar from './SearchBar';
import InstagramLogo from './InstagramLogo';
import Buttons from './Buttons';


function NavBar(props) {
  return (
    <div className='nav-bar-style'>
        <InstagramLogo data={props.data} />

      <SearchBar data={props.data} handleChanges={props.handleChanges} searchPosts={props.searchPosts} />

    <Buttons data={props.data} />
    </div>
  );
}

export default NavBar;
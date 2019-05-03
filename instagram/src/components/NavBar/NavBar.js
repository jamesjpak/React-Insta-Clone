import React from "react";
import "./NavBar.css";
import SearchBar from "./SearchBar";
import InstagramLogo from "./InstagramLogo";
import Buttons from "./Buttons";
import styled from "styled-components";

const NavBarWrapper = styled.div`
  background-color: #ffff;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 58px;
  border-bottom: 1px solid grey;
`;

function NavBar(props) {
  return (
    <NavBarWrapper>
      <InstagramLogo data={props.data} />

      <SearchBar
        data={props.data}
        handleChanges={props.handleChanges}
        searchPosts={props.searchPosts}
      />

      <Buttons data={props.data} />
    </NavBarWrapper>
  );
}

export default NavBar;

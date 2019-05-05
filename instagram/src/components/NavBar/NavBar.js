import React from "react";
import "./NavBar.css";
import SearchBar from "./SearchBar";
import InstagramLogo from "./InstagramLogo";
import Buttons from "./Buttons";
import styled from "styled-components";

const Header = styled.header`
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

const LogoHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 30px;
  padding-left: 20px;
`;

function NavBar(props) {
  return (
    <Header>
      <LogoHeader>
      <InstagramLogo data={props.data} />
      </LogoHeader>

      <SearchBar
        data={props.data}
        handleChanges={props.handleChanges}
        searchPosts={props.searchPosts}
      />

      <Buttons data={props.data} />
    </Header>
  );
}

export default NavBar;

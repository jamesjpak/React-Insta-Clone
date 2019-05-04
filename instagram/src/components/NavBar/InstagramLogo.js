import React from "react";
import "./InstagramLogo.css";
import InstaLogo from "../../img/instagram.png";
import styled from "styled-components";

const CamIconWrapper = styled.div`
  padding-right: 10px;
`;


function InstagramLogo(props) {
  return (
    <>
      <CamIconWrapper>
      <i className="fab fa-instagram" />
      </CamIconWrapper>

      <img className="word-logo" src={InstaLogo} alt="top-logo" />
    </>
  );
}

export default InstagramLogo;

import React from "react";
import logoMinions from "../assets/minionsPhone.png";
import jsLogo from "../assets/logo-javascript.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const LandingPage = () => {
  return (
    <StyledLandingPage>
      <div className="logo-container">

      <img src={logoMinions} alt="logo" />
      <img src={jsLogo} alt="logo-js" />
      </div>
      <div className="text-container">

      <p>Learn JavaScript with Minions</p>
      <Link to="/dashboard"> Start </Link>
      </div>
    </StyledLandingPage>
  );
};

const StyledLandingPage = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
font-weight: bold;

.logo-container{

  width: 15rem;

  img{
    width: 100%;
  }
}

.text-container{

  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  a{
    cursor: pointer;
    color: #FFFFFF;
    text-decoration: none;
  }
}


`;

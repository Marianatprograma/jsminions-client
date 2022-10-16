import styled from "styled-components";
import minionsContact from "../assets/minionsContact.png";

import React from "react";

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="container-img">
          <img src={minionsContact} alt="" />
        </div>

        <div className="container-contact">  
            <p> About us </p>
            <p> Our Projects </p>  
            <hr />
            <p> All rights reserved 2022 </p>
        </div>
      </div>
    </StyledFooter>
  );
};
const StyledFooter = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  background: var(--Black);
  justify-content: center;
  align-items: start;
  padding: 2rem;
  margin-top: 5rem;


  .container{
    position: relative;
    width: 100%;
    
    display: flex;
    background: var(--Coffee);
    max-width: 30rem;
    border-radius: 1rem;
    color: white;
    padding: 2rem;
  }

  .container-contact{
    display: flex;
    flex-direction: column;
  }

  .container-img {
    width: 8rem ;

    position: absolute;
    top: -5rem;
    right: -1rem;
    
    overflow: hidden;

    img {
      width: 100%;
    }
  }
`;

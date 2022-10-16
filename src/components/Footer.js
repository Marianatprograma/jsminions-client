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
          <input type="text" name="" id="" />
          <button> Contact </button>

          <div className="container-footer">
            <p> About us </p>
            <p> Our Projects </p>
          </div>

          <hr />

          <p> All rights reserved 2022 </p>
        </div>
      </div>
    </StyledFooter>
  );
};
const StyledFooter = styled.div`

  display: flex;
  background: var(--Black);
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  .container{
    position: relative;
    display: flex;
    background: var(--Coffee);
    max-width: 30rem;
    width: 100%;
    border-radius: 1rem;
    color: white;
    padding: 2rem;
  }

  .container-img {
    position: absolute;
    top: -6rem;
    right: -5rem;
    max-width: 10rem;
    padding: 1rem;
   

    img {
      width: 100%;
    }
  }
`;

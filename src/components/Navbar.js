import React from "react";
import styled from "styled-components";
import {VscTriangleDown} from 'react-icons/vsc'
import minionSurprise from '../assets/minion1.png'

export const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="title">
        <a href="#types">Types</a>
        <VscTriangleDown/>
        <div className="subtitle">
          <a href="#string">string</a>
          <a href="#number">number</a>
          <a href="#boolean">boolean</a>
          <a href="#undefined">undefined</a>
          <a href="#null">null</a>
        </div>
      </div>
      <div className="title">
        <a href="#">Operators</a>
        <VscTriangleDown/>
        <div className="subtitle">
          <a href="#types"> Type </a>
          <a href="#types"> Aritmetic </a>
          <a href="#types"> Assignment </a>
          <a href="#types"> Comparison </a>
          <a href="#types"> Logical </a>
          <a href="#types"> Conditional </a>
        </div>
      </div>
      <div className="title">
        <a href="#f">Functions</a>
        <VscTriangleDown/>
        <div className="subtitle">
          <a href="#types"> Math </a>
          <a href="#types"> If Else </a>
          <a href="#types"> Loop For </a>
          <a href="#types"> Loop While </a>
          <a href="#types"> Map </a>
          <a href="#types"> Date </a>
        </div>


      </div>
      <div className="title">
        <a href="#o">Objects</a>
        <VscTriangleDown/>
        <div className="subtitle">
          <a href="#types"> Classes </a>
          <a href="#types"> Properties and Methods </a>
          <a href="#types"> Constructor </a>
          
        </div>


      </div>
      <div className="title">
        <a href="#e">Events</a>
        <VscTriangleDown/>
        <div className="subtitle">
          <a href="#types"> onclick </a>
          <a href="#types"> onchange</a>
          <a href="#types"> onload </a>
          <a href="#types"> onkeydown </a>
          <a href="#types"> onmouseover and out </a>

          
        </div>
      </div>

      <div className="minion">
      <img src={minionSurprise} alt="" />

      </div>

    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  background: var(--PrimaryColor);

  display: flex;
  justify-content: space-around;
  border-radius: 1rem;
  padding: 1rem;



  .title {  
    display: flex;
    position: relative;
      
    > a {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: black;
        font-weight: bold;
      }


      :hover .subtitle{
        display: flex;
    }
}

.subtitle {  

    position: absolute;
    top: 1.5rem;
    left: -1rem;
    
    display: none;
    flex-direction: column;
    background: white;
    border: 1px solid black;
    overflow: hidden;

    border-radius: 1rem ;
    padding: .3rem;
      
    > a {
        padding: .2rem;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: black;
        border-bottom: 1px solid black;
        

      }
  }
  .minion{
    
    width: 7rem;

    img{
        width: 100%;
    }
  }


`;

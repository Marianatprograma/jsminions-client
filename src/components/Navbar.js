import {Link} from "react-router-dom";
import styled from "styled-components";
import {VscTriangleDown} from 'react-icons/vsc'
import minionSurprise from '../assets/minion1.png'

export const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="title">
        <p> Types </p>
        <VscTriangleDown/>
        <div className="subtitle">
          <Link to={'/types'}>string</Link>
          <Link to={'/types'}>number</Link>
          <Link to={'/types'}>boolean</Link>
          <Link to={'/types'}>undefined</Link>
          <Link to={'/types'}>null</Link>
        </div>
      </div>
      <div className="title">
        <p> Operators </p>

        <VscTriangleDown/>

        <div className="subtitle">
          <Link to={'/'}> Type </Link>
          <Link to={'/'}> Aritmetic </Link>
          <Link to={'/'}> Assignment </Link>
          <Link to={'/'}> Comparison </Link>
          <Link to={'/'}> Logical </Link>
          <Link to={'/'}> Conditional </Link>
        </div>
      </div>
      <div className="title">
        <p> Functions   </p>



        <VscTriangleDown/>
        <div className="subtitle">
          <Link to={'/'}> Math </Link>
          <Link to={'/'}> If Else </Link>
          <Link to={'/'}> Loop For </Link>
          <Link to={'/'}> Loop While </Link>
          <Link to={'/'}> Map </Link>
          <Link to={'/'}> Date </Link>
        </div>

      </div>
      <div className="title">
        <p> Objects </p>

        <VscTriangleDown/>
        <div className="subtitle">
          <Link to={'/'}> Classes </Link>
          <Link to={'/'}> Properties and Methods </Link>
          <Link to={'/'}> Constructor </Link>
          
        </div>


      </div>
      <div className="title">
        <p> Events </p>

        <VscTriangleDown/>
        <div className="subtitle">
          <Link to={'/'}> onclick </Link>
          <Link to={'/'}> onchange</Link>
          <Link to={'/'}> onload </Link>
          <Link to={'/'}> onkeydown </Link>
          <Link to={'/'}> onmouseover and out </Link>

          
        </div>
      </div>

      <div className="minion">

        <Link to={'/dashboard'}> <img src={minionSurprise} alt="MinionsCuriosos" /> </Link>
         

      </div>

    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  background: var(--PrimaryColor);
  /* width: 100%; */
  margin: 1rem;
  max-width: 50rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  border-radius: 1rem;
  padding: 1rem;
  gap: 1.2rem;
  flex-wrap: wrap;

  .title {  
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
        
    > p {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: black;
        font-weight: bold;
        padding: .1rem;
        cursor: pointer;
      }


      :hover .subtitle{
        display: flex;
        z-index: 1000;
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

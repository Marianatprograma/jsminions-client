import styled from "styled-components";

import Kevin from "../../assets/kevin.webp";
import Dave from "../../assets/Dave.webp";

import {RiLightbulbFlashLine,RiLightbulbFlashFill} from "react-icons/ri";



import { useEffect, useState } from "react";

export const Boolean = () => {
    const [taller, setTaller] = useState(false);

    useEffect(() => {
      
        console.log(taller);
      
    }, [taller])
    



  return (
    <StyledBoolean>
      <div className="header">
        <h3> Boolean </h3>

        <p> Compare who is taller between Kevin and Dave </p>
      </div>

      <div className="minions">
        <div id="minion1">
          <img src={Kevin} alt="Kevin-minion" onClick={() => {setTaller(true)}}/>
        </div>
        <div className="lights">            
            {!taller ?  <i> <RiLightbulbFlashLine/></i> : <i className="on"> <RiLightbulbFlashFill/> </i> }
        </div>
        <div id="minion2">
          <img src={Dave} alt="Dave-minion" onClick={() => {setTaller(false)}} />
        </div>
      </div>
        


    </StyledBoolean>
  );
};

const StyledBoolean = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .minions {
    display: flex;
    align-items: baseline;
    width: 10rem;
    gap: .5rem;
  }
  #minion1 {
   
    width: 5rem;
    img {
      width: 100%;
    }

    :hover{
        cursor: pointer;
    }
  }
  #minion2 {
    width: 5rem;
    img {
      width: 100%;
    }
    :hover{
        cursor: pointer;
    }
  }

  .lights{

    .on{
        color: var(--PrimaryColor);

    }
    i{  
        font-size: 2rem;
    }
  }

`;

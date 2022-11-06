import {useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Exercise1 } from "./stringExercises/Exercise1";
import { Exercise2 } from "./stringExercises/Exercise2";
import { Exercise3 } from "./stringExercises/Exercise3";
import { Exercise4 } from "./stringExercises/Exercise4";

export const Strings = () => {

  const [contentHeight, setContentHeight] = useState('');
  const [show, setShow] = useState(true);

  //valor del height es variable segun el zoom
 
  const containerRef = useRef()

  useLayoutEffect(() => {  
    
    // console.log(containerRef.current.getBoundingClientRect().height)

    let size = containerRef.current.getBoundingClientRect().height;
    setContentHeight(size);   
   
  }, [])
  
  
       
  const showHandler = () => {      
    
    if (show) {
      document.querySelector(".container").style.height = "0";
      
    }else{      
      document.querySelector(".container").style.height = `${contentHeight}px`;
    }

    setShow(!show);      

  };

  return (
    <StyledStrings>
      <div onClick={showHandler} className="titulo">
        <h3>Strings </h3>
        
      </div>
      <p>
        A string is a chain of <strong>characters </strong>
        you can do many things with them
      </p>

      <div ref={containerRef} className="container">
        
        <Exercise1 />
        <Exercise2 />
        <Exercise3 />
        <Exercise4 />
      </div>
    </StyledStrings>
  );
};

const StyledStrings = styled.div`
  .container {
    overflow: hidden;
    transition: all 1s ease-in-out;
  }

  .titulo {
    cursor: pointer;
  }

  .content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }

  
`;

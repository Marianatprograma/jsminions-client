
import styled from 'styled-components';


import React, { useRef, useState } from 'react'
import { Square } from './components/Square';

export const TicTacToe = () => {

  const [token, setToken] = useState("")

  const tokenXRef = useRef();
  const tokenORef = useRef();


  const onPointerDownHandler = () =>{

    console.log( tokenORef.current , " yo el down")
    console.log( tokenXRef.current , " yo el down")
  }

  const onPointerUpHandler = () =>{

    console.log("Soy el up")
  }

  const onPointerMoveHandler = () =>{
    console.log('que quieres?');
  }


  

  return (
    <StyledTicTacToe>

        <h3> Tic Tac Toe </h3>

        <div className="board">

          <Square element={"O"}/>
          <Square element={"X"}/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </div>

        <div className="tokenContainer">
          <p ref={tokenXRef}
           onPointerDown={onPointerDownHandler} 
           onPointerUp={onPointerUpHandler} 
           onPointerMove={onPointerMoveHandler} 
           className={'grabbable'}>X</p>
          <p ref={tokenORef} onPointerDown={onPointerDownHandler} onPointerUp={onPointerUpHandler} className={'grabbable'}>O</p>
        </div>

    </StyledTicTacToe>
  )
}




const StyledTicTacToe = styled.div`

display: flex;
flex-direction: column;
gap: 2rem;
justify-content: center;
align-items: center;

.board{

  display: grid;
  grid-template-columns: repeat(3, 1fr);


  >:nth-child(1),
  >:nth-child(2),
  >:nth-child(4),
  >:nth-child(5){
    border-bottom: 1px solid black;
    border-right: 1px solid black;
  }
 
  >:nth-child(3),
  >:nth-child(6){
    border-bottom: 1px solid black;
  }
  >:nth-child(7),
  >:nth-child(8){
    border-right: 1px solid black;
  } 

  /* background-color: yellow; */
}

.tokenContainer{
  
  display: flex;
  gap: 1rem;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
}

.grabbable {
    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
}

 /* (Optional) Apply a "closed-hand" cursor during drag operation. */
.grabbable:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
}

  
`;
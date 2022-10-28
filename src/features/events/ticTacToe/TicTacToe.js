import styled from "styled-components";

import React, { useRef, useState } from "react";
import { Square } from "./components/Square";

export const TicTacToe = () => {
  const [selectedSquare, setSelectedSquare] = useState("");
  const [isMoving, setIsMoving] = useState(false);

  const tokenXRef = useRef();
  const tokenORef = useRef();
  const movingTokenRef = useRef();

  let squareArray = Array.from(document.querySelectorAll('.square'));

  const arrayOverlaps = (token, list) => {
    const rect1 = token.getBoundingClientRect();

    let collisionList = list.map((square) => {
      const rect2 = square.getBoundingClientRect();
      const isInHoriztonalBounds = rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x;
      const isInVerticalBounds = rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y;
      const isOverlapping = isInHoriztonalBounds && isInVerticalBounds;
      let id = square.getAttribute('id');
      return {
        id: id,
        isOverlapping: isOverlapping
      };
    });
    return collisionList;
  };

  const positionHandler = (e) => {
    let elem =  movingTokenRef.current;    

    let fingerX = 10;
    let fingerY = 60;

    let posX = e.clientX - fingerX ;
    let posY = e.clientY - fingerY;
    elem.style.top = `${posY}px`;
    elem.style.left = `${posX}px`;

    
  }


  const onPointerDownHandler = (e) => {
    setIsMoving(true)
    positionHandler(e);

    movingTokenRef.current.innerHTML = e.target.innerHTML;

    console.log(e.target.innerHTML);

    console.log('casilla 1', squareArray[1].innerHTML)   

  };

  const onPointerUpHandler = (e) => {    
    setIsMoving(false);

    document.getElementById(selectedSquare).innerHTML = movingTokenRef.current.innerHTML;
  };
  

  const onPointerMoveHandler = (e) => {

   if(isMoving){

     positionHandler(e);

     let collisionArray = arrayOverlaps(movingTokenRef.current, squareArray)

     collisionArray.map(( who) =>{

      if(who.isOverlapping){

        setSelectedSquare(who.id);

      }
        

     }) 


    }
    
    
    

  //   console.log(e.target.innerHTML, e.clientX, e.clientY)

  //  console.log( e.target.getBoundingClientRect().x);
  //  console.log(e.target.style.top);
    // console.log("que quieres?");
  };

  return (
    <StyledTicTacToe onPointerMove={onPointerMoveHandler} show={isMoving} onPointerUp={onPointerUpHandler}>
      <h3> Tic Tac Toe </h3>

      <div className="board"  >

        <Square id={"s1"}/>
        <Square id={"s2"}/>
        <Square id={"s3"}/>
        <Square id={"s4"}/>
        <Square id={"s5"}/>
        <Square id={"s6"}/>
        <Square id={"s7"}/>
        <Square id={"s8"}/>
        <Square id={"s9"}/>
      </div>

      <div className="tokenContainer">
        
        <p
          ref={movingTokenRef}
          onPointerDown={onPointerDownHandler}
          
          // onPointerMove={onPointerMoveHandler}
          className={"grabbable"}
        >
          ?
        </p>
        <p
          ref={tokenXRef}
          onPointerDown={onPointerDownHandler}
          
          className={"grabbable"}
        >
          X
        </p>
        <p
          ref={tokenORef}
          onPointerDown={onPointerDownHandler}
          
          className={"grabbable"}
        >
          O
        </p>
      </div>
    </StyledTicTacToe>
  );
};

const StyledTicTacToe = styled.div`  

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: none;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: pink;

  .board {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    > :nth-child(1),
    > :nth-child(2),
    > :nth-child(4),
    > :nth-child(5) {
      border-bottom: 1px solid black;
      border-right: 1px solid black;
    }

    > :nth-child(3),
    > :nth-child(6) {
      border-bottom: 1px solid black;
    }
    > :nth-child(7),
    > :nth-child(8) {
      border-right: 1px solid black;
    }

    /* background-color: yellow; */
  }

 
  .tokenContainer {
    display: flex;
    gap: 1rem;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;

    p{      
      color: white;
  
      :first-child{
        display: ${props => props.show ? "block" : "none"};
        position: absolute;
      top: 0;
      left: 0;
      }
    }

  
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

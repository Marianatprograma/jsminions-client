import styled from "styled-components";

import React, { useState } from "react";

export const Exercise1 = () => {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState("")

  const getNumber = ({target: {value}}) => {
    setNumber(value);
    console.log(value);
  };
  const roundHandler = () => {

    const entero = Math.round(number);
    setResult(entero);
  };
  const ceilHandler = () => {

    const entero = Math.ceil(number);
    setResult(entero);
  };
  const floorHandler = () => {

    const entero = Math.floor(number);
    setResult(entero);
  };
  const truncHandler = () => {

    const entero = Math.trunc(number);
    setResult(entero);
  };
  const signHandler = () => {

    const entero = Math.sign(number);
    setResult(entero);
  };
  const absHandler = () => {

    const entero = Math.abs(number);
    setResult(entero);
  };
  const sqrtHandler = () => {

    const entero = Math.sqrt(number);
    setResult(entero);
  };

  return (
    <StyledExercise1>
      <h4> Exercise 1 </h4>

      <p> Insert a decimal number </p>

      <input type="number" onChange={getNumber} />
      <div className="btn-container">
      <button onClick={roundHandler}> Round </button>
      <button onClick={ceilHandler}> Ceil </button>
      <button onClick={floorHandler}> Floor </button>
      <button onClick={truncHandler}> Trunc </button>
      <button onClick={signHandler}> Sign </button>
      <button onClick={absHandler}> Abs </button>
      <button onClick={sqrtHandler}> Sqrt </button>

      </div>

      <div className="code" contentEditable={true}>        
        <p>Math.round(n)</p>
        <p>Math.ceil(n)</p>
        <p>Math.floor(n)</p>
        <p>Math.trunc(n)</p>
        <p>Math.sign(n)</p>
        <p>Math.abs(n)</p>
        <p>Math.sqrt(n)</p>
      </div>

      <h4> Result</h4>
      <p> {result}</p> 
    </StyledExercise1>
  );
};

const StyledExercise1 = styled.div`
display: flex;
flex-direction: column;
gap: .5rem;

.btn-container{
  display: flex;
  gap: 1rem;
  button{
    padding: 0 .2rem;
  }
}

.code{
  background: black;
  color: skyblue;
  padding: 1rem;
}


`;

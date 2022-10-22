import styled from "styled-components";

import {useState } from "react";

export const Exercise1 = () => {


  const [values, setValues] = useState(
    {
      number1: 0,
      number2: 0,
    }
  )
  const [result, setResult] = useState('');

 
  const getNumbers = ({ target: { id, value } }) => {    

    setValues(current => ({...current,[id] : parseInt(value)}));

  };

  const Add = () => {

    let resultado = values.number1 + values.number2;
    setResult(resultado);
  };

  const Substract = () => {
    let resultado = values.number1 - values.number2;
    setResult(resultado);
  }
  const Multiply = () => {
    let resultado = values.number1 * values.number2;
    setResult(resultado);
  }
  const Divide = () => {
    let resultado = values.number1 / values.number2;
    setResult(resultado);
  }



  return (
    <StyledExercise1>
      <h4>Exercise 1</h4>

      <div className="numbers">
        <input
          type="number"
          placeholder="write a number"
          id="number1"
          onChange={getNumbers}
        />
        <input
          type="number"
          placeholder="write another number"
          id="number2"
          onChange={getNumbers}
        />
      </div>

      <div className="operations">
        <input type="button" value="Add" onClick={Add} />
        <input type="button" value="Subtract" onClick={Substract} />
        <input type="button" value="Multiply" onClick={Multiply} />
        <input type="button" value="Divide" onClick={Divide} />
      </div>

      <div className="result">
        <h4> Result </h4>
        <p> {result} </p>
      </div>
    </StyledExercise1>
  );
};

const StyledExercise1 = styled.div`
  display: flex;
  flex-direction: column;

  .operations {
    display: flex;

    gap: 2rem;
    padding: 1rem;
  }
`;

import styled from "styled-components";

import { useState } from "react";

export const Exercise2 = () => {
  const [result, setResult] = useState();

  const upperCaseHandler = (e) => {
    let contenido = e.target.value;

    console.log(contenido.toUpperCase());

    setResult(contenido.toUpperCase());
  };

  return (
    <StyledExercise2>
      <h4> Exercise 2</h4>

      <h4> Method toUpperCase </h4>

      <p> Using toUpperCase() you can change any text to upper case </p>

      <div className="content">
        <input
          type="text"
          id="exercise2"
          placeholder="Write something"
          onChange={upperCaseHandler}
        />
        <div className="result">
          <h4>Result</h4>
          <p>{result}</p>
        </div>
      </div>
    </StyledExercise2>
  );
};
const StyledExercise2 = styled.div`
  
  background: hsla(0, 0%, 100%, 0.2);

  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem;
`;

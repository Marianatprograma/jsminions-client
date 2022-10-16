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
      <li> Exercise 2</li>

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
          <p>{result}</p>
        </div>
      </div>
    </StyledExercise2>
  );
};
const StyledExercise2 = styled.div`
  border: 1px solid white;
  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem;
`;

import styled from "styled-components";

import { useState } from "react";

export const Exercise3 = () => {
  const [result, setResult] = useState({resultado1: '', resultado2: ''});

 
  const replaceHandler = (e) => {
    let inicial = e.target.value;

    let resultRegex = inicial.replace(/a/g, "x");

    let resultReplace = inicial.replace("a", "x");
    setResult({
      ...result,
        resultado1: resultRegex,
        resultado2: resultReplace,
      
    });
  };


  return (
    <StyledExercise3>
      <h4> Exercise 3</h4>

      <h4> Method replace() </h4>

      <p> Using replace() you can replace one string by another </p>

      <div className="content">
        <input
          type="text"
          id="exercise3"
          placeholder="Write something"
          onChange={replaceHandler}
        />
        <div className="result">
          <p> Replace all matches </p>
          <textarea name="" id="" cols="30" rows="1">
            input.value.replace(/a/g, "x")
          </textarea>
          <p>{result.resultado1}</p>
        </div>
        <div className="result">
          <p> Replace first found </p>

          <textarea name="" id="" cols="30" rows="1">
            input.value.replace("a", "x")
          </textarea>
          <p>{result.resultado2}</p>
        </div>
      </div>
    </StyledExercise3>
  );
};
const StyledExercise3 = styled.div`
  background: hsla(0, 0%, 100%, 0.2);
  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem;
`;

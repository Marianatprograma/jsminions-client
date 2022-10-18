import styled from "styled-components";

import { useState } from "react";

export const Exercise4 = () => {
  const [result, setResult] = useState(false);
  const [textValue, setTextValue] = useState('')


  const getString = () => {
    let valueInput = document.getElementById("inicial").value;
    setTextValue(valueInput);
  };

  const checkStrings = () => {
    let valueInclude = document.getElementById("final").value;
    let result = textValue.includes(valueInclude);
    setResult(result);   
  };  
  
  
  return (
    <StyledExercise4>
      <h4> Exercise 4</h4>
      <h4> Method includes()</h4>

      <p> Check if one string is included inside another string</p>
      <p> Return false o true</p>

      <div className="content">
        <input
          type="text"
          name="inicial"
          id="inicial"
          placeholder="Write something"
          onChange={getString}
        />
      </div>

      <div className="includes">
        <input
          type="text"
          name="final"
          id="final"
          placeholder="Is included?"
          onChange={checkStrings}
        />
      </div>
      <div className="result">
        <h4>Result </h4>
        <p>  {result? 'true' : 'false' } </p>
      </div>

      <textarea name="" id="" cols="30" rows="1">
          string1.include("string2")
        </textarea>
    </StyledExercise4>
  );
};
const StyledExercise4 = styled.div`
  background: hsla(0, 0%, 100%, 0.2);
  border-radius: 1rem;
  padding: 1rem;

  margin: 1rem;

  .includes {
    display: flex;
    justify-content: center;
  }
`;

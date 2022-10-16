import styled from "styled-components";

import {useState} from "react";

export const Exercise1 = () => {



    const [result, setResult] = useState();

    const counter = () => {
        let insertedData = document.getElementById("exercise1").value;
        console.log(insertedData);
        console.log(insertedData.length);
    
        setResult(insertedData.length );
      };



  return (
    <StyledExercise1>
   
        <li> Exercise 1</li>

        <div className="content">
          <input
            type="text"
            id="exercise1"
            placeholder="Write something"
            onChange={counter}
          />
          <div className="result">
            <p>{result}</p>
          </div>
        </div>
        <textarea name="" id="" cols="30" rows="1">
          input.value.lenght
        </textarea>
     
    </StyledExercise1>
  );
};
const StyledExercise1 = styled.div`


border: 1px solid white;
padding: 1rem;
border-radius: 1rem;
margin: 1rem;




`;

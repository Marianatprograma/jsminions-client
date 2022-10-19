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


      
   
        <h4 title="Exercise 1"> Exercise 1 </h4>

        <div className="content">
          <input
            type="text"
            id="exercise1"
            placeholder="Write something"
            onChange={counter}
          />
          <div className="result">
            <h5> Result </h5>
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



background: hsla(0, 0%, 100%, 0.2);
border-radius: 1rem;
padding: 1rem;

margin: 1rem;




`;

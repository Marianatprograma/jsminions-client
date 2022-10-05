import React, { useState } from "react";
import styled from "styled-components";

export const Strings = () => {
  const [result, setResult] = useState("");

  const counter = () => {
    let insertedData = document.getElementById("exercise1").value;
    console.log(insertedData);
    console.log(insertedData.length);

    setResult(insertedData.length);
  };

  return (
    <StyledStrings>
      <h3>Strings</h3>
      <p>
       
        A string is a chain of <strong>characters </strong>
        you can do many things with them
      </p>

      <div className="exercise1">
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
        <textarea name="" id="" cols="30" rows="5">
          input.value.lenght
        </textarea>
      </div>

      <div className="exercise2">

        <li> Exercise 2</li>

      </div>



    </StyledStrings>
  );
};

const StyledStrings = styled.div`
  .content {
    padding: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  textarea {
    background: black;
    color: skyblue;
    padding: 1rem;
  }
`;

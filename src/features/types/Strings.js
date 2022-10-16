import React, { useState } from "react";
import styled from "styled-components";

export const Strings = () => {
  const [result, setResult] = useState({
    exercise1: "",
    exercise2: "",
    exercise3: {
      resultado1: "",
      resultado2: "",
    },
  });


  
  const counter = () => {
    let insertedData = document.getElementById("exercise1").value;
    console.log(insertedData);
    console.log(insertedData.length);

    setResult({ ...result, exercise1: insertedData.length });
  };

  const upperCaseHandler = (e) => {
    let contenido = e.target.value;

    console.log(contenido.toUpperCase());

    setResult({ ...result, exercise2: contenido.toUpperCase() });
  };

  const replaceHandler = (e) => {
    let inicial = e.target.value;

    let resultRegex = inicial.replace(/a/g, "x");

    let resultReplace = inicial.replace("a", "x");
    setResult({
      ...result,
      exercise3: {
        resultado1: resultRegex,
        resultado2: resultReplace,
      },
    });
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
            <p>{result.exercise1}</p>
          </div>
        </div>
        <textarea name="" id="" cols="30" rows="1">
          input.value.lenght
        </textarea>
      </div>

      <div className="exercise2">
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
            <p>{result.exercise2}</p>
          </div>
        </div>

        <div className="exercise2">
          <li> Exercise 2</li>

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
              <p>{result.exercise3.resultado1}</p>
            </div>
            <div className="result">
            <p> Replace first found </p>

              <textarea name="" id="" cols="30" rows="1">
                input.value.replace("a", "x")
              </textarea>
              <p>{result.exercise3.resultado2}</p>
            </div>
          </div>
        </div>
      </div>
    </StyledStrings>
  );
};

const StyledStrings = styled.div`
  .content {
    padding: 1rem;
    display: grid;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  textarea {
    background: black;
    color: skyblue;
    padding: 1rem;
  }

  h3 {
    color: white;
  }
`;

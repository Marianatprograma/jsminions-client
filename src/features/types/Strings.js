import styled from "styled-components";
import { Exercise1 } from "./stringExercises/Exercise1";
import { Exercise2 } from "./stringExercises/Exercise2";
import { Exercise3 } from "./stringExercises/Exercise3";

export const Strings = () => {
 

  return (
    <StyledStrings>

      <h3>Strings</h3>
      <p>
        A string is a chain of <strong>characters </strong>
        you can do many things with them
      </p>


      <Exercise1/>
      <Exercise2/>
      <Exercise3/>    

       
      
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

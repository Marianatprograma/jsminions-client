import styled from "styled-components";

import React from "react";
import { Exercise1 } from "./mathExercises/Exercise1";
import { Exercise2 } from "./mathExercises/Exercise2";

export const Math = () => {
  return (
    <StyledMath>
      
      <h3> Math </h3>
      <Exercise1 />
      <Exercise2 />
      

    </StyledMath>
  );
};

const StyledMath = styled.div`
  display: flex;
  flex-direction: column;

  

`;

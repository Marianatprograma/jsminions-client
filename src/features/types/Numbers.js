import styled from 'styled-components';


import React from 'react'
import { Exercise1 } from './numberExercises/Exercise1';

export const Numbers = () => {
  return (
    <StyledNumbers>

        <h3> Numbers </h3>

        <Exercise1/>



    </StyledNumbers>
  )
}

const StyledNumbers = styled.div`

h3 {
    color: white;
  }
  
`;
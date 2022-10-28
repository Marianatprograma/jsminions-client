import styled from 'styled-components';
import React from 'react'

export const Square = ({element}) => {
  return (
    <StyledSquare >
        <p> {element} </p>
        {/* <input type="text" /> */}

    </StyledSquare>
  )
}
const StyledSquare = styled.div`

display: flex;
justify-content: center;
align-items: center;
min-width: 6rem;
height: 6rem;
width: 100%;
padding: 1rem;
font-size: 2rem;
font-weight: bold;

cursor: pointer;



  
`;      
import styled from 'styled-components';
import { useId } from 'react'

export const Square = () => {

  const id = useId()

  return (
    <StyledSquare className='square' id={id}>
                

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
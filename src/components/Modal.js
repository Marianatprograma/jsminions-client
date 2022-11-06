import { useContext, useState } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalContext';
    
export const Modal = ({children, show, handleClick}) => {

    const {showModal, setShowModal} = useContext(GlobalContext)

    const modalHandler = (e) =>{
        e.stopPropagation();
    }


    const closeHandler = () =>{
        setShowModal(!showModal) 
    }

    
   return (
      <StyledModal show={show} onClick={closeHandler} >      

            <div className="content" onClick={modalHandler}>
            {children}
            </div>        
        
      </StyledModal>
   )
}
    
const StyledModal = styled.div`
position: absolute;
z-index: 1000;
top: 0;
left: 0;
width: 100%;
height: 100%;

background: hsla(0, 100%, 100%, 0.5);

display: ${props => (props.show ? "flex" : "none" )};
flex-direction: column;
justify-content: center;
align-items: center;

.content{
   
    min-width: 10rem;
    min-height: 10rem;
   
}

    
`;
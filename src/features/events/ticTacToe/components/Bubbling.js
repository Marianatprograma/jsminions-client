import { useContext, useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../../../../components/Modal';
import { GlobalContext } from '../../../../context/GlobalContext';
    
export const Bubbling = () => {
    const {showModal, setShowModal} = useContext(GlobalContext)

 

   const sonHandler = (e) =>{
    e.stopPropagation();
    alert("Yo soy el hijo independiente")

   }

   
   return (
      <StyledBubbling>
        <h3> Bubbling </h3>

         <div className="grandFather" onClick={() => alert("Yo soy abuelo")} >
            <h5> Soy el abuelo</h5>
            <div className="father" onClick={() => alert("Yo soy padre")}>
                <h5> Soy el padre </h5>
                <div className="son" onClick={sonHandler}>
                    <h5>Soy el hijo</h5>

                </div>
            </div>
         </div>

         <button onClick={() => {setShowModal(true)}} >Click me!</button>
         <Modal show={showModal} >
           
           <div className="modalContenT">
            <h5> Soy el modal</h5>
            
           </div>
           
         </Modal>
      </StyledBubbling>
   )
}
    
const StyledBubbling = styled.div`

.hijo{
    background: orange;
}

.grandFather{
    padding: 2rem;
    background: skyblue;
}
.father{
    background: pink;
    padding: 2rem;
}    
.son{
    background: salmon;
    padding: 2rem;
}

.modalContenT{
    padding: 1rem;
    background: skyblue; 
}
`;
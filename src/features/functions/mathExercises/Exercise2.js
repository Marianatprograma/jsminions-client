import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
    
export const Exercise2 = () => {


    const [result, setResult] = useState("");
    const [numbers, setNumbers] = useState({base: "", power: ""})
    const numARef = useRef();   
    const numBRef = useRef();     
    

    useEffect(() => {
        console.log(numbers)
    
      
    }, [numbers])
    

    
    const powHandler = () => {
     let a = numARef.current.value;
     let b = numBRef.current.value;

    setResult(Math.pow(a,b));

    setNumbers(current => (
        {...current,
            base: numARef.current.value, 
            power: numBRef.current.value }
        ));    
    
 }



   return (
      <StyledExercise2>
         <h4> Exercise2 </h4>

            <div className="num-container">

            <input type="number"  id="numb1" placeholder=' Insert a'  ref={numARef} defaultValue="0" required/>
            
            <input type="number"  id="numb12" placeholder=' Insert b' ref={numBRef} defaultValue="0" required/>
            </div>

            <div className="btn-container">
            <button onClick={powHandler}> Power </button>

            </div>

            <h4> Result </h4>
            <p> {numbers.base} <sup>{numbers.power}</sup> = {result} </p>
      </StyledExercise2>
   )
}
    
const StyledExercise2 = styled.div`
display: flex;
flex-direction: column;
.num-container{
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: .5rem;
}

.btn-container{

    display: flex;
    justify-content: center;
    button{
        padding: 0 .5rem;
        font-weight: bold;
    }
   
}
    
`;
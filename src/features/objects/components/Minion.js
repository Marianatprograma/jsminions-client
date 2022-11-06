import styled from 'styled-components';
import bob from '../../../assets/bob.png'
    
export const Minion = ({name, age, personality, accessories}) => {
   return (
      <StyledMinion>

        <div className="img-container">
        <img src={bob} alt="Bob" />

        </div>

        <div className="content">

        <p> 
            Name: {name} 
        </p>
        <p> 
            Age: {age} años
        </p>
        <p> 
            {/* Personality: {personality.map((quality)=>{
               return quality + ", "
            }) } */}
            Personality: {personality[0]}
        </p>
        <p> 
            Accessories: {accessories.map(( accessory ) =>{
                return   "-" +  accessory 

            })
             
            }
        </p>
        </div>
      </StyledMinion>
   )
}
    
const StyledMinion = styled.div`

background: skyblue;
display: flex;
flex-direction: column;
padding: 1rem;
.img-container{
    width: 10rem;
    align-self: center;
    img{
        width: 100%;
    }
}
    
`;
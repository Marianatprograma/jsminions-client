import styled from 'styled-components';
import  minions from "../../../assets/minions.json";
import { Minion } from './Minion';
    
export const Collections = () => {


   console.log(minions)

   return (
      <StyledColections>
        <h3> Colections </h3>
        <h4> Arrays vs Objects </h4>

         {
            minions.map((minion) =>
                <Minion 
                  key={minion.id}
                  name={minion.name} 
                  age={minion.age} 
                  personality={minion.personality} 
                  accessories={minion.accessories}                
                />
            )
         }
        


         
      </StyledColections>
   )
}
    
const StyledColections = styled.div`
    
`;
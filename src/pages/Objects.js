import styled from 'styled-components';
import { Collections } from '../features/objects/components/Collections';
import { PageModel } from './PageModel';
    
export const Objects = () => {
   return (
    <PageModel>
      <StyledObjects>

       <Collections/>
        
      </StyledObjects>

    </PageModel>
   )
}
    
const StyledObjects = styled.div`
    
`;
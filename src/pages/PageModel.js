import { Navbar } from "../components/Navbar";
import styled from "styled-components";
import { Footer } from "../components/Footer";

export const PageModel = ({children}) => {
  return (
    <StyledPageModel>
      <Navbar />

      <div className="info">
        
        {children}        
      
      </div>
     

      <Footer />
    </StyledPageModel>
  );
};
const StyledPageModel = styled.div`

width: 100%;
height: 100vh;

display: flex;
flex-direction: column;
justify-content: space-between;

.info{
  height: 100%;
  /* background: red; */
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  
  padding: 1rem;

}


`;

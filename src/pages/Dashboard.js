import { Navbar } from "../components/Navbar";
import styled from 'styled-components';
import { Strings } from "../features/types/Strings";

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <Navbar />

      <div className="minion">
        <h3>Types</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, corrupti.</p>
      
      
        <div id="string">
          <Strings/>

        </div>
{/* 
        <div id="number">number</div>

        <div id="boolean">boolean</div>

        <div id="underfined">underfined</div>

        <div id="null">null</div> */}
      
      
      
      </div>


    </StyledDashboard>
  );
};
const StyledDashboard = styled.div`
  padding: 1rem;

  display: flex;
  flex-direction: column;

  height: 100rem;
`;
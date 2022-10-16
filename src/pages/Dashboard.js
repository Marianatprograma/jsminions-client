import styled from "styled-components";
import { Welcome } from "../components/Welcome";
import { PageModel } from "./PageModel";

export const Dashboard = () => {
  return (
    <PageModel>
      <StyledDashboard>
        <Welcome />
        
      </StyledDashboard>
    </PageModel>
  );
};
const StyledDashboard = styled.div`



`;

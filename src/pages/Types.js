import styled from "styled-components";
import { Strings } from "../features/types/Strings";
import { PageModel } from "./PageModel";

export const Types = () => {
  return (
    <PageModel>
      <StyledTypes>
        <Strings />
        
      </StyledTypes>
    </PageModel>
  );
};
const StyledTypes = styled.div`
  display: flex;
  flex-direction: column;
`;

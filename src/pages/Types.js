import styled from "styled-components";
import { Boolean } from "../features/types/Boolean";
import { Numbers } from "../features/types/Numbers";
import { Strings } from "../features/types/Strings";
import { PageModel } from "./PageModel";

export const Types = () => {
  return (
    <PageModel>
      <StyledTypes>
        <Strings />
        <Numbers />
        <Boolean/>

        
        
      </StyledTypes>
    </PageModel>
  );
};
const StyledTypes = styled.div`
  display: flex;
  flex-direction: column;
`;

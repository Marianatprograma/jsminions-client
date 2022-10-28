import styled from "styled-components";
import React from "react";
import { PageModel } from "./PageModel";
import { Math } from "../features/functions/Math";

export const Functions = () => {
  return (
    <PageModel>
      <StyledFunctions>
        <Math />
      </StyledFunctions>
    </PageModel>
  );
};

const StyledFunctions = styled.div``;

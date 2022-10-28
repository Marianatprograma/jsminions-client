import styled from "styled-components";

import React from "react";
import { PageModel } from "./PageModel";
import { TicTacToe } from "../features/events/ticTacToe/TicTacToe";

export const Events = () => {
  return (
    <PageModel>
      <StyledEvents>

        <TicTacToe/>

      </StyledEvents>
    </PageModel>
  );
};

const StyledEvents = styled.div`

`;

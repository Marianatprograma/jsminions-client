import styled from "styled-components";

import React from "react";
import { PageModel } from "./PageModel";
import { TicTacToe } from "../features/events/ticTacToe/TicTacToe";
import { Bubbling } from "../features/events/ticTacToe/components/Bubbling";

export const Events = () => {
  return (
    <PageModel>
      <StyledEvents>

        <TicTacToe/>
        <Bubbling/>

      </StyledEvents>
    </PageModel>
  );
};

const StyledEvents = styled.div`

`;

import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";

import styled from "styled-components";
import RoleDice from "./RoleDice";

function GamePlay() {
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore />
        <NumberSelector />
      </div>
      <RoleDice />
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
padding-top: 70px;
  .top_section {
    max-width: 1190px;
    margin: 0 auto;
    align-items: end;
    display: flex;
    justify-content: space-between;
  }
`;
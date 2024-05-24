import React from "react";
import styled from "styled-components";

function RecentCard (){

  return(
    <Div>
      <CardDiv>
      </CardDiv>
  
    </Div>
  );
}

export default RecentCard;

const Div =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 19px;
`;
const CardDiv =styled.div`
  width: 304px;
  height: 383px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--white, #FFF);
`;
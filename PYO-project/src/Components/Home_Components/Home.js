import React from "react";
import styled from "styled-components";
import RecentCard from "./RecentCard";

function Home (){

  return (
    <Div>
      <RecentCard/>
    </Div>
  );
}

export default Home;

const Div =styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--blueblack-1, #34334A);
`;


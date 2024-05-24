import React from "react";
import styled from "styled-components";
import RecentCard from "./RecentCard";
import ModalBtn from "../Writing_Components/ModalBtn";
import Header from "../Layout_Components/Header";

function Home (){

  return (
    <Div>
      <ModalBtn/>
      <RecentCard/>
      <MoreBtn>더보기</MoreBtn>
    </Div>
  );
}

export default Home;

const Div =styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--blueblack-1, #34334A);

`;

const MoreBtn =styled.button`
  display: flex;
  width: 220px;
  height: 60px;
  padding: 21px 75px 20px 75px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--blue, #645DFF);

  color: var(--, #FFF);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 100px;
    border: none;
    cursor: pointer;
`;

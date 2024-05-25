import React from "react";
import styled from "styled-components";
import RecentCard from "./RecentCard";
import ModalBtn from "../Writing_Components/ModalBtn";
import Header from "../Layout_Components/Header";

function Home (){

  return (
    <Div>
      <Name>규희<Names>님의 가장 최근의 니어&디어</Names></Name>
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
  /* position: relative; */
  top: 130px;

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

const Name = styled.span`
color: var(--white, #FFF);
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
/* position: absolute; */
top: 545px;
left: 328px;
`;

const Names = styled.span`
  color: var(--white, #FFF);
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;
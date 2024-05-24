import React from "react";
import styled from "styled-components";
import Home from "../Components/Home_Components/Home";

//Home_Components의 컴포넌트들을 여기 불러오면 됨. 화면에 띄울 페이지
function HomePage(){

  return(
    <div>
      <Home/>
    </div>
  );
}

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; // 요소들 사이에 공간을 균등하게 배분
`

const Box1 = styled.div`
  width: 414px;
  height: 160px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--yellow, #F8FFA6);
`;

const Box2 = styled.div`
  width: 414px;
  height: 160px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--blue2, #8A85FF);
`;

const Box3 = styled.div`
  width: 414px;
  height: 160px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--white, #FFF);
`;
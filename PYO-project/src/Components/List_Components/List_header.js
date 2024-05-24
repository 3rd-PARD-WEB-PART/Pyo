import React from "react";
import styled from "styled-components";
import logo from "../../img/로고.png";
import letter from "../../img/편지.png";

function List_header() {
  const data = {
    name: "규희",
    day: "26",
    pages: "14"
  }
  return (
    <Div>
      <Container>
        <Logo src={logo} className='logo' />
        <Y_Box>
          <Letter src={letter} className='letter' />
          <p><Bold>{data.name}</Bold>님이 어머니께<br/><Bold>{data.day}</Bold>일동안 <Bold>{data.pages}</Bold>장의 편지를 작성했어요!</p>
        </Y_Box>
      </Container>
    </Div>
  )
}

export default List_header;

const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--blueblack-1, #34334A);
`;

const Container = styled.div`
  width: 393px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 101.362px;
  height: 51.016px;
  flex-shrink: 0;
  position: absolute;
  top: 29.5px;
`;

const Y_Box = styled.div`
  width: 361px;
  height: 126px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--yellow, #F8FFA6);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 132px;

  p {
    color: var(--black, #161616);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  top: 44px;
  }
`;

const Letter = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 29.5px;
`;

const Bold = styled.span`
  color: var(--black, #161616);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
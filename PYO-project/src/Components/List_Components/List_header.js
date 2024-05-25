import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../img/로고.png";
import letter from "../../img/편지.png";
import cry from "../../img/우는표정.png";
import { getAPI } from "../../API/AxiosAPI";

function List_header() {
  const [userData, setUserData] = useState([]);
  const [letterData, setLetterData] = useState([]);

  
  useEffect(() => {
    const getData = async () => {
      const response = await getAPI();
      setUserData(response);
      console.log(response);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await getAPI();
      setLetterData(response.letterReadDTO);
      console.log(response);
    };
    getData();
  }, []);

  return (
    <Div>
      <Container>
        <Logo src={logo} />
        <Y_Box>
        <Letter src={letter} />
    <p>
      <Bold>규희</Bold>님이 <Bold>어머니</Bold>께<br />
      <Bold>{userData.userDDay}</Bold>일동안 <Bold>{userData.userLetterCount}</Bold>장의 편지를 작성했어요!
    </p>
  
</Y_Box>
        {letterData.map((item, index) => (
          <D_Box key={index}>
            <InfoRows>
              <DateDiv>{item.letterDate}</DateDiv>
              <Emoticon src={cry} />
            </InfoRows>
            <Lettercontainer>
              <Title>{item.letterTitle}</Title>
              <Contents>{item.letterContents}</Contents>
            </Lettercontainer>
          </D_Box>
        ))}
      </Container>
    </Div>
  );
}

export default List_header;

const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Changed to flex-start to stack items from the top */
  background: var(--blueblack-1, #34334A);
  overflow: auto;
  padding-top: 60px; /* Added padding to ensure space for the logo */
`;

const Container = styled.div`
  width: 393px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 101.362px;
  height: 51.016px;
  margin-bottom: 50px; /* Added margin bottom to separate from other elements */
`;

const Y_Box = styled.div`
  width: 361px;
  height: 126px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--yellow, #F8FFA6);
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
  position: relative;

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

const D_Box = styled.div`
  width: 321px;
  flex-shrink: 0;
  border-radius: 20px;
  justify-content: center;
  background: var(--white, #FFF);
  margin-bottom: 20px; /* Adjust the margin to ensure proper spacing */
  padding: 20px; /* Added padding for content spacing */
`;

const Letter = styled.img`
  width: 24px;
  height: 24px;
  top: 28px;
  left: 168px;
  position: absolute;
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

const InfoRows = styled.div`
  width: 321px;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Added to align items in the center */
  margin-bottom: 20px; /* Adjust the margin to ensure proper spacing */
`;

const DateDiv = styled.div`
  display: inline-flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: var(--blueblack-1, #34334A);
  color: var(--white, #FFF);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Emoticon = styled.img`
  width: 32px;
  height: 32px;
`;

const Title = styled.div`
  color: var(--black, #161616);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Contents = styled.div`
  color: var(--gray1, #676767);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%; /* Ensure it takes full width */
  margin-top: 8px;
`;

const Lettercontainer = styled.div`
  width: 100%; /* Ensure it takes full width */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

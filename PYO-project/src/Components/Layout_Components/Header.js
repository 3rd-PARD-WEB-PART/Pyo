import React from "react";
import styled from "styled-components";
import logo from "../../img/로고.png"
import arrow from "../../img/화살표.png"

function Header() {
  return (
<div>
<Header1 Width='100%'>
      <Header2 Width='66%'>
      <Logo Width='135.15px' Height='68.02px' MarginTop='40px'><img src={logo} alt="로고"></img></Logo>
      <Namecontainer MarginTop='46px'>
      <Text Fontweight = '500'>김규희<Text Fontweight = '300'>님이</Text></Text>
      <Logo Width='24px' Height='24px'><img src={arrow} alt="화살표"></img></Logo>
      <Text Fontweight = '500'>김규희<Text Fontweight = '300'>께</Text></Text>
      </Namecontainer>
      <ButtonComtainer MarginTop='41px'>
      <Button Color='white' LetterColor = '#645DFF'>편지 미리보기</Button>
      <Button Color='#645DFF' LetterColor = 'white'>편지 작성하기</Button>
      </ButtonComtainer>
      </Header2>
      </Header1>
    </div>
  );
}

export default Header;

const Header1 = styled.div`
display: flex;
width: ${(props) => props.Width};
    height: 116px;
    flex-shrink: 0;
    background: var(--blueblack-1, #34334A);
    justify-content: center;

/* 탭바 그림자 */
box-shadow: 0px 5px 40px 0px rgba(255, 255, 255, 0.15);

`;
const Header2 = styled.div`
display: flex;
width: ${(props) => props.Width};
    height: 116px;
    flex-shrink: 0;
    background: var(--blueblack-1, #34334A);
    justify-content: space-between;

`;

const Namecontainer = styled.div`
  display: flex;
  width: auto;
  flex-shrink: 0;
  background: var(--blueblack-1, #34334A);
  justify-content: center;
  vertical-align: middle;
  margin-top: ${(props) => props.MarginTop};
  color: var(--white, #FFF);
  text-align: center;
  white-space: nowrap; /* Prevent line breaks */
`;

const ButtonComtainer = styled.div`
display: flex;
width: 252px;
justify-content: space-between;
    flex-shrink: 0;
    background: var(--blueblack-1, #34334A);
    justify-content: center;
    vertical-align: middle;
    margin-top: ${(props) => props.MarginTop};
`;

const Logo = styled.div`
    background-color: #34334A;
    width: ${(props) => props.Width};
    margin-top: ${(props) => props.MarginTop};
    height: ${(props) => props.Height};
    margin-left: ${(props) => props.MarginLeft};

    
    `;

const Button = styled.button`
display: flex;
width: 120px;
height: 35px;
padding: 8px 16px 8px 17px;
justify-content: center;
align-items: center;
flex-shrink: 0;
color: ${(props) => props.LetterColor};

border-radius: 8px;
border: none;
background: ${(props) => props.Color};
color: var(--, #FFF);
text-align: center;
font-family: Pretendard;
font-size: 13px;
font-style: normal;
font-weight: 600;
line-height: normal;

`;

const Text = styled.div`
  color: var(--white, #FFF);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: ${(props) => props.Fontweight};
  line-height: normal;
  white-space: nowrap; /* Prevent line breaks */
`;

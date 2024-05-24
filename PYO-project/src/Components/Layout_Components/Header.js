import React from "react";
import styled from "styled-components";
import logo from "../../img/로고.png";
import arrow from "../../img/화살표.png";

function Header() {
  return (
    <div>
      <Header1>
        <Header2 Width='66%'>
          <Logo src={logo} className='logo' />
          <Namecontainer MarginTop='46px'>
            <Name>김규희<Names>님이</Names></Name>
            <Arrow src={arrow} className='arrow' />
            <Name2>어머니<Names>께</Names></Name2>
          </Namecontainer>
          <ButtonComtainer>
            <Button Color='white' LetterColor='#645DFF'>편지 미리보기</Button>
            <Button Color='#645DFF' LetterColor='white'>편지 작성하기</Button>
          </ButtonComtainer>
        </Header2>
      </Header1>
    </div>
  );
}

export default Header;

const Header1 = styled.div`
  width: 100%;
  display: flex;
  height: 116px;
  flex-shrink: 0;
  background: var(--blueblack-1, #34334A);
  justify-content: center;
  box-shadow: 0px 5px 40px 0px rgba(255, 255, 255, 0.15);
  position: relative;
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
  white-space: nowrap;
`;

const ButtonComtainer = styled.div`
  display: flex;
  width: 252px;
  top: 41px;
  right: 323px;
  gap: 12px;
  position: absolute;
  justify-content: space-between;
  flex-shrink: 0;
  background: var(--blueblack-1, #34334A);
  justify-content: center;
  vertical-align: middle;
`;

const Logo = styled.img`
  width: 135.149px;
  height: 68.021px;
  flex-shrink: 0;
  background-color: #34334A;
  position: relative;
  top: 24px;
`;

const Arrow = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  position: absolute;
  left: 948px;
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
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Name = styled.span`
  color: var(--white, #FFF);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  top: 49px;
  left: 879px;
`;

const Name2 = styled.span`
  color: var(--white, #FFF);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  top: 49px;
  left: 980px;
`;

const Names = styled.span`
  color: var(--white, #FFF);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  position: relative;
`;
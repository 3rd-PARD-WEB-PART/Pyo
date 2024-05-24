import React from "react";
import styled from "styled-components";
import { useRecoilValue } from 'recoil';
import write from "../../img/장수.png";
import to_write from "../../img/편지.png";
import d_day from "../../img/달력 이모지.png";

// Home_Components의 컴포넌트들을 여기 불러오면 됨. 화면에 띄울 페이지
function Home_row1() {
  const data = {
    count : "6",
    to_count : "14",
    day: "21"
  }
  /*const count = useRecoilValue(countState);
  const to_count = useRecoilValue(to_countState);
  const day = useRecoilValue(dayState);
  */

  return (
    <Container>
      <Name>규희<Names>님의 니어&디어 현황</Names></Name>
      <Box1>
        <p>작성한 편지 장수</p>
        <Img1 src={write} className='write' />
        <h1>{data.count}장</h1>
      </Box1>
      <Box2>
        <p>작성할 편지 장수</p>
        <Img2 src={to_write} className='to_write' />
        <h1>{data.to_count}장</h1>
      </Box2>
      <Box3>
        <p>편지 보내기 까지</p>
        <Img3 src={d_day} className='d_day' />
        <h1>D-{data.day}</h1>
      </Box3>
    </Container>
  );
}

export default Home_row1;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  background: var(--blueblack-1, #34334A);
`;

const Box = styled.div`
  width: 414px;
  height: 160px;
  flex-shrink: 0;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative; /* 부모 요소로부터의 상대적 위치 설정 */
`;

const Box1 = styled(Box)`
  color: var(--black, #161616);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  top: 168px;
  background: var(--yellow, #F8FFA6);
  
  p {
    margin: 0; /* 기본 마진 제거 */
    position: absolute;
    top: 22px; /* 상단에서 22px 떨어진 위치 */
    left: 20px; /* 왼쪽에서 20px 떨어진 위치 */
  }

  h1 {
    color: var(--black, #161616);
text-align: right;
font-family: Pretendard;
font-size: 58px;
font-style: normal;
font-weight: 700;
line-height: normal;
position: absolute;
top: 30px;
left: 300px;
  }
`;

const Img1 = styled.img`
width: 24px;
height: 24px;
flex-shrink: 0;
top: 22px; /* 상단에서 22px 떨어진 위치 */
    left: 155px; /* 왼쪽에서 20px 떨어진 위치 */
    position: absolute;
`;

const Box2 = styled(Box)`
  color: var(--black, #161616);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  top: 168px;
  background: var(--blue2, #8A85FF);

  p {
    margin: 0; /* 기본 마진 제거 */
    position: absolute;
    top: 22px; /* 상단에서 22px 떨어진 위치 */
    left: 20px; /* 왼쪽에서 20px 떨어진 위치 */
  }
  h1 {
    color: var(--black, #161616);
text-align: right;
font-family: Pretendard;
font-size: 58px;
font-style: normal;
font-weight: 700;
line-height: normal;
position: absolute;
top: 30px;
left: 280px;
  }
`;

const Img2 = styled.img`
width: 24px;
height: 24px;
flex-shrink: 0;
top: 22px; /* 상단에서 22px 떨어진 위치 */
    left: 155px; /* 왼쪽에서 20px 떨어진 위치 */
    position: absolute;
`;

const Box3 = styled(Box)`
  color: var(--black, #161616);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  top: 168px;
  background: var(--white, #FFF);

  p {
    margin: 0; /* 기본 마진 제거 */
    position: absolute;
    top: 22px; /* 상단에서 22px 떨어진 위치 */
    left: 20px; /* 왼쪽에서 20px 떨어진 위치 */
  }
  h1 {
    color: var(--black, #161616);
text-align: right;
font-family: Pretendard;
font-size: 58px;
font-style: normal;
font-weight: 700;
line-height: normal;
position: absolute;
top: 30px;
left: 270px;
  }
`;

const Img3 = styled.img`
width: 24px;
height: 24px;
flex-shrink: 0;
  top: 22px; /* 상단에서 22px 떨어진 위치 */
  left: 155px; /* 왼쪽에서 20px 떨어진 위치 */
  position: absolute;
    
`;

const Name = styled.span`
color: var(--white, #FFF);
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
position: absolute;
top: 236px;
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
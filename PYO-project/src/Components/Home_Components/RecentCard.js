import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Recentimg from "../../img/Recentimg.png";
import { getAPI } from "../../API/AxiosAPI";

function RecentCard() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getAPI();
      const sortedData = response.letterReadDTO.sort((a, b) => new Date(b.letterDate) - new Date(a.letterDate));
      setUserData(sortedData.slice(0, 4));
      console.log(response.letterReadDTO);
    };
    getData();
  }, []);

  const textCut = (str) => {
    return str.length > 90 ? str.slice(0, 90) + '...' : str;
  };

  return (
    <Div>
      {userData.map((item, index) => (
        <CardDiv key={index}>
          <DateDiv>{item.letterDate}</DateDiv>
          <Img src={Recentimg} alt="로고 이미지" />
          <Title>{item.letterTitle}</Title>
          <Contents>{textCut(item.letterContents)}</Contents>
        </CardDiv>
      ))}
    </Div>
  );
}

export default RecentCard;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 19px;
`;

const CardDiv = styled.div`
  width: 304px;
  height: 383px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--white, #FFF);
  position: relative;
  top: 120px;
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
  text-align: right;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 12px;
  margin-right: 12px;
  margin-left: 184px;
`;

const Img = styled.img`
  width: 135.149px;
  height: 68.021px;
  flex-shrink: 0;
  margin-top: 66px;
  margin-left: 83px;
  margin-left: 85.85px;
`;

const Title = styled.div`
  color: var(--black, #161616);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 262px;
  margin-left: 20px;
  margin-top: 72px;
`;

const Contents = styled.div`
  overflow: hidden;
  color: var(--gray1, #676767);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 262px;
  height: 82px;
  flex-shrink: 0;
  white-space: normal;
  margin-left: 20px;
  margin-top: 8px;
`;
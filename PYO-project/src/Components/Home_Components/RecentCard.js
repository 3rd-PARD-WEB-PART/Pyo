import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Recentimg from "../../img/Recentimg.png";
import { getAPI } from "../../API/AxiosAPI";

function RecentCard() {
  /*const data = [
    {
      date: "2024. 05. 25",
      title: "파드 아이디어 피칭 날",
      contents:
        "엄마 곧 파드 아이디어 피칭인데, 진짜 힘들다. 신박하고 좋다고 생각한 아이디어 들고가서 피드백 받았는데, 피드백 해주시는분이 별로라고 하셔서… 하 한 2주동안 하루종일 생각해서 기획한 아이디어인데.. 이럴때 엄마면 어떻게 했을까? 우리집 가훈이 ‘노력하면 다 된다’ 잖아, 근데 노력으로 안되는것도 있는거 같다는걸 요즘 느껴.sfsdf"
    },
    {
      date: "2024. 05. 27",
      title: "파드 아이디어 피칭 날sdf",
      contents:
        "엄마 곧 파드 아이디어 피칭인데, 진짜 힘들다. 신박하고 좋다고 생각한 아이디어 들고가서 피드백 받았는데, 피드백 해주시는분이 별로라고 하셔서… 하 한 2주동안 하루종일 생각해서 기획한 아이디어인데.. 이럴때 엄마면 어떻게 했을까? 우리집 가훈이 ‘노력하면 다 된다’ 잖아, 근데 노력으로 안되는것도 있는거 같다는걸 요즘 느껴."
    },
    {
      date: "2024. 05. 29",
      title: "파드 아이디어 피칭 날qweeqwewq",
      contents:
        "엄마 곧 파드 아이디어 피칭인데, 진짜 힘들다. 신박하고 좋다고 생각한 아이디어 들고가서 피드백 받았는데, 피드백 해주시는분이 별로라고 하셔서… 하 한 2주동안 하루종일 생각해서 기획한 아이디어인데.. 이럴때 엄마면 어떻게 했을까? 우리집 가훈이 ‘노력하면 다 된다’ 잖아, 근데 노력으로 안되는것도 있는거 같다는걸 요즘 느껴.efwefwefw"
    },
    {
      date: "2024. 05. 30",
      title: "파드 아이디어 피칭 날sfsdf",
      contents:
        "엄마 곧 파드 아이디어 피칭인데, 진짜 힘들다. 신박하고 좋다고 생각한 아이디어 들고가서 피드백 받았는데, 피드백 해주시는분이 별로라고 하셔서… 하 한 2주동안 하루종일 생각해서 기획한 아이디어인데.. 이럴때 엄마면 어떻게 했을까? 우리집 가훈이 ‘노력하면 다 된다’ 잖아, 근데 노력으로 안되는것도 있는거 같다는걸 요즘 느껴.wegregreger"
    }
  ];

  const textCut = (str) => {
    return str.length > 90 ? str.slice(0, 90) + '...' : str;
  };

  return (
    <Div>
      {data.map((item, index) => (
        <CardDiv key={index}>
          <DateDiv>{item.date}</DateDiv>
          <Img src={Recentimg} alt="로고 이미지" />
          <Title>{item.title}</Title>
          <Contents>{textCut(item.contents)}</Contents>
        </CardDiv>
      ))}
    </Div>
  );
}*/
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getAPI();
      setUserData(response);
      console.log(response);
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
        <DateDiv>{item.date.letterDate}</DateDiv>
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
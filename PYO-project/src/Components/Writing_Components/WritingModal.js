import React, { useState } from "react";
import styled from "styled-components";
import close from "../../img/closeBtn.png";


function WritingModal({ isOpen, closeModal }) {

  const submitHandler = async () => {
    // try {
    //   // 원래 여기도 구현하라고 하려했지만 patch를 위해 남겨두겠습니다.
    //   const response =
    //     method === "post"
    //       ? await postMemberAPI(newData)
    //       : console.log("구현필요");
    //   closeModal();
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <Background style={{ display: isOpen ? "block" : "none" }}>
      <OutContatiner>
        <CloseDiv onClick={closeModal}>
          <img src={close} alt="닫힘 아이콘"></img>
        </CloseDiv>
        <Container>
          <div>하이?</div>
          <Title>제목</Title>
          <BtnContainer>
            <AddButton onClick={submitHandler}>OK</AddButton>
          </BtnContainer>
        </Container>
      </OutContatiner>
    </Background>
  );
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const OutContatiner =styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 90%;
  overflow-y: auto;

  width: 950px;
  height: 699px;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0);
`;

const CloseDiv =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 4.6%;
  left: 96.5%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  background-color: #fff;
  max-width: 100%;
  max-height: 90%;
  overflow-y: auto;
  border-radius: 50%;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  position: absolute;
  top: 55.7%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 950px;
  height: 620px;
  flex-shrink: 0;
  max-width: 100%;
  max-height: 90%;
  overflow-y: auto;
  border-radius: 20px;
  background: var(--yellow, #F8FFA6);
`;

const Title = styled.div`
  color: white;
  font-size: 25px;
  text-align: center;
  margin-bottom: 30px;
`;


const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CloseBtn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid white;
  background: #222222;
  color: white;
  margin: 20px 10px 20px 10px;
  &:hover {
    cursor: pointer;
  }
`;

const AddButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid white;
  background: white;
  color: #222222;
  margin: 20px 10px 20px 10px;
  &:hover {
    cursor: pointer;
  }
`;

export default WritingModal;
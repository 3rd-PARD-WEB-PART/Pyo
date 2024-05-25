import styled from "styled-components";
import React, { useState } from "react";
import WritingModal from "./WritingModal";


function ModalBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
        <Button Color='#645DFF' LetterColor='white' onClick={handleModalOpen}>편지 작성하기</Button>
        {/* <ModifyButton onClick={handleModalOpen}>MODIFY</ModifyButton> */}
        <WritingModal
          isOpen={isModalOpen}
          closeModal={handleModalOpen}

        />
    </div>
  );
}

const ModifyButton = styled.button`
  width: 80px;
  height: 25px;
  color: white;
  background-color: #222222;
  border: 1px solid white;
  border-radius: 10px;
  &:hover {
    background-color: white;
    color: #222222;
    cursor: pointer;
  }
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
  cursor: pointer;
`;

export default ModalBtn;
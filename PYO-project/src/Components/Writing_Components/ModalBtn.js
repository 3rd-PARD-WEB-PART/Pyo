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
        <ModifyButton onClick={handleModalOpen}>MODIFY</ModifyButton>
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

export default ModalBtn;
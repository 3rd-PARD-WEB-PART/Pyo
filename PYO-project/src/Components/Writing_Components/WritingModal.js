import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import close from "../../img/closeBtn.png";
import talkbox from "../../img/talkbox.png";
import { getletterAPI, postletterAPI } from "../../API/AxiosAPI";

function WritingModal({ isOpen, closeModal }) {
  const [letter, setLetter] = useState([]);

  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
  const date = String(today.getDate()).padStart(2, '0');

  const formattedDate = `${year}. ${month}. ${date}`;
  console.log(formattedDate);

  //서버 연결하면 변수 변경할 필요있음
  const [writings, setWritings] =useState({
    letterContents: "",
    letterTitle: "",
    letterDate: toString(formattedDate),
    question1: letter[0],
    question2: letter[1],
    questionAnswer1: "",
    questionAnswer2: ""
  });

  const titlefocus = useRef();
  const contentInput = useRef();
  const questionAnswer1 = useRef();
  const questionAnswer2 = useRef();
  
  useEffect(() => {
    if (!isOpen) {
      // Reset state values when modal is closed
      setWritings({
        ...writings,
        letterContents: "", 
        letterTitle: "",
        letterDate: formattedDate,
        questionAnswer1: "",
        questionAnswer2: ""
      });
    }
  }, [isOpen]);

  const getletter = async () => {
    try{
      const response =await getletterAPI();
      setLetter(response.data);
      console.log(response.data);
    }
    catch(error){
      console.error(error);
    }
  };

  useEffect(() => {
    getletter();
  }, []);

  //이벤트 핸들러
  const handleWritingInput = (e) =>{
    setWritings({
      ...writings, 
      [e.target.name]: e.target.value});
  }


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(letter);
    console.log(writings);
    if (!writings.letterTitle) {
      titlefocus.current.focus();
      return;
    }
    if (!writings.letterContents) {
      contentInput.current.focus();
      return;
    }
    if (!writings.questionAnswer1) {
      questionAnswer1.current.focus();
      return;
    }
    if (!writings.questionAnswer2) {
      questionAnswer2.current.focus();
      return;
    }

    const data ={
      letterContents: writings.letterContents,
      letterTitle: writings.letterTitle,
      letterDate: writings.letterDate,
      question1: letter[0],
      question2: letter[1],
      questionAnswer1: writings.questionAnswer1,
      questionAnswer2: writings.questionAnswer2
    };

      try {
        const response =await postletterAPI(data);
        console.log(response);
        closeModal();
      } catch (err) {
        console.error(err);
      }
  };

  return (
    <Background style={{ display: isOpen ? "block" : "none" }}>
      <OutContatiner>
        <CloseDiv onClick={closeModal}>
          <img src={close} alt="닫힘 아이콘"></img>
        </CloseDiv>
        <Container onSubmit={submitHandler}>
          <RealTopDiv>
            <EmotionDiv>😀 🙁 😭 😡 🤢</EmotionDiv>
            <Talkimg src={talkbox} alt="말풍선 아이콘"></Talkimg>
            <Talk> 오늘 기분은 어떠신가요? 이모티콘으로 표시해주세요!</Talk>
            <TopDiv type="text" name="letterDate" readOnly={true} value={writings.letterDate} autoComplete="off"></TopDiv>
          </RealTopDiv>
          <Title type="text" name="letterTitle" placeholder="제목" value={writings.letterTitle} onChange={handleWritingInput} ref={titlefocus} autoComplete="off"></Title>
          <FreeContents name="letterContents" placeholder="오늘 하루 어땠는지, 가족에게 나누어 주세요! " value={writings.letterContents} onChange={handleWritingInput} autoComplete="off" ref={contentInput}></FreeContents>

          <QuestionDiv> 
            <QuestionRandomDiv>
              <Qdiv>Q. {letter[0]}</Qdiv>
              <AnswerDiv name="questionAnswer1" placeholder="답변을 작성해주세요..." value={writings.questionAnswer1} onChange={handleWritingInput} autoComplete="off" ref={questionAnswer1}></AnswerDiv>
            </QuestionRandomDiv>
            <QuestionRandomDiv>
              <Qdiv>Q. {letter[1]}</Qdiv>
              <AnswerDiv name="questionAnswer2" placeholder="답변을 작성해주세요..." value={writings.questionAnswer2} onChange={handleWritingInput} autoComplete="off" ref={questionAnswer2}></AnswerDiv>
            </QuestionRandomDiv>
          </QuestionDiv>
          
          <BtnContainer>
            <AddButton >작성완료</AddButton>
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

const Container = styled.form`
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

const RealTopDiv =styled.div`
  display: flex;
  margin-top: 34px;
  align-items: start;
  width: 870px;
`;

const EmotionDiv =styled.div`
  display: inline-flex;
  height: 27px;
  padding: 0px 8px;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--blueblack-1, #34334A);
  height: 27px;
  /* margin-left: 40px; */
`;

const Talkimg =styled.img`
  width: 273px;
  height: 27px;
  margin-left: 10px;
  position: relative;
`;

const Talk =styled.div`
  position: absolute;
  color: var(--black, #161616);
font-family: Pretendard;
font-size: 11.896px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.036px;
left: 18%;
top: 6.6%;
`;

const TopDiv =styled.input`

  margin-bottom: 37px;
  margin-left: 391.91px;
  color:  #161616;
  text-align: right;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* margin-left: 768px; */
  border: none;
  background-color: #F8FFA6;
  border: none;
  width: 92px;
  height: 19px;
  outline: none;
`;

const Title = styled.input`
  color: white;
  font-size: 25px;
  text-align: center;
  margin-bottom: 16px;
  width: 870px;
  height: 48px;
  flex-shrink: 0;
  text-align: start;
  border: none;

  background-color: #F8FFA6;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: black;
  outline: none;

  &::placeholder {
    color: #B7BC88;
  }

`;


const FreeContents =styled.textarea`
  width: 870px;
  height: 146px;
  flex-shrink: 0;
  color: #F8FFA6;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  resize: none;

  background-color: #F8FFA6;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #161616;
  text-align: start;
  border: none;
  outline: none;

  &::placeholder {
    color: #B7BC88;
  }
`;

const QuestionDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const QuestionRandomDiv =styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 427px;
  height: 191px;
  flex-shrink: 0;
  border-radius: 20px;
  background-color: #FDFED6;
`;

const Qdiv = styled.div`
  width: 395px;
  margin-top: 16px;
`;

const AnswerDiv =styled.textarea`
  width: 395px;
  height: 128px;
  flex-shrink: 0;
  color: #676767;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: #FDFED6;
  margin-top: 12px;
  resize: none;
  border: none;
  outline: none;

  &::placeholder {
    color: #9D9D9D;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const AddButton = styled.button`
  display: flex;
  width: 220px;
  height: 60px;
  padding: 21px 75px 20px 75px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin: 20px 10px 20px 10px;
  border-radius: 8px;
  background: var(--blueblack-1, #34334A);

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  &:hover {
    cursor: pointer;
  }
`;

export default WritingModal;
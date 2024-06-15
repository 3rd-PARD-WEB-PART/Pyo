# Near & Dear

🔥 이 프로젝트는 2024년 PARD 3기 숏커톤에서 만들어진 프로그램으로 '청춘' 이라는 주제에 기초하여 만들었습니다! 🔥<br/>
💌 Near & Dear은 나의 청춘이 우리 가족의 청춘이 될 수 있도록, 틈틈히 서로의 진심을 모아 전할 수 있도록 도와주는 서비스   입니다! 사랑하는 가족들에게 오늘은 진심을 전해보는 것은 어떨까요?

## 개발환경 및 언어
REACT, html, css, JavaScript, GitHub, Git 

## 💚라이브러리💚
- npm install react-router-dom
- npm install styled-components
- npm install axios
- npm install recoil

## 📚페이지 별 기능
### HomePage
- Header : 로고, 유저 이름, 수신자 출력, 편지 읽기(클릭시 /List 페이지로 이동) 편지 쓰기(클릭시 편지 쓰기 모달창이 팝업) 버튼
- Home_row1 : 작성한 편지 장수, 작성할 편지 장수, 편지 보내기 까지의 D-Day 출력
- RecentCard : 가장 최근에 작성된 편지 4개 출력. 클릭시 전체 편지를 읽을 모달창이 팝업하여 편지를 읽을 수 있음. 편지 내용이 창의 크기를 넘어갈 때 내용을 자르며 textcut 실행. 


### ListPage
사용자가 이때 까지 입력한 편지 내용을 합쳐 출력.
노란 박스에는 유저이름 수신자, D-Day, 작성한 편지수의 데이터를 전달받아 출력한다.
그 아래 흰색 박스는 남은 편지를 가장 오래된 편지부터 순서대로 모두 출력하며, 편지가 기록된 날짜, 편지 제목, 편지 내용의 데이터를 전달받아 출력된다.

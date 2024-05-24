import React from "react";
import styled from "styled-components";
import Home from "../Components/Home_Components/Home";
import Header from "../Components/Layout_Components/Header";

//Home_Components의 컴포넌트들을 여기 불러오면 됨. 화면에 띄울 페이지
function HomePage(){

  return(
    <div>
      <Header/>
      <Home/> 
    </div>
  );
}

export default HomePage;
import React from "react";
import styled from "styled-components";
import Home from "../Components/List_Components/List_header";
import List_header from "../Components/List_Components/List_header";

//Home_Components의 컴포넌트들을 여기 불러오면 됨. 화면에 띄울 페이지
function ListPage(){

  return(
    <div>
      <List_header/>
    </div>
  );
}

export default ListPage;
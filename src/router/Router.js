import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import MyPage from "../pages/MyPage";
import WritingPage from "../pages/WritingPage";
import styled from "styled-components";
import ListPage from "../pages/ListPage";
import EditPage from "../pages/EditPage";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/post/add" element={<WritingPage />} />
          <Route path="/post/edit/:id" element={<EditPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </GlobalStyle>
    </BrowserRouter>
  );
}

export default Router;

const GlobalStyle = styled.div`
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
margin: 0 auto;
height: 100%;
max-width: 1200px;
`

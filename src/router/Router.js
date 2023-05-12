import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import DetailPage from '../pages/DetailPage'
import SearchPage from '../pages/SearchPage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import MyPage from '../pages/MyPage'
import WritingPage from '../pages/WritingPage'

function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/datil/:id" element={<DetailPage />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/writing" element={<WritingPage />}/>
        <Route path="/singup" element={<SignupPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/mypage" element={<MyPage />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router
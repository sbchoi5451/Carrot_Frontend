import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import DetailPage from '../pages/DetailPage'
import SearchPage from '../pages/SearchPage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import MyPage from '../pages/MyPage'
import WritingPage from '../pages/WritingPage'
<<<<<<< HEAD
import styled from 'styled-components'
=======
>>>>>>> 53d2eb4ead8f6188d34e6d0c4ee90b9b2f7c5984

function Router() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <GlobalStyle>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/datil/:id" element={<DetailPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/singup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </GlobalStyle>
=======
    <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/datil/:id" element={<DetailPage />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/writing" element={<WritingPage />}/>
        <Route path="/singup" element={<SignupPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/mypage" element={<MyPage />}/>
    </Routes>
>>>>>>> 53d2eb4ead8f6188d34e6d0c4ee90b9b2f7c5984
    </BrowserRouter>
  )
}

<<<<<<< HEAD
export default Router

const GlobalStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
=======
export default Router
>>>>>>> 53d2eb4ead8f6188d34e6d0c4ee90b9b2f7c5984

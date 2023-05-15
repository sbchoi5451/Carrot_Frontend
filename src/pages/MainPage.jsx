import React from 'react'
import NavBar from '../components/NavBar'
import MainSlide from '../components/main/MainSlide'
import MainContent from '../components/main/MainContent'
import Toggle from '../components/toggle/Toggle'

function MainPage() {
  return (
    <>
      <NavBar />
      <MainSlide />
      <MainContent />
      <Toggle />
    </>
  )
}

export default MainPage
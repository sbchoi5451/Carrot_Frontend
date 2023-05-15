import React from 'react'
import * as st from './slideST'

function MainSlide() {

  return (
    <>
      <st.SlideLayout>
        <st.SlideBody>
          <st.LeftMoveBtn />

          <st.Wrapper width='50%' height='70%' justify='flex-end'>
            <st.ImgStyle src='img/main1.webp' />
          </st.Wrapper>

          <st.Wrapper width='30%' height='50%' justify='flex-start'>
            <st.TextStyle>
              <h1>판매합니다</h1>
              <p>10,000원</p>
              <p>서울시 마포구 아현동</p>
              <p>관심 15 채팅 90</p>
            </st.TextStyle>
          </st.Wrapper>

          <st.RightMoveBtn />
        </st.SlideBody>
      </st.SlideLayout>
    </>
  )
}

export default MainSlide
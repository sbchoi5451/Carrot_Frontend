import React, { useState } from 'react'
import * as st from './slideST'
import mainData from './tempData'
import { useQuery } from 'react-query';
import axios from 'axios';

function MainSlide() {

  const [currIndex, setCurrIndex] = useState(0);

  const nextHandler = () => {
    setCurrIndex((index) => (index === mainData.length - 1 ? 0 : index + 1))
  }

  const prevHandler = () => {
    setCurrIndex((index) => (index === 0 ? mainData.length - 1 : index - 1))
  }

  const { data } = useQuery('mainData', async () => {
    const response = await axios.get('http://localhost:5000/posts')
    return response.data
  })

  return (
    <>
      <st.SlideLayout>
        <st.SlideBody>
          <st.LeftMoveBtn onClick={prevHandler}/>
          <st.Wrapper width='70%'>
            {data?.map((item, index) => (
              <st.SlideContent key={index} active={index === currIndex ? 'true' : 'false'}>
                <div className='img' justify='flex-end'>
                  <st.ImgStyle src={item.img} />
                </div>

                <div className='content' justify='flex-start'>
                  <st.TextStyle>
                    <h1>{item.title}</h1>
                    <p>{item.price}</p>
                    <p>{item.address}</p>
                    <p>{item.interest}</p>
                  </st.TextStyle>
                </div>
                
              </st.SlideContent>
            ))}

          </st.Wrapper>
          <st.RightMoveBtn onClick={nextHandler} />
          
        </st.SlideBody>
      </st.SlideLayout>
    </>
  )
}

export default MainSlide
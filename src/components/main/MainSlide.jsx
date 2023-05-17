import React, { useEffect, useState } from 'react'
import * as st from './slideST'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getPost, getRecommendPost } from '../../api/postApi';

function MainSlide() {

  const navigation = useNavigate();

  const naviDetailBtn = ({ id }) => {
    navigation(`/detail/${id}`)
  }

  const [currIndex, setCurrIndex] = useState(0);

  const queryClient = useQueryClient();

  const { data } = useQuery(['mainSlide'], () => getPost())

  const prevHandler = () => {
    setCurrIndex((index) => (index === 0 ? data.length - 1 : index - 1))
  }

  const nextHandler = () => {
    setCurrIndex((index) => (index === data.length - 1 ? 0 : index + 1))
  }

  return (
    <>
      <st.SlideLayout>
        <st.SlideBody>
          <st.LeftMoveBtn onClick={prevHandler} />
          <st.Wrapper width='70%'>
            {data?.map((item, index) => (
              <st.SlideContent key={index} active={index === currIndex ? 'true' : 'false'}>
                <div className='img' justify='flex-end'>
                  <st.ImgStyle src={item.postImage} onClick={() => naviDetailBtn({ id: item.id })} />
                </div>

                <div className='content' justify='flex-start'>
                  <st.TextStyle>
                    <h3>{item.postTitle}</h3>
                    <p className='price'>{`${parseInt(item.postPrice).toLocaleString()}원`}</p>
                    <p className='tradelocation'>{item.tradeLocation}</p>
                    <p className='interestcount'>{`관심 ${item.interestCount}`}</p>
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
import React, { useEffect, useState } from 'react'
import * as st from './DetailST'
import * as sst from '../main/slideST.js'
import mainData from '../main/tempData';
import { useNavigate } from 'react-router-dom';

function Detail() {

    const navigation = useNavigate();

    useEffect(() => {
       window.scrollTo(0, 0); 
    },[])

    const [star, setStar] = useState(false);

    return (
        <st.Layout>
            <div className='wrap'>
                <st.DetailContent>
                    <sst.LeftMoveBtn />
                    <st.DetailImgWrap>
                        <st.DetailImg src='img/testimage.jpg' />
                    </st.DetailImgWrap>
                    <sst.RightMoveBtn />
                </st.DetailContent>

                <st.Content>
                    <st.Profile>
                        <st.ProfileImg src='img/logindefault.png' />
                        <st.ProfileContent>
                            <div className='ID'>아이디</div>
                            <div className='Location'>목포시 항해동</div>
                        </st.ProfileContent>
                    </st.Profile>
                    {star ? <st.StarTrue onClick={() => setStar(!star)} /> : <st.StarFalse onClick={() => setStar(!star)} />}
                </st.Content>

                <st.Content flexDirection='column' align='flex-start' borderTop='1px solid gray' borderBottom='1px solid gray'>
                    <div className='title'>제목</div>
                    <div className='category'>카테고리: 23시간전</div>
                    <div className='price'>10,000원</div>
                    <div className='content'>내용</div>
                    <div className='interest'>관심 15 채팅 45 조회 1804</div>
                </st.Content>
            </div>

            <div className='wrap'>
                <st.MoreContent>
                    <div className='title'>항해마켓 인기중고</div>
                    <div className='link' onClick={() => navigation('/list')}>더 구경하기</div>
                </st.MoreContent>

                <st.MoreWrap>
                    {mainData.map((item) => (
                        <st.MoreItem>
                            <st.ImageContainer>
                                <st.Image src={item.img} />
                            </st.ImageContainer>

                            <st.MoreBody>
                                <div className='title'>{item.title}</div>
                                <div className='price'>{item.price}</div>
                                <div className='address'>{item.address}</div>
                                <div className='interest'>{item.interest}</div>
                            </st.MoreBody>
                        </st.MoreItem>
                    ))}

                </st.MoreWrap>
            </div>
        </st.Layout>
    )
}

export default Detail
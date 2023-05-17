import React, { useEffect, useState } from 'react'
import * as st from './DetailST'
import * as sst from '../main/slideST.js'
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import Modal from 'react-modal'
import { getDetail } from '../../api/postApi';

function Detail() {

    const navigation = useNavigate();

    const [interest, setInterest] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const params = useParams();
    const postId = params.id;

    const { data } = useQuery(['detailData'], getDetail(postId))

    console.log(data)

    return (
        <>
            <st.Layout>
                {data?.map((item) => (
                    <div className='wrap' key={item.postId}>
                        <st.DetailContent>
                            <sst.LeftMoveBtn />

                            <st.DetailImgWrap>
                                <st.DetailImg src={item.postImage} onClick={openModal} />
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
                            {interest ? <st.StarTrue onClick={() => setInterest(!interest)} /> : <st.StarFalse onClick={() => setInterest(!interest)} />}
                        </st.Content>

                        <st.Content flexdirection='column' align='flex-start' bordertop='1px solid gray' borderbottom='1px solid gray'>
                            <div className='title'>{item.postTitle}</div>
                            <div className='category'>{item.tradeLocation}</div>
                            <div className='price'>{item.postPrice}</div>
                            <div className='content'>{item.postImage}</div>
                            <div className='interest'>{item.postImage}</div>
                        </st.Content>
                    </div>
                ))}


                <div className='wrap'>
                    <st.MoreContent>
                        <div className='title'>항해마켓 인기중고</div>
                        <div className='link' onClick={() => navigation('/list')}>더 구경하기</div>
                    </st.MoreContent>

                    {/* <st.MoreWrap>
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

                    </st.MoreWrap> */}
                </div>
            </st.Layout>
            {modalOpen && (
                <Modal isOpen={modalOpen} ariaHideApp={false}>
                    <st.DetailImg src='img/testimage.jpg' />
                    <button onClick={closeModal}>x</button>
                </Modal>
            )}
        </>
    )
}

export default Detail
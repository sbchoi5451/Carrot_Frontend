import React, { useState } from 'react'
import * as st from './contentST'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { getPost } from '../../api/postApi';

function MainContent() {

    const navigation = useNavigate();
    const queryClient = useQueryClient();

    const { data = [] } = useQuery(['mainContent'], () => getPost())

    const detailNavHandler = (postId) => {
        navigation(`/detail/${postId}`);
    }

    const sortingData = data?.sort((a,b) => b.interestCount - a.interestCount)?.slice(0,12)

    return (
        <st.Layout>
            <h2>중고거래 인기매물</h2>
            <st.Contanier>
                {sortingData && sortingData.map((item) => (
                    <st.Item key={item.postId} >
                        <st.ImageContainer>
                            <st.Image src={item.postImage} onClick={() => detailNavHandler(item.postId)}/>
                        </st.ImageContainer>
                        <st.DataTitle>{item.postTitle}</st.DataTitle>
                        <st.DataPrice>{`${parseInt(item.postPrice).toLocaleString()}원`}</st.DataPrice>
                        <st.DataAddress>{item.tradeLocation}</st.DataAddress>
                        <st.DataInterest>{`관심 ${item.interestCount}`}</st.DataInterest>
                    </st.Item>
                ))}
            </st.Contanier>
        </st.Layout>
    )
}

export default MainContent
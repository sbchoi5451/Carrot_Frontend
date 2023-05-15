import React from 'react'
import mainData from './tempData'
import * as st from './contentST'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useQuery } from 'react-query';

function MainContent() {

    const navigation = useNavigate();

    const { data } = useQuery('mainData', async() => {
        const response = await axios.get('http://localhost:5000/posts')
        return response.data
      })

    return (
        <st.Layout>
            <h2>중고거래 인기매물</h2>
            <st.Contanier>
                {data?.map((item) => (
                    <st.Item key={item.id} onClick={() => navigation('/detail')}>
                        <st.ImageContainer>
                        <st.Image src={item.img} />
                        </st.ImageContainer>
                        <st.DataTitle>{item.title}</st.DataTitle>
                        <st.DataPrice>{item.price}</st.DataPrice>
                        <st.DataAddress>{item.address}</st.DataAddress>
                        <st.DataInterest>{item.interest}</st.DataInterest>
                    </st.Item>
                ))}
            </st.Contanier>
        </st.Layout>
    )
}

export default MainContent
import React, { useEffect } from 'react'
import mainData from './tempData'
import * as st from './contentST'
import { useNavigate } from 'react-router-dom'

function MainContent() {

    const navigation = useNavigate();

    return (
        <st.Layout>
            <h2>중고거래 인기매물</h2>
            <st.Contanier>
                {mainData.map((item) => (
                    <st.Item onClick={() => navigation('/detail')}>
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
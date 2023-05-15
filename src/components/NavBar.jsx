import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import * as st from './NavST'

function NavBar() {

    const navigation = useNavigate();
    const location = useLocation();

    const [view, setView] = useState(false);

    return (
        <st.NavLayout>
            <st.MenuStyle width='40%'>
                <st.ImgStyle width='160px' src='img/horizonlogo.png' alt='logo' onClick={() => navigation('/')} />
                <st.TextStyle onClick={() => navigation('/list')}
                    color={location.pathname === '/list' ? '#E78111' : '#4d5159'}
                    hovercolor={location.pathname === '/list' ? '#E78111' : '#868b94'}
                >중고거래</st.TextStyle>
                <st.TextStyle onClick={() => navigation('/writing')}
                    color={location.pathname === '/writing' ? '#E78111' : '#4d5159'}
                    hovercolor={location.pathname === '/writing' ? '#E78111' : '#868b94'}
                >거래하기</st.TextStyle>
                <st.TextStyle
                    color={location.pathname === '/search' ? '#E78111' : '#4d5159'}
                    hovercolor={location.pathname === '/lisearchst' ? '#E78111' : '#868b94'}
                >채팅하기</st.TextStyle>
            </st.MenuStyle>

            <st.MenuStyle width='50%'>
                <st.InputStyle
                    type='text'
                    placeholder='물품이나 동네를 검색해보세요'
                />
                <ul onClick={() => setView(!view)} style={{ color: 'black' }}>
                    User님! 환영합니다
                </ul>  {/* 수정필요 */}
                <st.ImgStyle width='30px' src='img/logindefault.png' alt='logindefault' onClick={() => navigation('/mypage')} />
                <st.LoginBtn onClick={() => navigation('/login')}>로그인</st.LoginBtn>
            </st.MenuStyle>
        </st.NavLayout>
    )
}

export default NavBar


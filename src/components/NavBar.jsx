import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import * as st from './NavST'

function NavBar() {

    const navigation = useNavigate();
    const location = useLocation();

    return (
        <st.NavLayout>
            <st.MenuStyle width='40%'>
                <st.ImgStyle width='160px' src='img/HanghaeLogo.png' alt='logo' onClick={() => navigation('/')} />
                <st.TextStyle onClick={() => navigation('/list')}
                    color={location.pathname === '/list' ? 'white' : '#D91818'}
                    hovercolor={location.pathname === '/list' ? '#D91818' : 'white'}
                >중고거래</st.TextStyle>
                <st.TextStyle color='#D91818' hovercolor='white'>Comming Soon...</st.TextStyle>
            </st.MenuStyle>

            <st.MenuStyle width='50%'>
                <st.InputStyle
                    type='text'
                    placeholder='물품이나 동네를 검색해보세요'
                />
                <div style={{ color: 'white' }}>User님! 환영합니다</div>  {/* 수정필요 */}
                <st.ImgStyle width='35px' src='img/logindefault.png' alt='logindefault' onClick={() => navigation('/mypage')} />
                <st.LoginBtn onClick={() => navigation('/login')}>로그인</st.LoginBtn>
            </st.MenuStyle>
        </st.NavLayout>
    )
}

export default NavBar


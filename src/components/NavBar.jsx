import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import * as st from './NavST'
import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { getKeywordApi } from '../api/postApi';

function NavBar() {

    const navigation = useNavigate();
    const location = useLocation();
    const mutation = useMutation(getKeywordApi,{
        onSuccess: () => {
            console.log('getKeywordApi 전송 성공')
        },
        onError: () => {
            console.log('getKeywordApi 전송 실패')
        }
    })

    const [searchValue, setSearchValue] = useState("");
    const searchHandler = (e) => setSearchValue(e.target.value);
    const enterSearchHandler = async (e) => {
        if (e.key === 'Enter') {
            console.log('엔터 눌렀음')
            console.log('입력값 ', searchValue)
            await mutation.mutateAsync(searchValue)
            navigation('/list') //수정필요
            setSearchValue("")
        }
    }

    const [isLogin, setIsLogin] = useState(true); //추후 stroage에서 관리(지수님께 확인!)

    return (
        <st.NavLayout>
            <st.MenuStyle width='70%' paddingright='50px'>
                <st.ImgStyle width='150px' src='img/logo2.png' alt='logo' onClick={() => navigation('/')} />
                <st.TextStyle onClick={() => navigation('/list')}
                    color={location.pathname === '/list' ? '#E78111' : '#4d5159'}
                    hovercolor={location.pathname === '/list' ? '#E78111' : '#868b94'}
                >중고거래</st.TextStyle>
                <st.TextStyle onClick={() => navigation('/writing')}
                    color={location.pathname === '/writing' ? '#E78111' : '#4d5159'}
                    hovercolor={location.pathname === '/writing' ? '#E78111' : '#868b94'}
                >등록하기</st.TextStyle>
                <st.TextStyle
                    color={location.pathname === '/search' ? '#E78111' : '#4d5159'}
                    hovercolor={location.pathname === '/lisearchst' ? '#E78111' : '#868b94'}
                >채팅하기</st.TextStyle>
                <st.InputStyle
                    type='text'
                    value={searchValue}
                    onChange={searchHandler}
                    onKeyDown={enterSearchHandler}
                    placeholder='물품이나 동네를 검색해보세요'
                />
            </st.MenuStyle>

            <st.MenuStyle width='30%' justifycontent={isLogin? 'space-between' : 'flex-end'}>
                
                {isLogin?
                <>
                xxx님 환영합니다!
                <st.ImgStyle width='30px' src='img/logindefault.png' alt='logindefault' onClick={() => navigation('/mypage')} />
                </>
                : null}
                
                <st.LoginBtn onClick={() => navigation('/login')}>로그인</st.LoginBtn>
            </st.MenuStyle>
        </st.NavLayout>
    )
}

export default NavBar


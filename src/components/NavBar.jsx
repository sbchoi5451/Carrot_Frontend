import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as st from "./NavST";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { getKeywordApi } from "../api/postApi";
import Cookies from "js-cookie";
import { fetchLogout, fetchUserInfo } from "../api/signUpApi";

function NavBar() {
  const navigation = useNavigate();
  const location = useLocation();
  const mutation = useMutation(getKeywordApi, {
    onSuccess: () => {
      console.log("getKeywordApi 전송 성공");
    },
    onError: () => {
      console.log("getKeywordApi 전송 실패");
    },
  });

  const navigation = useNavigate();
  const location = useLocation();
  const mutation = useMutation(getKeywordApi)
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (e) => setSearchValue(e.target.value);
  const enterSearchHandler = async (e) => {
    if (e.key === "Enter") {
      console.log("엔터 눌렀음");
      console.log("입력값 ", searchValue);
      await mutation.mutateAsync(searchValue);
      navigation("/list"); //수정필요
      setSearchValue("");
    }
  };

  const [isLogin, setIsLogin] = useState(false); //추후 stroage에서 관리(지수님께 확인!)

  // 유저 정보 받아오기
  const userInfo = fetchUserInfo();

  // 로그인 여부
  useEffect(() => {
    if (userInfo) {
      setIsLogin(true);
    }
  }, [userInfo]);


  // 로그아웃 클릭 시
  const handleLogoutBtnClick = () => {
    setIsLogin((isLogin) => false);
    Cookies.remove("access_key");
    Cookies.remove("refresh_key");

    fetchLogout();

    alert("로그아웃 되었습니다!");
    navigation("/");
  };

  return (
    <st.NavLayout>
      <st.MenuStyle width="70%" paddingright="50px">
        <st.ImgStyle width="150px" src="img/logo2.png" alt="logo" onClick={() => navigation("/")} />
        <st.TextStyle
          onClick={() => navigation("/list")}
          color={location.pathname === "/list" ? "#E78111" : "#4d5159"}
          hovercolor={location.pathname === "/list" ? "#E78111" : "#868b94"}
        >
          중고거래
        </st.TextStyle>
        <st.TextStyle
          onClick={() => navigation("/writing")}
          color={location.pathname === "/writing" ? "#E78111" : "#4d5159"}
          hovercolor={location.pathname === "/writing" ? "#E78111" : "#868b94"}
        >
          등록하기
        </st.TextStyle>
        <st.TextStyle color={location.pathname === "/search" ? "#E78111" : "#4d5159"} hovercolor={location.pathname === "/lisearchst" ? "#E78111" : "#868b94"}>
          채팅하기
        </st.TextStyle>
        <st.InputStyle type="text" value={searchValue} onChange={searchHandler} onKeyDown={enterSearchHandler} placeholder="물품이나 동네를 검색해보세요" />
      </st.MenuStyle>

      <st.MenuStyle width="30%" justifycontent={isLogin ? "space-between" : "flex-end"}>
        {isLogin ? (
          <>
            {`${userInfo.sub}님 환영합니다!`}
            <st.ImgStyle width="30px" src="img/logindefault.png" alt="logindefault" onClick={() => navigation("/mypage")} />
          </>
        ) : null}
        {isLogin ? <button onClick={handleLogoutBtnClick}>로그아웃</button> : <st.LoginBtn onClick={() => navigation("/login")}>로그인</st.LoginBtn>}
      </st.MenuStyle>
    </st.NavLayout>
  );
}

export default NavBar;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import Button from "../components/Button";
import { fetchLogin } from "../api/signUpApi";
import useInput from "../hooks/useInput";
import Cookies from "js-cookie";

function LoginPage() {
  const [id, handleChangeId, , idRef] = useInput();
  const [password, handleChangePassword, , passwordRef] = useInput();
  const [idError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const { mutate: mutateLogin } = useMutation(fetchLogin, {
    onSuccess: (response) => {
      if (response.data.msg === "성공") {
        return navigate("/");
      }
      return alert(response.data.msg);
    },
    onError: (error) => {
      console.log(error);
      alert("요청이 실패했습니다. 다시 시도해주세요!");
    },
  });

  // 로고 클릭시 메인페이지 이동
  const handleLogoClick = () => {
    navigate("/");
  };

  // 아이디 유효성 검사
  useEffect(() => {
    const idPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d_]{5,12}$/;
    if (!!id && !idPattern.test(id)) {
      return setIdError("5~12자 이내의 영문,숫자 조합을 입력하세요.");
    }
    if (id) {
      setIdError("");
    }
  }, [id]);

  // 비밀번호 유효성 검사
  useEffect(() => {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d_]{5,12}$/;
    if (!!password && !passwordPattern.test(password)) {
      return setPasswordError("5~12자 이내의 영문,숫자 조합을 입력하세요.");
    }
    if (password) {
      setPasswordError("");
    }
  }, [password]);

  // 회원가입 버튼 클릭시
  const handleSignUpBtnClick = () => {
    navigate("/signup");
  };

  // 로그인 버튼 클릭시
  const handleLoginBtnClick = () => {
    if (!id) {
      idRef.current.focus();
      return setIdError("아이디를 입력하세요");
    }
    if (!password) {
      passwordRef.current.focus();
      return setPasswordError("비밀번호를 입력하세요.");
    }
    if (idError || passwordError) {
      return;
    }
    const user = {
      userId: id,
      password,
    };
    mutateLogin(user);
    sessionStorage.setItem("userId", id);
  };

  // 버튼 prop
  const signUpBtnStyle = { backgroundColor: "#ff7e36", content: "회원가입", maxWidth: "220px" };
  const loginBtnStyle = { backgroundColor: "#ff7e36", content: "로그인", maxWidth: "220px" };

  return (
    <StContainer>
      <StLoginBox>
        <StLogo src="img/dang.png" alt="항해마켓 로고" onClick={handleLogoClick} />
        <StLoginInp ref={idRef} type="text" value={id} onChange={handleChangeId} placeholder="아이디를 입력해주세요." aria-describedby="idInputError" />
        <div role="alert" id="idInputError">
          {idError}
        </div>
        <StLoginInp
          ref={passwordRef}
          type="password"
          value={password}
          onChange={handleChangePassword}
          placeholder="비밀번호를 입력해주세요."
          aria-describedby="pwInputError"
        />
        <div role="alert" id="pwInputError">
          {passwordError}
        </div>
        <StBtnBox>
          <Button btnStyle={signUpBtnStyle} onClick={handleSignUpBtnClick} />
          <Button btnStyle={loginBtnStyle} onClick={handleLoginBtnClick} />
        </StBtnBox>
      </StLoginBox>
    </StContainer>
  );
}

export default LoginPage;

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const StLoginBox = styled.div`
  width: 100%;
  max-width: 638px;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 0px 0px 21px 0px #00000040;
  border-radius: 18px;
  box-sizing: border-box;
  padding: 20px 90px 101px;
  div[role="alert"] {
    font-size: 14px;
    text-align: left;
    position: relative;
    bottom: 14px;
    padding: 0 10px;
    color: #ffa42c;
  }
  @media (max-width: 1330px) and (min-width: 400px) {
    max-width: 500px;
    padding: 20px 90px 50px;
  }
`;

const StLogo = styled.img`
  width: 220px;
  padding: 20px 0 35px 0;
  box-sizing: border-box;
  margin: 0 auto;
  margin-bottom: 11px;
  @media (max-width: 1330px) and (min-width: 400px) {
    width: 150px;
    padding: 15px 0 25px 0;
  }
`;

const StLoginInp = styled.input`
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  padding: 10px;
  max-width: 460px;
  margin-bottom: 30px;
  font-size: 20px;
  &::placeholder {
    color: #c6c6c6;
    font-weight: 600;
  }
  @media (max-width: 1330px) and (min-width: 400px) {
    font-size: 16px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

const StBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

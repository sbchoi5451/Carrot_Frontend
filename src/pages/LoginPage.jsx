import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import logo from "../img/logo.png";

function LoginPage() {
  // 버튼 prop
  const signUpBtnStyle = { backgroundColor: "#ff7e36", content: "회원가입", maxWidth: "220px" };
  const loginBtnStyle = { backgroundColor: "#ff7e36", content: "로그인", maxWidth: "220px" };

  return (
    <StContainer>
      <StLoginBox>
        <StLogo src={logo} alt="항해마켓 로고" />
        <StLoginInp type="text" placeholder="아이디를 입력해주세요." aria-describedby="idInputError" />
        <div role="alert" id="idInputError"></div>
        <StLoginInp type="password" placeholder="비밀번호를 입력해주세요." aria-describedby="pwInputError" />
        <div role="alert" id="pwInputError"></div>
        <StBtnBox>
          <Button btnStyle={signUpBtnStyle} />
          <Button btnStyle={loginBtnStyle} />
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
  @media (max-width: 1330px) and (min-width: 400px) {
    max-width: 500px;
    padding: 20px 90px 50px;
  }
`;

const StLogo = styled.img`
  width: 129px;
  height: 134px;
  margin: 0 auto;
  margin-bottom: 11px;
  @media (max-width: 1330px) and (min-width: 400px) {
    width: 116px;
    height: 120px;
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

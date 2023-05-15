import React from "react";
import { styled } from "styled-components";
import Button from "../components/Button";
import logo from "../img/logo.png";
import Location from "../components/Location";

function SignupPage() {
  // 버튼 prop
  const idCheckBtnStyle = { backgroundColor: "#ff7e36", content: "중복 확인", maxWidth: "100px", mediaSize: "80px" };
  const cancleBtnStyle = { backgroundColor: "#D9D9D9", content: "취소", maxWidth: "220px" };
  const signUpBtnStyle = { backgroundColor: "#ff7e36", content: "가입 완료", maxWidth: "220px" };

  return (
    <StContainer>
      <StLoginBox>
        <StLogo src={logo} alt="항해마켓 로고" />
        <StInputLabel htmlFor="idInput">
          <StInputLabelWrapper>
            <span>아이디</span>
            <StIdInputGroupWrapper>
              <StCommonInp id="idInput" type="text" placeholder="아이디는 4~12자 이내로 입력하세요." aria-describedby="idInputError" />
              <Button btnStyle={idCheckBtnStyle} />
            </StIdInputGroupWrapper>
            <div role="alert" id="idInputError"></div>
          </StInputLabelWrapper>
        </StInputLabel>
        <StInputLabel htmlFor="pwInput">
          <StInputLabelWrapper>
            <span>비밀번호</span>
            <StCommonInp id="v" type="password" placeholder="비밀번호는 4~12자 이내로 입력하세요." aria-describedby="pwInputError" />
            <div role="alert" id="pwInputError"></div>
          </StInputLabelWrapper>
        </StInputLabel>
        <StInputLabel htmlFor="pwCheckInput">
          <StInputLabelWrapper>
            <span>비밀번호 확인</span>
            <StCommonInp id="pwCheckInput" type="password" placeholder="비밀번호를 확인하세요." aria-describedby="pwCheckInputError" />
            <div role="alert" id="pwCheckInputError"></div>
          </StInputLabelWrapper>
        </StInputLabel>
        <StInputLabel htmlFor="emailInput">
          <StInputLabelWrapper>
            <span>이메일</span>
            <StCommonInp id="emailInput" type="text" placeholder="이메일을 입력하세요." aria-describedby="emailInputError" />
            <div role="alert" id="emailInputError"></div>
          </StInputLabelWrapper>
        </StInputLabel>
        <StInputLabelWrapper>
          <span>주소지</span>
          <Location />
        </StInputLabelWrapper>
        <StBtnBox>
          <Button btnStyle={cancleBtnStyle} />
          <Button btnStyle={signUpBtnStyle} />
        </StBtnBox>
      </StLoginBox>
    </StContainer>
  );
}

export default SignupPage;

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

const StIdInputGroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  #idInput {
    width: 72%;
    border: 1px solid #e9ecef;
  }
`;

const StInputLabel = styled.label`
  display: block;
`;

const StInputLabelWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
  input {
    width: 100%;
    border: 1px solid #e9ecef;
  }

  div[role="alert"] {
    /* 에러 메시지 스타일링 */
  }

  span {
    font-size: 14px;
    position: absolute;
    top: -20px;
    left: 3px;
    text-align: left;
  }
  @media (max-width: 1330px) and (min-width: 400px) {
    span {
      font-size: 12px;
    }
  }
`;

const StCommonInp = styled.input`
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 11px 10px;
  max-width: 460px;
  margin-bottom: 30px;
  font-size: 20px;
  line-height: 20px;
  &::placeholder {
    color: #c6c6c6;
    font-weight: 600;
    font-size: 15px;
  }
  @media (max-width: 1330px) and (min-width: 400px) {
    font-size: 15px;
    line-height: 18px;
    padding: 10px;
    margin-bottom: 20px;
    &::placeholder {
      font-weight: 500;
      font-size: 14px;
    }
  }
`;

const StBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

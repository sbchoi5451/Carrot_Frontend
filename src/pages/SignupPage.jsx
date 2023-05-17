import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import Button from "../components/Button";
import Location from "../components/Location";
import useInput from "../hooks/useInput";
import { useSelector } from "react-redux";
import { fetchSignUp } from "../api/signUpApi";

function SignupPage() {
  const [id, handleChangeId, , idRef] = useInput();
  const [password, handleChangePassword, , passwordRef] = useInput();
  const [passwordCheck, handleChangePasswordCheck, , passwordCheckRef] = useInput();
  const [email, handleChangeEmail, , EmailRef] = useInput();
  const [phone, , setPhone, phoneRef] = useInput();

  const [userIdError, setUserIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [locationError, setLocationErrorr] = useState("");

  const locationSlice = useSelector((state) => state.post.tradeLocation);
  const navigate = useNavigate();

  const { mutate: mutateSignUp } = useMutation(fetchSignUp, {
    onSuccess: () => {
      alert("회원가입이 완료되었습니다!");
      navigate("/login");
    },
    onError: (error) => {
      const message = error.response.data;
      return alert(message);
    },
  });

  // 아이디 중복검사
  const handleCheckIdBtnClick = () => {
    const err = fetchSignUp(id);
    console.log("err msg", err.msg);
  };

  // 아이디 유효성 검사
  useEffect(() => {
    const idPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d_]{5,12}$/;
    if (!!id && !idPattern.test(id)) {
      return setUserIdError("5~12자 이내의 영문,숫자 조합을 입력하세요.");
    } else {
      setUserIdError("");
    }
  }, [id]);

  // 비밀번호 유효성 검사
  useEffect(() => {
    const pwPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!?_]{5,12}$/;
    if (!!password && !pwPattern.test(password)) {
      return setPasswordError("5~12자 이내의 영문,숫자 조합을 입력하세요.");
    } else {
      setPasswordError("");
    }
  }, [password]);

  // 비밀번호 일치 검사
  useEffect(() => {
    if (!!passwordCheck && passwordCheck !== password) {
      setPasswordCheckError("비밀번호가 일치하지 않습니다.");
    }
    if (!!password && passwordCheck === password) {
      setPasswordCheckError("비밀번호가 일치합니다.");
    }
  }, [password, passwordCheck]);

  // 이메일 유효성 검사 함수
  const handleEmailValidCheck = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!!email && !emailPattern.test(email)) {
      EmailRef.current.focus();
      return setEmailError("이메일 형식이 올바르지 않습니다.");
    } else return setEmailError("");
  };

  // 이메일 유효성 검사
  useEffect(() => {
    handleEmailValidCheck();
  }, [email]);

  // 전화번호 유효성 검사 함수
  const handlePhoneValidCheck = (e) => {
    let phoneNumber = e.target.value;

    // 숫자값인지 검사
    if (isNaN(phoneNumber.replace(/-/g, ""))) {
      return;
    }

    // 전화번호 길이 검사
    if (phoneNumber.replace(/-/g, "").length > 11) {
      return;
    }

    // Automatically add "-" after 3 and 7 index.
    if (phoneNumber.length === 3 || phoneNumber.length === 8) {
      phoneNumber += "-";
    }

    setPhone(phoneNumber);
  };

  // 주소지 유효성 검사
  useEffect(() => {
    if (locationSlice.gu) {
      setLocationErrorr("");
    }
  }, [locationSlice]);

  // 취소 버튼 클릭시
  const handleCancleBtnClick = () => {
    window.history.back();
  };

  // 회원가입 버튼 클릭시
  const handleSignUpBtnClick = (e) => {
    e.preventDefault();
    if (!id) {
      idRef.current.focus();
      return setUserIdError("아이디를 입력하세요.");
    }
    if (!password) {
      passwordRef.current.focus();
      return setPasswordError("비밀번호를 입력하세요.");
    }
    if (!passwordCheck) {
      passwordCheckRef.current.focus();
      return setPasswordCheckError("비밀번호를 한 번 더 입력하세요.");
    }
    if (password !== passwordCheck) {
      passwordCheckRef.current.focus();
      return setPasswordCheckError("비밀번호가 일치하지 않습니다.");
    }
    if (!email) {
      EmailRef.current.focus();
      return setEmailError("이메일을 입력하세요.");
    }
    if (emailError) {
      return EmailRef.current.focus();
    }
    if (!phone) {
      phoneRef.current.focus();
      return setPhoneError("전화번호를 입력하세요.");
    }
    if (!locationSlice.si || !locationSlice.gu || !locationSlice.dong) {
      return setLocationErrorr("주소지를 모두 입력하세요.");
    }

    // 주소 문자열로 합치기
    const location = `${locationSlice.si} ${locationSlice.gu} ${locationSlice.dong}`;

    // newUser 생성
    const newUser = {
      userId: id,
      password,
      email,
      phone: phone.replaceAll("-", ""),
      location,
    };
    console.log("회원가입 유저 전송", newUser);

    // fetchSignUp 함수 mutateSignUp로 실행
    mutateSignUp(newUser);
  };

  // 버튼 prop
  const idCheckBtnStyle = { backgroundColor: "#ff7e36", content: "중복 확인", maxWidth: "100px", mediaSize: "80px" };
  const cancleBtnStyle = { backgroundColor: "#D9D9D9", content: "취소", maxWidth: "220px" };
  const signUpBtnStyle = { backgroundColor: "#ff7e36", content: "가입 완료", maxWidth: "220px" };

  return (
    <StContainer>
      <StLoginBox>
        <StLogo src="img/dang.png" alt="당근마켓 로고" />
        <StInputLabel htmlFor="idInput">
          <StInputLabelWrapper>
            <span>아이디</span>
            <StIdInputGroupWrapper>
              <StCommonInp
                value={id}
                onChange={handleChangeId}
                ref={idRef}
                id="idInput"
                type="text"
                placeholder="아이디는 5~12자 이내로 입력하세요."
                aria-describedby="idInputError"
              />
              <Button btnStyle={idCheckBtnStyle} onClick={handleCheckIdBtnClick} />
            </StIdInputGroupWrapper>
            <div role="alert" id="idInputError">
              {userIdError}
            </div>
          </StInputLabelWrapper>
        </StInputLabel>
        <StInputLabel htmlFor="pwInput">
          <StInputLabelWrapper>
            <span>비밀번호</span>
            <StCommonInp
              value={password}
              onChange={handleChangePassword}
              ref={passwordRef}
              id="pwInput"
              type="password"
              placeholder="비밀번호는 5~12자 이내로 입력하세요."
              aria-describedby="pwInputError"
            />
            <div role="alert" id="pwInputError">
              {passwordError}
            </div>
          </StInputLabelWrapper>
        </StInputLabel>
        <StInputLabel htmlFor="pwCheckInput">
          <StInputLabelWrapper>
            <span>비밀번호 확인</span>
            <StCommonInp
              value={passwordCheck}
              onChange={handleChangePasswordCheck}
              ref={passwordCheckRef}
              id="pwCheckInput"
              type="password"
              placeholder="비밀번호를 확인하세요."
              aria-describedby="pwCheckInputError"
            />
            <div role="alert" id="pwCheckInputError">
              {passwordCheckError}
            </div>
          </StInputLabelWrapper>
        </StInputLabel>
        <StInputLabel htmlFor="emailInput">
          <StInputLabelWrapper>
            <span>이메일</span>
            <StCommonInp
              value={email}
              onChange={handleChangeEmail}
              ref={EmailRef}
              id="emailInput"
              type="text"
              placeholder="이메일을 입력하세요."
              aria-describedby="emailInputError"
            />
            <div role="alert" id="emailInputError">
              {emailError}
            </div>
          </StInputLabelWrapper>
        </StInputLabel>
        <StInputLabel htmlFor="phoneInput">
          <StInputLabelWrapper>
            <span>전화번호</span>
            <StCommonInp
              value={phone}
              onChange={handlePhoneValidCheck}
              pattern="01[0-9]-\d{4}-\d{4}"
              ref={phoneRef}
              id="phoneInput"
              type="text"
              placeholder="전화번호를 입력하세요."
              aria-describedby="phoneInputError"
            />
            <div role="alert" id="phoneInputError">
              {phoneError}
            </div>
          </StInputLabelWrapper>
        </StInputLabel>
        <StInputLabelWrapper>
          <span>주소지</span>
          <Location aria-describedby="locationInputError" />
          <div role="alert" id="locationInputError">
            {locationError}
          </div>
        </StInputLabelWrapper>
        <StBtnBox>
          <Button btnStyle={cancleBtnStyle} onClick={handleCancleBtnClick} />
          <Button btnStyle={signUpBtnStyle} onClick={handleSignUpBtnClick} />
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

const StLoginBox = styled.form`
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
    font-size: 14px;
    /* border: 1px solid red; */
    text-align: left;
    position: relative;
    bottom: 20px;
    padding: 0 10px;
    color: #ffa42c;
  }
  div#locationInputError {
    z-index: -1;
    bottom: 0;
    top: 5px;
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

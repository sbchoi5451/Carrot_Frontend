import React, { useState } from "react";
import { styled } from "styled-components";
import useToggle from "../hooks/useToggle";
import { setTradeLocation } from "../redux/modules/post";
import { useDispatch } from "react-redux";

const Location = () => {
  const dispatch = useDispatch();
  const [siIsToggled, handleSiBtnToggle] = useToggle();
  const [guIsToggled, handleGuBtnToggle] = useToggle(false);
  const [dongIsToggled, handleDongBtnToggle] = useToggle(false);
  const [selectedSi, setselectedSi] = useState("시");
  const [selectedGu, setselectedGu] = useState("구");
  const [selectedDong, setselectedDong] = useState("동");

  const handleSiChange = (event) => {
    setselectedSi(event.target.innerHTML);
    setselectedGu("구");
    setselectedDong("동");
    handleSiBtnToggle();
  };

  const handleGuChange = (event) => {
    setselectedGu(event.target.innerHTML);
    setselectedDong("동");
    handleGuBtnToggle();
  };

  const handleDongChange = (event) => {
    const newDong = event.target.innerHTML;
    setselectedDong(newDong);
    dispatch(setTradeLocation({ si: selectedSi, gu: selectedGu, dong: newDong }));
    handleDongBtnToggle();
  };

  // 시,구,동 임시 데이터
  const cities = ["서울특별시", "부산광역시", "대구광역시", "인천광역시"];
  const districts = {
    서울특별시: ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구"],
    부산광역시: ["강서구", "금정구", "기장군", "남구"],
  };
  const neighborhoods = {
    강남구: ["개포동", "논현동", "대치동", "도곡동", "삼성동", "세곡동", "수서동", "신사동", "압구정동", "역삼동", "일원동", "청담동"],
    강동구: ["강일동", "고덕동", "길동", "둔촌동", "명일동", "상일동", "성내동", "암사동", "천호동"],
    강북구: ["미아동", "번동", "수유동", "우이동", "인수동", "쌍문동"],
  };

  return (
    <StContainer>
      <StBtnBox>
        <StListBtn type="button" onClick={handleSiBtnToggle}>
          <div>{selectedSi}</div>
          <div>▼</div>
        </StListBtn>
        {siIsToggled ? (
          <StBoxList className="ul">
            {cities.map((item) => (
              <StList onClick={handleSiChange} key={item}>
                {item}
              </StList>
            ))}
          </StBoxList>
        ) : (
          <></>
        )}
      </StBtnBox>
      <StBtnBox>
        <StListBtn type="button" onClick={handleGuBtnToggle}>
          <div>{selectedGu}</div>
          <div>▼</div>
        </StListBtn>
        {selectedSi !== "시" && guIsToggled ? (
          <StBoxList className="ul">
            {selectedSi &&
              districts[selectedSi].map((item) => (
                <StList onClick={handleGuChange} key={item}>
                  {item}
                </StList>
              ))}
          </StBoxList>
        ) : (
          <></>
        )}
      </StBtnBox>
      <StBtnBox>
        <StListBtn type="button" onClick={handleDongBtnToggle}>
          <div>{selectedDong}</div>
          <div>▼</div>
        </StListBtn>
        {selectedGu !== "구" && dongIsToggled ? (
          <StBoxList className="ul">
            {selectedGu &&
              neighborhoods[selectedGu].map((item) => (
                <StList onClick={handleDongChange} key={item}>
                  {item}
                </StList>
              ))}
          </StBoxList>
        ) : (
          <></>
        )}
      </StBtnBox>
    </StContainer>
  );
};

// styled components

const StContainer = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 100%;
  box-sizing: border-box;
`;

const StBtnBox = styled.div`
  width: 32%;
`;

const StListBtn = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  box-sizing: border-box;
  font-size: 16px;
  cursor: pointer;
  div:nth-child(2) {
    color: #ff7e36;
  }
  @media (max-width: 1330px) and (min-width: 400px) {
    font-size: 13px;
    padding: 0 13px;
  }
`;

const StBoxList = styled.ul`
  padding: 0 28px;
  box-sizing: border-box;
  border: 1px solid rgb(221, 221, 221);
  width: 32%;
  border-radius: 12px;
  background-color: rgb(255, 255, 255);
  line-height: 40px;
  position: absolute;
  top: 30px;
  @media (max-width: 1330px) and (min-width: 400px) {
    padding: 0 20px;
  }
`;

const StList = styled.li`
  list-style: none;
  height: 40px;
  font-size: 16px;
  @media (max-width: 1330px) and (min-width: 400px) {
    font-size: 13px;
  }
`;

export default Location;

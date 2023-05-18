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
  const cities = [
    "서울특별시",
    "부산광역시",
    "대구광역시",
    "인천광역시",
    "광주광역시",
    "대전광역시",
    "울산광역시",
    "세종특별자치시",
    "경기도",
    "강원도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
    "제주특별자치도",
  ];

  const districts = {
    서울특별시: [
      "강남구",
      "강동구",
      "강북구",
      "강서구",
      "관악구",
      "광진구",
      "구로구",
      "금천구",
      "노원구",
      "도봉구",
      "동대문구",
      "동작구",
      "마포구",
      "서대문구",
      "서초구",
      "성동구",
      "성북구",
      "송파구",
      "양천구",
      "영등포구",
      "용산구",
      "은평구",
      "종로구",
      "중구",
      "중랑구",
    ],
    부산광역시: [
      "중구",
      "서구",
      "동구",
      "영도구",
      "부산진구",
      "동래구",
      "남구",
      "북구",
      "해운대구",
      "사하구",
      "금정구",
      "강서구",
      "연제구",
      "수영구",
      "사상구",
      "기장군",
    ],
    대구광역시: ["중구", "동구", "서구", "남구", "북구", "수성구", "달서구", "달성군"],
    인천광역시: ["중구", "동구", "미추홀구", "연수구", "남동구", "부평구", "계양구", "서구", "강화군", "옹진군"],
    광주광역시: ["동구", "서구", "남구", "북구", "광산구"],
    대전광역시: ["동구", "중구", "서구", "유성구", "대덕구"],
    울산광역시: ["중구", "남구", "동구", "북구", "울주군"],
    세종시: [
      "수원시",
      "성남시",
      "의정부시",
      "안양시",
      "부천시",
      "광명시",
      "평택시",
      "동두천시",
      "안산시",
      "고양시",
      "과천시",
      "구리시",
      "남양주시",
      "오산시",
      "시흥시",
      "군포시",
      "의왕시",
      "하남시",
      "용인시",
      "파주시",
      "이천시",
      "안성시",
      "김포시",
      "화성시",
      "광주시",
      "양주시",
      "포천시",
      "여주시",
      "연천군",
      "가평군",
      "양평군",
    ],
    강원도: [
      "춘천시",
      "원주시",
      "강릉시",
      "동해시",
      "태백시",
      "속초시",
      "삼척시",
      "홍천군",
      "횡성군",
      "영월군",
      "평창군",
      "정선군",
      "철원군",
      "화천군",
      "양구군",
      "인제군",
      "고성군",
      "양양군",
    ],
    충청북도: ["청주시", "충주시", "제천시", "보은군", "옥천군", "영동군", "진천군", "괴산군", "음성군", "단양군"],
    충청남도: [
      "천안시",
      "공주시",
      "보령시",
      "아산시",
      "서산시",
      "논산시",
      "계룡시",
      "당진시",
      "금산군",
      "부여군",
      "서천군",
      "청양군",
      "홍성군",
      "예산군",
      "태안군",
    ],
    전라북도: ["전주시", "군산시", "익산시", "정읍시", "남원시", "김제시", "완주군", "진안군", "무주군", "장수군", "임실군", "순창군", "고창군", "부안군"],
    전라남도: [
      "목포시",
      "여수시",
      "순천시",
      "나주시",
      "광양시",
      "담양군",
      "곡성군",
      "구례군",
      "고흥군",
      "보성군",
      "화순군",
      "장흥군",
      "강진군",
      "해남군",
      "영암군",
      "무안군",
      "함평군",
      "영광군",
      "장성군",
      "완도군",
      "진도군",
      "신안군",
    ],
    경상북도: [
      "포항시",
      "경주시",
      "김천시",
      "안동시",
      "구미시",
      "영주시",
      "영천시",
      "상주시",
      "문경시",
      "경산시",
      "군위군",
      "의성군",
      "청송군",
      "영양군",
      "영덕군",
      "청도군",
      "고령군",
      "성주군",
      "칠곡군",
      "예천군",
      "봉화군",
      "울진군",
      "울릉군",
    ],
    제주특별자치도: ["제주시", "서귀포시"],
  };
  const neighborhoods = {
    강남구: ["개포동", "논현동", "대치동", "도곡동", "삼성동", "세곡동", "수서동", "신사동", "압구정동", "역삼동", "일원동", "청담동"],
    강동구: ["강일동", "고덕동", "길동", "둔촌동", "명일동", "상일동", "성내동", "암사동", "천호동"],
    강북구: [
      "미아동",
      "번동",
      "수유동",
      "우이동",
      "인수동",
      "강북동",
      "수유1동",
      "수유2동",
      "수유3동",
      "삼각산동",
      "미아1동",
      "미아2동",
      "미아3동",
      "미아4동",
      "삼양동",
      "송중동",
      "송천동",
      "삼각산1동",
      "삼각산2동",
      "삼각산3동",
    ],
    강서구: [
      "가양동",
      "개화동",
      "공항동",
      "과해동",
      "내발산동",
      "등촌동",
      "마곡동",
      "방화동",
      "염창동",
      "오곡동",
      "오쇠동",
      "외발산동",
      "화곡동",
      "화곡본동",
      "화곡동",
      "화곡본동",
    ],
    관악구: ["낙성대동", "난곡동", "난우동", "낙성대동", "난곡동", "난향동", "난곡동", "낙성대동", "난우동", "낙성대동", "난곡동", "난우동", "신림동"],
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

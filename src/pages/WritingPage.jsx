import React, { useEffect, useState } from "react";
import ImageUpload from "../components/ImageUpload";
import { styled } from "styled-components";
import Location from "../components/Location";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";

const WritingPage = () => {
  const postSlice = useSelector((state) => state.post);
  const LocationSlice = postSlice.tradeLocation;
  const [userTradeLocation, setUserTradeLocation] = useState("상세주소를 입력해주세요.");

  // 취소 버튼 클릭

  // 완료 버튼 클릭

  // 상세주소 입력 input placeholder 설정
  useEffect(() => {
    if (LocationSlice.si && LocationSlice.gu && LocationSlice.dong) {
      const si = LocationSlice.si;
      const gu = LocationSlice.gu;
      const dong = LocationSlice.dong;
      setUserTradeLocation(`${si} ${gu} ${dong}의 상세 주소를 입력해주세요.`);
    }
  }, [LocationSlice]);

  return (
    <>
      <NavBar />
      <StContainer>
        <StBtnBox>
          <StCancleBtn type="button">취소</StCancleBtn>
          <StCompleteBtn type="button">완료</StCompleteBtn>
        </StBtnBox>
        <ImageUpload />
        <StTitleInput type="text" placeholder="글 제목" />
        <StPriceBox>
          <StPriceInput type="text" placeholder="가격" />
          <label htmlFor="isSharing">
            <StSharingInput type="checkBox" id="isSharing" />
            나눔
          </label>
        </StPriceBox>
        <StTextArea rows={12} placeholder="게시글 내용을 작성해주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)"></StTextArea>
        <div>
          <p>거래 희망 장소</p>
          <Location />
          <StSpecificLocationInput type="text" placeholder={userTradeLocation} required />
        </div>
      </StContainer>
    </>
  );
};

export default WritingPage;

const StContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  padding: 60px 90px;
  box-sizing: border-box;
  /* box-shadow: 0px 0px 21px 0px #00000040; */
  @media (max-width: 1330px) and (min-width: 400px) {
    max-width: 900px;
  }
`;

const StBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > button {
    font-size: 18px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    background-color: transparent;
    padding: 10px;
  }
`;

const StCancleBtn = styled.button``;

const StCompleteBtn = styled.button`
  color: #ff7e36;
`;

const StTitleInput = styled.input`
  font-size: 18px;
  border: none;
  border-bottom: 1px solid #e9ecef;
  width: 100%;
  padding: 10px 5px;
  box-sizing: border-box;
`;

const StPriceBox = styled.div`
  border-bottom: 1px solid #e9ecef;
  padding: 10px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
`;

const StPriceInput = styled.input`
  border: none;
  font-size: 16px;
  font-size: 16px;
`;

const StSharingInput = styled.input`
  width: 18px;
  height: 18px;
  position: relative;
  top: 2px;
  right: 2px;
`;

const StTextArea = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 1px solid #e9ecef;
  padding: 10px 5px;
  font-size: 18px;
`;

const StSpecificLocationInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #e9ecef;
  padding: 10px 5px;
  font-size: 16px;
  margin-top: 10px;
`;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function AddressSearch() {
//   const [address, setAddress] = useState("");
//   const [results, setResults] = useState([]);
//   const myApiKey = "devU01TX0FVVEgyMDIzMDUxMzIzNTgzNDExMzc2OTY=";

//   useEffect(() => {
//     const fetchAddress = async () => {
//       if (address && address.length >= 2) {
//         try {
//           const response = await axios.get(`http://localhost:3001/api?keyword=${address}`);
//           const newResults = response.data.results.juso || [];
//           setResults((prevResults) => [...newResults]);
//         } catch (error) {
//           console.error("Error fetching data: ", error);
//         }
//       } else {
//         setResults([]);
//       }
//     };

//     fetchAddress();
//   }, [address]);

//   return (
//     <div>
//       <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="주소를 입력하세요" />
//       {results.length > 0 ? results.map((result) => <div key={result.zipNo}>여기임 - {result.roadAddr}</div>) : <div>검색 결과가 없습니다.</div>}
//     </div>
//   );
// }

// export default AddressSearch;

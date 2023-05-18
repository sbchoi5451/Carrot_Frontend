import React, { useEffect, useState } from "react";
import ImageUpload from "../components/writing/ImageUpload";
import { styled } from "styled-components";
import Location from "../components/Location";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import { fetchAddPost } from "../api/addPostApi";
import Cookies from "js-cookie";
import useEditInput from "../hooks/useEditInput";
import useEditToggle from "../hooks/useEditToggle";
import { useQuery, useQueryClient } from "react-query";
import { editTradeState, getDetail, modifyPost, updateMyPost } from "../api/postApi";
import { useParams } from "react-router";
import { useLocation, useNavigate } from 'react-router-dom';

const EditPage = () => {

  const navigation = useNavigate()
  const location = useLocation();
  const savedData = location.state?.savedData;
  const beforeTitle = savedData?.postTitle
  const beforePrice = savedData?.postPrice
  const beforeContent = savedData?.postContent
  const beforeIsShared = savedData?.isShared
  const beforeSpecificLocation = savedData?.specificLocation
  const beforeTradestate = savedData?.tradeState

  console.log(savedData)

  // 게시글 입력값 상태
  const [title, handleChangeTitle, , titleRef] = useEditInput(beforeTitle);
  const [price, handleChangePrice, , priceRef] = useEditInput(beforePrice);
  const [isShared, handleChangeShared] = useEditToggle(beforeIsShared);
  const [content, handleChangeContent, , contentRef] = useEditInput(beforeContent);
  const [specificLocation, handleChangeSpecificLocation, , specificLocationRef] = useEditInput(beforeSpecificLocation);
  const [tradeState, setTradeState] = useState(beforeTradestate)

  const options = [
    { value: 0, label: '판매중' },
    { value: 1, label: '예약중' },
    { value: 2, label: '거래완료' }
  ]

  const onTradestateChange = (e) => {
    setTradeState(e.target.value)
  }

  // useEffect(() => {

  // }, [editData])

  // 주소 입력 palceholder 상태
  const [userTradeLocation, setUserTradeLocation] = useState("상세주소를 입력해주세요.");

  // post slice 가져오기
  const postSlice = useSelector((state) => state.post);
  const locationSlice = postSlice.tradeLocation;
  const imageSlice = postSlice.image;

  const params = useParams();
  const postId = params.id;

  // 주소 문자열로 합치기
  const tradeLocation = `${locationSlice.si} ${locationSlice.gu} ${locationSlice.dong}`;

  // 취소 버튼 클릭시
  const handleCancleBtnClick = () => {
    window.history.back();
  };

  // 완료 버튼 클릭시
  const handlePostCompleteBtnClick = async () => {
    const newPost = {
      postTitle: title,
      postContent: content,
      postPrice: price,
      tradeLocation,
      specificLocation,
      isShared,
    }
    const editStatus = {
      tradeState: tradeState
    }
    await editTradeState(editStatus)
    await modifyPost(postId, newPost)
    navigation(`/detail/${postId}`)
  };

  // 상세주소 입력 input placeholder 설정
  useEffect(() => {
    if (locationSlice.si && locationSlice.gu && locationSlice.dong) {
      const si = locationSlice.si;
      const gu = locationSlice.gu;
      const dong = locationSlice.dong;
      setUserTradeLocation(`${si} ${gu} ${dong}의 상세 주소를 입력해주세요.`);
    }
  }, [locationSlice]);

  return (
    <>
      <NavBar />
      <StContainer>
        <StBtnBox>
          <StCancleBtn type="button" onClick={handleCancleBtnClick}>
            취소
          </StCancleBtn>
          <StCompleteBtn type="button" onClick={handlePostCompleteBtnClick}>
            완료
          </StCompleteBtn>
        </StBtnBox>
        <ImageUpload />
        
        <StTitleInput value={title} onChange={handleChangeTitle} type="text" placeholder="글 제목" />
        <select onChange={onTradestateChange} value={tradeState}>
          {options?.map(item => {
            return <option key={item.value} value={item.value}>{item.label}</option>
          })}
        </select>
        <StPriceBox>
          <StPriceInput value={price} onChange={handleChangePrice} type="text" placeholder="가격" />
          <label htmlFor="isSharing">
            <StSharingInput checked={isShared} onChange={handleChangeShared} type="checkBox" id="isSharing" />
            나눔
          </label>
        </StPriceBox>
        <StTextArea
          value={content}
          onChange={handleChangeContent}
          rows={12}
          placeholder="게시글 내용을 작성해주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)"
        ></StTextArea>
        <div>
          <p>거래 희망 장소</p>
          <Location />
          <StSpecificLocationInput value={specificLocation} onChange={handleChangeSpecificLocation} type="text" placeholder={userTradeLocation} required />
        </div>
      </StContainer>
    </>
  );
};

export default EditPage;

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
  width: 90%;
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
import React, { useEffect, useState } from "react";
import * as st from "./slideST";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getPost, getRecommendPost } from "../../api/postApi";

function MainSlide() {
  const navigation = useNavigate();

  const naviDetailBtn = ({ id }) => {
    navigation(`/detail/${id}`);
  };

  const [currIndex, setCurrIndex] = useState(0);

  const queryClient = useQueryClient();

  const { data: slideData = [] } = useQuery("mainSlide", getPost); //recommend 로 수정 필요

  const sortingData = slideData?.sort((a, b) => b.interestCount - a.interestCount)?.slice(0, 3);

  // 사진 인덱스 번호
  let number = 1;

  const prevHandler = () => {
    setCurrIndex((index) => (index === 0 ? sortingData.length - 1 : index - 1));
  };

  const nextHandler = () => {
    setCurrIndex((index) => (index === sortingData.length - 1 ? 0 : index + 1));
  };

  return (
    <>
      <st.SlideLayout>
        <st.SlideBody>
          <st.LeftMoveBtn onClick={prevHandler} />
          <st.Wrapper width="70%">
            {sortingData?.map((item, index) => (
              <st.SlideContent key={index} active={index === currIndex ? "true" : "false"} onClick={() => naviDetailBtn({ id: item.id })}>
                <div className="img" justify="flex-end">
                  <st.ImgStyle src={`/img/tradeImg${number++}.jpeg`} />
                </div>

                <div className="content" justify="flex-start">
                  <st.TextStyle>
                    <h3>{item.postTitle}</h3>
                    <p className="price">{`${parseInt(item.postPrice).toLocaleString()}원`}</p>
                    <p className="tradelocation">{item.tradeLocation}</p>
                    <p className="interestcount">{`관심 ${item.interestCount}`}</p>
                  </st.TextStyle>
                </div>
              </st.SlideContent>
            ))}
          </st.Wrapper>
          <st.RightMoveBtn onClick={nextHandler} />
        </st.SlideBody>
      </st.SlideLayout>
    </>
  );
}

export default MainSlide;

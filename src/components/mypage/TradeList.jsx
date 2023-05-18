import React from "react";
import { fetchTradeList } from "../../api/mypageApi";
import { useQuery } from "react-query";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const TradeList = () => {
  const navigate = useNavigate();
  const { data, error } = useQuery("fetchTradeList", fetchTradeList);

  // 에러일 때
  if (error) {
    return <StEmptyList>판매 내역을 읽어들일 수 없습니다. {console.log(error)}</StEmptyList>;
  }
  // 로딩 중일 때
  if (!data) {
    return <StEmptyList>Loading...</StEmptyList>;
  }

  // 게시글 눌렀을 때
  const handlePostClick = (postId) => {
    navigate(`/detail/${postId}`);
  };

  const tradeList = data.data;
  console.log(tradeList);

  return (
    <>
      <StContainer>
        {tradeList.length === 0 ? (
          <StEmptyList>판매목록이 아직 없네요!</StEmptyList>
        ) : (
          tradeList.map((post) => {
            return (
              <StTradeList key={post.postId} onClick={() => handlePostClick(post.postId)}>
                <StTradeImg src={post.imagePathList ? post.imagePathList[0] : "/img/dang.png"} alt="상품 이미지"></StTradeImg>
                <div>
                  <StPostTitle>{post.postTitle}</StPostTitle>
                  <StPostLocation>
                    {post.tradeLocation} / {post.tradeState === 0 ? "판매중" : post.tradeState === 1 ? "예약중" : "판매완료"}{" "}
                  </StPostLocation>
                  {/* <StPostTradeState>{post.tradeState === 0 ? "판매중" : post.tradeState === 1 ? "예약중" : "판매완료"}</StPostTradeState> */}
                  <StPostPrice>{post.postPrice} 원</StPostPrice>
                </div>
              </StTradeList>
            );
          })
        )}
      </StContainer>
    </>
  );
};

export default TradeList;

const StContainer = styled.div`
  /* border: 1px solid red; */
  padding: 10px 50px;
  color: #515254;
`;

const StEmptyList = styled.div`
  border: 2px solid #e9ecef;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  padding: 15px 10px;
`;

const StTradeList = styled.div`
  border: 2px solid #e9ecef;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  padding: 15px 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const StTradeImg = styled.img`
  display: block;
  width: 150px;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #e9ecef;
  margin-right: 20px;
  @media (max-width: 1330px) and (min-width: 400px) {
    font-size: 18px;
  }
`;

const StPostTitle = styled.p`
  font-size: 24px;
  margin: 0;
  margin-bottom: 8px;
  @media (max-width: 1330px) and (min-width: 400px) {
    font-size: 18px;
  }
`;
const StPostLocation = styled.span`
  color: #848484;
  margin: 0;
`;

const StPostTradeState = styled.span`
  margin: 0;
`;

const StPostPrice = styled.p`
  font-size: 24px;
  color: #383a3d;
  font-weight: 600;
  margin: 0;
  @media (max-width: 1330px) and (min-width: 400px) {
    font-size: 19px;
  }
`;

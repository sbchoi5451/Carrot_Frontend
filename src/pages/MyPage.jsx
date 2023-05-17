import React from "react";
import NavBar from "../components/NavBar";
import { styled } from "styled-components";
import useToggle from "../hooks/useToggle";
import InterestedList from "../components/mypage/InterestedList";
import { AiOutlineHeart } from "react-icons/ai";
import { BsReceipt } from "react-icons/bs";
import { BsBagCheck } from "react-icons/bs";
import { BsChatLeftDots } from "react-icons/bs";
import TradeList from "../components/mypage/TradeList";

function MyPage() {
  // 관심목록 버튼 토글
  const [isLikeListToggled, handleLikeListToggled] = useToggle();
  // 판매내역 버튼 토글
  const [isTradeListToggled, handleTradeListToggled] = useToggle();
  // 구매내역 버튼 토글
  const [isPurchaseListToggled, handlePurchaseListToggled] = useToggle();

  // 관심목록 버튼 클릭 시
  const handleLikeListClick = () => {
    handleLikeListToggled();
  };

  // 판매내역 버튼 클릭 시
  const handleTradeListClick = () => {
    handleTradeListToggled();
  };

  // 구매내역 버튼 클릭 시
  const handlePurchaseListClick = () => {
    handlePurchaseListToggled();
  };

  return (
    <>
      <NavBar />
      <StContainer>
        <StUserBox>
          <StLogo src="img/logindefault.png" alt="당근마켓" />
          <p>user name 님</p>
        </StUserBox>
        <StMainText>내 게시물</StMainText>
        <div>
          <StLikeListBox>
            <AiOutlineHeart />
            <StCommonBtn aria-label="클릭하여 관심목록을 볼 수 있습니다." onClick={handleLikeListClick}>
              관심목록
            </StCommonBtn>
            {isLikeListToggled ? <InterestedList /> : null}
          </StLikeListBox>
          <StLikeListBox>
            <BsReceipt />
            <StCommonBtn aria-label="클릭하여 판매내역을 볼 수 있습니다." onClick={handleTradeListClick}>
              판매내역
            </StCommonBtn>
            {isTradeListToggled ? <TradeList /> : null}
          </StLikeListBox>
          <StLikeListBox>
            <BsBagCheck />
            <StCommonBtn aria-label="클릭하여 구매내역을 볼 수 있습니다." onClick={handlePurchaseListClick}>
              구매내역
            </StCommonBtn>
          </StLikeListBox>
          <StLikeListBox>
            <BsChatLeftDots />
            <StCommonBtn aria-label="클릭하여 채팅목록을 볼 수 있습니다.">채팅목록</StCommonBtn>
          </StLikeListBox>
        </div>
      </StContainer>
    </>
  );
}

export default MyPage;

const StContainer = styled.div`
  margin-top: 100px;
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  padding: 60px 90px;
  color: #424245;
  @media (max-width: 1330px) and (min-width: 400px) {
    max-width: 900px;
  }
`;

const StUserBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  & > p {
    line-height: 32px;
    font-size: 32px;
    font-weight: 600;
  }
  @media (max-width: 1330px) and (min-width: 400px) {
    max-width: 900px;
    & > p {
      line-height: 19px;
      font-size: 20px;
    }
  }
`;

const StLogo = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 10px;
  box-sizing: border-box;
  margin-top: 12px;
  margin-right: 16px;
  @media (max-width: 1330px) and (min-width: 400px) {
    width: 40px !important;
    height: 40px !important;
    margin-right: 10px;
  }
`;

const StMainText = styled.p`
  font-size: 26px;
  padding: 10px 0;
  border-bottom: 1px solid #e9ecef;
  @media (max-width: 1330px) and (min-width: 400px) {
    font-size: 18px;
  }
`;

const StLikeListBox = styled.div`
  margin-bottom: 14px;

  & > svg {
    position: relative;
    top: 13px;
    width: 40px;
    height: 40px;
    font-weight: 600;
    padding-left: 10px;
    margin-right: 13px;
  }
  div {
    background-color: red;
  }
  @media (max-width: 1330px) and (min-width: 400px) {
    & > svg {
      top: 3px;
      position: relative;
      margin-right: 10px;
      width: 20px;
      height: 20px;
    }
  }
`;

// 버튼 공통 스타일링
const StCommonBtn = styled.button`
  color: #424245;
  cursor: pointer;
  border: none;
  font-size: 26px;
  background-color: transparent;
  @media (max-width: 1330px) and (min-width: 400px) {
    font-size: 18px;
  }
`;

import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import useToggle from "../hooks/useToggle";
import InterestedList from "../components/mypage/InterestedList";
import { AiOutlineHeart } from "react-icons/ai";
import { BsReceipt } from "react-icons/bs";
import { BsBagCheck } from "react-icons/bs";
import { BsChatLeftDots } from "react-icons/bs";
import TradeList from "../components/mypage/TradeList";
import { fetchUserInfo } from "../api/signUpApi";
import { fetchInterestedList } from "../api/mypageApi";
import Button from "../components/Button";

function MyPage() {
  // 관심목록 버튼 토글
  const [isLikeListToggled, handleLikeListToggled] = useToggle();
  // 판매내역 버튼 토글
  const [isTradeListToggled, handleTradeListToggled] = useToggle();
  // 구매내역 버튼 토글
  const [isPurchaseListToggled, handlePurchaseListToggled] = useToggle();

  const navigate = useNavigate();

  const userInfo = fetchUserInfo();
  // 유저 정보 받아오기
  useEffect(() => {
    fetchUserInfo();
  }, [userInfo]);

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

  // 메인 페이지 이동 버튼 prop
  const mainPageBtnStyle = { backgroundColor: "#ff7e36", content: "홈페이지 가기", maxWidth: "250px", mediaSize: "200px" };

  return (
    <>
      {userInfo ? (
        <>
          <NavBar />
          <StContainer>
            <StUserBox>
              <StLogo src="img/logindefault.png" alt="당근마켓" />
              <p>{`${userInfo.sub} 님`}</p>
            </StUserBox>
            <StMainText>내 게시물</StMainText>
            <div>
              <StLikeListBox onClick={handleLikeListClick}>
                <AiOutlineHeart />
                <StCommonBtn aria-label="클릭하여 관심목록을 볼 수 있습니다.">관심목록</StCommonBtn>
                {isLikeListToggled ? <InterestedList /> : null}
              </StLikeListBox>
              <StLikeListBox onClick={handleTradeListClick}>
                <BsReceipt />
                <StCommonBtn aria-label="클릭하여 판매내역을 볼 수 있습니다.">판매내역</StCommonBtn>
                {isTradeListToggled ? <TradeList /> : null}
              </StLikeListBox>
              <StLikeListBox onClick={handlePurchaseListClick}>
                <BsBagCheck />
                <StCommonBtn aria-label="클릭하여 구매내역을 볼 수 있습니다.">구매내역</StCommonBtn>
                {isPurchaseListToggled ? <div>구매내역이 없습니다.</div> : null}
              </StLikeListBox>
              <StLikeListBox>
                <BsChatLeftDots />
                <StCommonBtn aria-label="클릭하여 채팅목록을 볼 수 있습니다.">채팅목록</StCommonBtn>
              </StLikeListBox>
            </div>
          </StContainer>
        </>
      ) : (
        <StErrorContainer>
          <p>올바르지 않은 접근입니다.</p>
          <Button btnStyle={mainPageBtnStyle} onClick={() => navigate("/")} />
        </StErrorContainer>
      )}
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

const StErrorContainer = styled.div`
  margin: 200px auto;
  box-sizing: border-box;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  padding: 60px 90px;
  color: #424245;
  font-size: 32px;
  font-weight: 600;
  & > p:nth-child(1) {
    margin-bottom: 20px;
  }
  & > p:nth-child(2) {
    margin-top: 0;
  }
  @media (max-width: 1330px) and (min-width: 400px) {
    max-width: 900px;
    padding: 40px 10px;
    font-size: 22px;
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

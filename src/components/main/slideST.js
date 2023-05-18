import styled, { css } from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const SlideLayout = styled.div`
  background-color: #fbf7f2;
  width: 100%;
  margin-top: 150px;
  height: 550px;
  display: flex;
  justify-content: center;
`;

export const SlideBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
`;

export const TextStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: transparent;
  border-radius: 10px;
  max-width: 400px;
  max-height: 450px;
`;

export const LeftMoveBtn = styled(BsChevronLeft)`
  font-size: 50px;
  padding-left: 15px;
  &:hover {
    cursor: pointer;
  }
`;

export const RightMoveBtn = styled(BsChevronRight)`
  font-size: 50px;
  padding-left: 15px;
  &:hover {
    cursor: pointer;
  }
`;

export const SlideContent = styled.div`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.active === "true" ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.active === "true" &&
    css`
      animation: slide-in 0.5s ease-in-out;
    `}

  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateX(-15px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .img {
    width: 70%;
    margin-left: 20px;
  }

  .content {
    width: 30%;
    margin-left: 20px;

    .price {
      font-size: 15px;
      font-weight: bold;
    }

    .tradelocation {
      font-size: 15px;
    }

    .interestcount {
      font-size: 12px;
      color: gray;
    }
  }
`;

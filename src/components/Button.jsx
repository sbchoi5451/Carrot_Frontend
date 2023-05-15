import React from "react";
import styled from "styled-components";

const Button = ({ btnStyle }) => {
  const content = btnStyle?.content || "내용 없음";
  return (
    <StBtn style={btnStyle} type="button">
      {content}
    </StBtn>
  );
};

export default Button;

const StBtn = styled.button`
  width: 100%;
  height: 100%;
  max-width: ${(props) => (props.style.maxWidth ? props.style.maxWidth : "100%")};
  border: none;
  background-color: ${(props) => props.style.backgroundColor};
  border-radius: 12px;
  color: ${(props) => (props.style.color ? props.style.color : "#FFFFFF")};
  padding: ${(props) => (props.style.content === "중복 확인" ? "15px 10px" : "15px 64px")};
  font-size: 20px;
  font-weight: 700;
  line-height: 18.2px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: ${(props) => (props.style.backgroundColor === "#ff7e36" ? "#fba97d" : "#9b9b9b")}!important;
  }
  @media (max-width: 1330px) and (min-width: 400px) {
    font-size: 15px;
    padding: 11px 0;
    max-width: ${(props) => (props.style.mediaSize ? props.style.mediaSize : "46%")}!important;
    background-color: #1e1919;
  }
`;

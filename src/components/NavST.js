import styled from "styled-components";

export const NavLayout = styled.div`
position: fixed;
top: 0;
display: flex;
width: 1200px;
height: 100px;
align-items: center;
justify-content: space-between;
background-color: white;
`

export const MenuStyle = styled.div`
display: flex;
align-items: center;
justify-content: ${props => props.justifycontent ? props.justifycontent : 'space-between'};
width: ${props => props.width};
padding-right: ${props => props.paddingright ? props.paddingright : 0}
`

export const ImgStyle = styled.img`
  width: ${(props) => props.width};
  &:hover {
    cursor: pointer;
  }
`;

export const InputStyle = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  border: transparent;
  background-color: #f2f3f6;
  font-size: 15px;
`;

export const TextStyle = styled.div`
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.fontsize ? props.fontsize : "20px")};
  font-weight: ${(props) => (props.fontweight ? props.fontweight : "bold")};

  &:hover {
    color: ${(props) => (props.hovercolor ? props.hovercolor : "black")};
    cursor: pointer;
  }
`;

export const LoginBtn = styled.button`
  width: 120px;
  height: 32px;
  color: black;
  font-size: 15px;
  font-weight: bold;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #f2f3f6;
    border: transparent;
    color: black;
  }
`;

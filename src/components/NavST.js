import styled from 'styled-components'

export const NavLayout = styled.div`
position: fixed;
top: 0;
display: flex;
width: 1440px;
height: 100px;
align-items: center;
justify-content: space-around;
background-color: black;
`

export const MenuStyle = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: ${props => props.width};
`

export const ImgStyle = styled.img`
width: ${props => props.width};
margin-top: 15px;

&:hover {
    cursor: pointer;
}
`

export const InputStyle = styled.input`
width: 250px;
height: 30px;
border-radius: 5px;
border: transparent;
background-color: #f2f3f6;
font-size: 15px;
`

export const TextStyle = styled.div`
color: ${props => props.color ? props.color : '#4d5159'};
font-size: ${props => props.fontsize ? props.fontsize : '25px'};
font-weight: ${props => props.fontweight ? props.fontweight : 'bold'};

&:hover {
    color: ${props => props.hovercolor ? props.hovercolor : '#8c8c8c'};
    cursor: pointer;
}
`

export const LoginBtn = styled.button`
width: 120px;
height: 35px;
color: white;
font-size: 15px;
font-weight: bold;
background-color: transparent;
border: 1px solid white;
border-radius: 5px;

&:hover {
    cursor: pointer;
    background-color: #f2f3f6;
    border: transparent;
    color: black;
}
`
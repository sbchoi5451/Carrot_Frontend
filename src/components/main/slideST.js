import styled from 'styled-components'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const SlideLayout = styled.div`
background-color: #F3DBDB;
width: 90%;
margin-top:150px;
height: 650px;
display: flex;
justify-content: center;
`

export const SlideBody = styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-around;
`

export const Wrapper = styled.div`
width: ${props => props.width};
height: ${props => props.height};
display: flex;
align-items: center;
justify-content: ${props => props.justify};
`

export const TextStyle = styled.div`
display: flex;
flex-direction: column;
`

export const ImgStyle = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`

export const LeftMoveBtn = styled(BsChevronLeft)`
font-size: 50px;
padding-left: 15px;
&:hover {
    cursor: pointer;
}
`

export const RightMoveBtn = styled(BsChevronRight)`
font-size: 50px;
padding-left: 15px;
&:hover {
    cursor: pointer;
}
`
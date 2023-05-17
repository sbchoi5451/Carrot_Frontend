import styled from 'styled-components'
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

export const Layout = styled.div`
width: 90%;
margin-top:150px;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.wrap {
    width: 65%;
}
`

export const DetailContent = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`

export const Content = styled.div`
display: flex;
width: 100%;
height: auto;
align-items: ${props => props.align ? props.align : 'center'};
justify-content: space-between;
margin-top: 30px;
flex-direction: ${props => props.flexdirection ? props.flexdirection : 'row'};
border-top: ${props => props.bordertop};
border-bottom: ${props => props.borderbottom};
padding-top: 20px;
padding-bottom: 10px;

.title {
font-weight: bold;
font-size: 20px;
margin-bottom: 10px;
}

.location {
    font-size: 12px;
}

.category {
font-size: 15px;
margin-bottom: 10px;
}

.price {
font-size: 15px;
font-weight: bold;
margin-bottom: 15px;
}

.content {
font-size: 20px;
margin-bottom: 10px;
}

.interest {
font-size: 15px;
color: grey;
}
`

export const DetailImgWrap = styled.div`
display: flex;
width: 80%;
`

export const DetailImg = styled.img`
width: 100%;
object-fit: contain;
border-radius: 10px;
`

export const Profile = styled.div`
display: flex;
flex-direction: row;
`

export const ProfileContent = styled.div`
margin-left: 10px;
font-weight: bold;
display: flex;
flex-direction: column;
justify-content: center;

.ID {
    font-size: 20px;
}

.Location {
    font-size: 15px;
}
`

export const ProfileImg = styled.img`
width: 50px;
border: 1px solid black;
`

export const StarFalse = styled(AiOutlineHeart)`
color: #D91818;
display: flex;
align-items: center;
justify-content: center;
font-size: 40px;
`

export const StarTrue = styled(AiTwotoneHeart)`
color: #D91818;
display: flex;
align-items: center;
justify-content: center;
font-size: 40px;
`

export const MoreContent = styled.div`
width: 100%;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: space-between;

.title {
    font-weight: bold;
    font-size: 18px;
}

.link {
    font-size: 15px;
    color: #D91818;
    &:hover{
        cursor: pointer;
        font-weight: bold;
    }
}
`

export const MoreWrap = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 30px;
width: 100%;
margin: 0 auto;
margin-top: 20px;
`


export const MoreItem = styled.div`
display: flex;
flex-direction: column;
`

export const ImageContainer = styled.div`
width: 100%;
height: auto;
`;

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 10px;

&:hover {
cursor: pointer;
}
`

export const MoreBody = styled.div`
text-align: left;

.title {
    font-size: 15px;
    font-weight: bold;
}

.price {
    font-size: 12px;
}

.address {
    font-size: 12px;
}

.interest {
    font-size: 12px;
    color: gray;
}
`

export const modifyBtn = styled.div`
margin-bottom: 50px;
color: #D91818;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
div {
    font-size: 15px;

    span {
        
    &:hover {
        cursor: pointer;
        font-weight: bold;
    }
}

.deletebtn {
 margin-left: 7px;
}
}


`

export const extraContent = styled.div`
div {
    font-size: 15px;
    height: 100%;
    margin-top: 5px;
    font-weight: bold;
    text-align: center;
}
`
import styled from 'styled-components'

export const Layout = styled.div`
width: 100%;
margin-top:150px;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.wrap {
    width: 95%;
}
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

`

export const MoreWrap = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
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
    font-size: 18px;
}

.price {
    font-size: 15px;
}

.address {
    font-size: 15px;
}

.interest {
    font-size: 12px;
    color: gray;
}
`
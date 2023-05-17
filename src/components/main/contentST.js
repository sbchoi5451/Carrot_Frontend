import styled from 'styled-components'

export const Layout = styled.div`
width: 100%;
margin-top: 100px;
text-align: center;
`

export const Contanier = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 50px;
width: 100%;
margin: 0 auto;
`

export const Item = styled.div`
display: flex;
flex-direction: column;
/* align-items: flex-start; */
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
`;

export const DataTitle = styled.div`
margin-top: 10px;
font-size: 20px;
`

export const DataPrice = styled.div`
font-size: 15px;
margin-top: 10px;
font-weight: bold;
`

export const DataAddress = styled.div`
font-size: 15px;
margin-top: 5px;
`

export const DataInterest = styled.div`
font-size: 15px;
margin-top: 5px;
color: grey;
`
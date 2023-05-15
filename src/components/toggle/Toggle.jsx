import React from 'react'
import { BsChatDots } from "react-icons/bs";
import styled from 'styled-components'

function Toggle() {
    return (
        <ChatBtn />
    )
}

export default Toggle

const ChatBtn = styled(BsChatDots)`
font-size: 40px;
position: fixed;
bottom: 50px;
right: 500px;

&:hover {
    cursor: pointer;
}
`
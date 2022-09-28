import React from 'react';
import styled from 'styled-components';
import {MdChatBubbleOutline} from 'react-icons/md';
import {HiOutlineClock} from 'react-icons/hi';
import {AiOutlineStar} from 'react-icons/ai';
import {BsThreeDots} from 'react-icons/bs';

const Headerstyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    height: 50px;
`;


function Header(){
    return (
        <Headerstyle>
            <div>
                시작하기
            </div>
            <div>
                공유
                <MdChatBubbleOutline size={30}/>
                <HiOutlineClock />
                <AiOutlineStar />
                <BsThreeDots />
            </div>
        </Headerstyle>
    )
}

export default Header;
import React from 'react';
import styled from 'styled-components';
import {MdChatBubbleOutline} from 'react-icons/md';
import {HiOutlineClock} from 'react-icons/hi';
import {AiOutlineStar} from 'react-icons/ai';
import {BsThreeDots} from 'react-icons/bs';
import ReactTooltip from 'react-tooltip';

const Headerstyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    height: 50px;
`;

const HeaderButtonstyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 10px 5px;
    height: 25px;
    width: 25px;
    
    &:hover{
        background: rgba(55, 53, 47, 0.08);
        color: rgb(55, 53, 47);
    }
    //border: solid black 3px;
`

const Tmpdiv = styled.div`
    display: flex;
`


function Header(){
    function newDateformat(){
        const today = new Date();
        return `${today.getMonth()}월 ${today.getDate()}일 편집`;
    }
    return (
        <Headerstyle>
            <div>
                <HeaderButtonstyle style={{width: '80px'}}>
                    <span style={{fontSize: '15px'}}>시작하기</span>
                </HeaderButtonstyle>
            </div>
            <Tmpdiv>
                <HeaderButtonstyle style={{width: '100px'}}>
                    <span data-tip data-for='bottom' style={{fontSize: '12px'}} >
                        {newDateformat()}
                    </span>
                    <ReactTooltip id='bottom' place='bottom' effect='solid'>
                        이것은 툴팁입니다
                    </ReactTooltip>
                </HeaderButtonstyle>
                <HeaderButtonstyle>
                    <span style={{fontSize: '12px'}}>공유</span>
                </HeaderButtonstyle>
                <HeaderButtonstyle>
                    <MdChatBubbleOutline size={20}/>
                </HeaderButtonstyle>
                <HeaderButtonstyle>
                    <HiOutlineClock size={20}/>
                </HeaderButtonstyle>
                <HeaderButtonstyle>
                    <AiOutlineStar size={20}/>
                </HeaderButtonstyle>
                <HeaderButtonstyle>
                    <BsThreeDots size={20}/>
                </HeaderButtonstyle>
            </Tmpdiv>
        </Headerstyle>

        
    )
}

export default Header;
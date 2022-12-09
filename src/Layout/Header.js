import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import {MdChatBubbleOutline} from 'react-icons/md';
import {HiOutlineClock} from 'react-icons/hi';
import {AiOutlineStar} from 'react-icons/ai';
import {BsThreeDots} from 'react-icons/bs';
import Tooltip from '@mui/material/Tooltip';
import { IconButton } from '@mui/material';
import { DrawerOpenContext } from './Contents';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';

const Headerstyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 84.5vw;
    height: 7vh;
    position: fixed;
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
    &.drawerController{
        visibility: ${props => props.isOpen ? "collapse" : "visible"};
    }
`

const Tmpdiv = styled.div`
    display: flex;
`


function Header({title}){
    const [toggleDrawer, open] = useContext(DrawerOpenContext);
    function newDateformat(){
        const today = new Date();
        return `${today.getMonth()}월 ${today.getDate()}일 편집`;
    }
    return (
        <Headerstyle>
            <Tmpdiv>
                <HeaderButtonstyle className='drawerController' style={{width: '40px'}} isOpen={open} onClick={toggleDrawer}>
                    <Tooltip title="사이드바 열기" placement='right'>
                        <IconButton>
                            <ViewHeadlineIcon />
                        </IconButton>
                    </Tooltip>
                </HeaderButtonstyle>
                <HeaderButtonstyle style={{width: '40px'}}>
                    <IconButton>
                        <span style={{fontSize: '15px'}}>{title}</span>
                    </IconButton>
                </HeaderButtonstyle>
            </Tmpdiv>
            <Tmpdiv>
                <HeaderButtonstyle style={{width: '100px'}}>
                    <Tooltip title={newDateformat()} placement="bottom">
                        <span style={{fontSize: '12px'}} >
                            {newDateformat()}
                        </span>
                    </Tooltip>
                </HeaderButtonstyle>
                <HeaderButtonstyle>
                    <Tooltip title="웹에서 공유하거나 게시" placement='bottom'>
                        <span style={{fontSize: '12px'}}>공유</span>
                    </Tooltip>
                </HeaderButtonstyle>
                <HeaderButtonstyle>
                    <Tooltip title="댓글 사이드바 열기" placement='bottom'>
                        <IconButton>
                            <MdChatBubbleOutline size={20}/>
                        </IconButton>
                    </Tooltip>
                </HeaderButtonstyle>
                <HeaderButtonstyle>
                    <Tooltip title="업데이트 사이드바 열기" placement='bottom'>
                        <IconButton>
                            <HiOutlineClock size={20}/>
                        </IconButton>
                    </Tooltip>
                </HeaderButtonstyle>
                <HeaderButtonstyle>
                    <Tooltip title="사이드바에 이 페이지 고정 Cntr+Art+Shift+F" placement='bottom-end'>
                        <IconButton>
                            <AiOutlineStar size={20}/>
                        </IconButton>
                    </Tooltip>
                </HeaderButtonstyle>
                <HeaderButtonstyle>
                    <Tooltip title="스타일, 내보내기 등" placement='bottom-end'>
                        <IconButton>
                            <BsThreeDots size={20}/>
                        </IconButton>
                    </Tooltip>
                </HeaderButtonstyle>
            </Tmpdiv>
        </Headerstyle> 
    )
}
export default Header;
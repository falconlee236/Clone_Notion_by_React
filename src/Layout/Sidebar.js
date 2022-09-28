import React from 'react';
import Buttons, {ButtonItem} from '../component/Buttons';
import styled from 'styled-components';

const Sidebarstyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgb(251 251 250);
    height: ${props => props.height || '100vh'};
    width: 20vw;
`;

const SidebarHeader = styled.div`
    margin: 10px;
    border-bottom: groove 1px black;
`

const SidebarFooter = styled.div`
    margin: 10px;
    border-top: groove 1px black;
`

const SidebarMiddlestyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: auto;
`;

const TopButtons = [
    {
        icon: "magnify",
        title: "빠른검색"
    },
    {
        icon: "clock",
        title: "모든 업데이트"
    },
    {
        icon: "gear",
        title: "설정과 멤버"
    }    
]

const MiddleButtons = [
    {
        icon: "note",
        title: "시작하기",
        url: "/start"
    },
    {
        icon: "pin",
        title: "빠른메모"
    }
]

const PageAddButton = [
    {
        icon: "plus",
        title: "페이지 추가"
    }
]

const BottomButtons = [
    {
        icon: "template",
        title: "탬플릿"
    },
    {
        icon: "download",
        title: "가져오기"
    },
    {
        icon: "trashcan",
        title: "휴지통"
    }
]


function Sidebar({height}){
    return (
        <Sidebarstyle height={height}> 
            <SidebarHeader>
                <ButtonItem icon="brain" title="sangyuns brain" isTitle={true}/>
            </SidebarHeader>
            <SidebarMiddlestyle>
                <Buttons itemArr={TopButtons} isArrow={false}/>
                <Buttons itemArr={MiddleButtons} isArrow={true}/>
                <Buttons itemArr={PageAddButton} isArrow={false}/>
                <Buttons itemArr={BottomButtons} isArrow={false}/>
            </SidebarMiddlestyle>
            <SidebarFooter>
                <ButtonItem icon="plus" title="새페이지" isTitle={true}/>
            </SidebarFooter>
        </Sidebarstyle>
    )
}

export default Sidebar;
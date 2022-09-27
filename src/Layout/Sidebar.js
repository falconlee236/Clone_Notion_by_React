import React from 'react';
import Footer from './Footer';
import Header from './Header';
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
/*
const NewPageButton = [
    {
        icon: "plus",
        title: "새 페이지"
    }
]
*/
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
/*
ButtonItem icon="magnify" title="빠른검색"/>
            <ButtonItem icon="clock" title="모든 업데이트"/>
            <ButtonItem icon="gear" title="설정과 멤버"/>
*/
function Sidebar({height}){
    return (
        <Sidebarstyle height={height}> 
            <Header margin="10px">
                <ButtonItem icon="brain" title="sangyuns brain"/>
            </Header>
            <SidebarMiddlestyle>
                <Buttons itemArr={TopButtons} isArrow={false}/>
                <Buttons itemArr={MiddleButtons} isArrow={true}/>
                <Buttons itemArr={PageAddButton} isArrow={false}/>
                <Buttons itemArr={BottomButtons} isArrow={false}/>
            </SidebarMiddlestyle>
            <Footer>
                <ButtonItem icon="plus" title="새페이지"/>
            </Footer>
        </Sidebarstyle>
    )
}

export default Sidebar;
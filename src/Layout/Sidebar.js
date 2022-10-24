import React from 'react';
import Buttons, {ButtonItem} from '../component/Buttons';
import styled from 'styled-components';
import { useContext } from 'react';
import { ButtonInfoContext } from '../context/ButtonInfoContext';

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


function Sidebar({height}){
    const ButtonInfo = useContext(ButtonInfoContext);

    return (
        <Sidebarstyle height={height}> 
            <SidebarHeader>
                <ButtonItem icon="brain" title="sangyuns brain" isTitle={true}/>
            </SidebarHeader>
            <SidebarMiddlestyle>
                <Buttons itemArr={ButtonInfo.TopInfo} isArrow={false}/>
                <Buttons itemArr={ButtonInfo.MiddleInfo} isArrow={true}/>
                <Buttons itemArr={ButtonInfo.PageAddInfo} isArrow={false}/>
                <Buttons itemArr={ButtonInfo.BottomInfo} isArrow={false}/>
            </SidebarMiddlestyle>
            <SidebarFooter>
                <ButtonItem icon="plus" title="새페이지" isTitle={true}/>
            </SidebarFooter>
        </Sidebarstyle>
    )
}

export default Sidebar;
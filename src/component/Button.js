import React from "react";
import { Route, Routes } from "react-router-dom";
import styled, {css} from 'styled-components';
import {GiMagnifyingGlass} from 'react-icons/gi';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {BsFillGearFill} from 'react-icons/bs';
import {GoTriangleRight} from 'react-icons/go';

const Buttonstyle = styled.div`
    background-color: wheat;
    display: flex;
    justify-content: center;
`
function ButtonItem({icon, title}){
    const icons = {
        magnify: <GiMagnifyingGlass />,
        clock: <AiOutlineClockCircle />,
        gear: <BsFillGearFill />,
        left_tri: <GoTriangleRight />
    };

    return (
        <Buttonstyle>
            {icons[icon]}
            {title}
        </Buttonstyle>
    )

}


function Button(){
    return (
        <div>
            <ButtonItem icon="magnify" title="빠른검색"/>
            <ButtonItem icon="clock" title="모든 업데이트"/>
            <ButtonItem icon="gear" title="설정과 멤버"/>
        </div>
    )
}

export default Button;
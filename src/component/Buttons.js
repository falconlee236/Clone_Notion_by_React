import React from "react";
import styled from 'styled-components';
import {GiMagnifyingGlass} from 'react-icons/gi';
import {AiOutlineClockCircle,  AiOutlinePlus} from 'react-icons/ai';
import {BsFillGearFill, BsFillPinAngleFill} from 'react-icons/bs';
import {GoTriangleRight} from 'react-icons/go'; 
import {GiBrain, GiTrashCan} from 'react-icons/gi';
import {GrNotes} from 'react-icons/gr';
import {HiOutlineTemplate, HiDownload} from 'react-icons/hi';
import { Link } from "react-router-dom";

const Buttonstyle = styled.div`
    box-sizing: border-box;
    padding-left: ${props => props.isArrow ? "5px" : "10px"};
    height: 30px;

    background-color: rgb(251 251 250);
    display: flex;
    margin-right: auto;
    cursor: pointer;

    // &는 자기 자신 선택
    &:hover{
        background: rgba(55, 53, 47, 0.08);
        color: rgb(55, 53, 47);
    }
`

const ButtonContainer = styled.div`
    margin-bottom: 10px;
`;

export function ButtonItem({icon, title, isArrow}){
    const icons = {
        magnify: <GiMagnifyingGlass />,
        clock: <AiOutlineClockCircle />,
        gear: <BsFillGearFill />,
        left_tri: <GoTriangleRight />,
        brain: <GiBrain />,
        note: <GrNotes />,
        pin: <BsFillPinAngleFill />,
        plus: <AiOutlinePlus />,
        template: <HiOutlineTemplate />,
        download: <HiDownload />,
        trashcan: <GiTrashCan />
    };

    return (
        <Buttonstyle isArrow={isArrow}>
            {isArrow ? icons["left_tri"] : null}
            {icons[icon]}
            {title}
        </Buttonstyle>
    )

}


function Buttons({itemArr, isArrow}){
    return (
        <ButtonContainer>
            {itemArr.map(item => {
                return (
                    <Link to={item.url || "/"} style={{ textDecoration: "none", color: "black"}}>
                        <ButtonItem icon={item.icon} title={item.title} isArrow={isArrow}/>
                    </Link>
                )
            })}
        </ButtonContainer>
    )
}

export default Buttons;
import React, { useContext } from "react";
import styled from 'styled-components';
import {GiMagnifyingGlass} from 'react-icons/gi';
import {AiOutlineClockCircle,  AiOutlinePlus} from 'react-icons/ai';
import {BsFillGearFill, BsFillPinAngleFill, BsThreeDots} from 'react-icons/bs';
import {GoTriangleRight} from 'react-icons/go'; 
import {GiBrain, GiTrashCan} from 'react-icons/gi';
import {GrNotes, GrNote} from 'react-icons/gr';
import {HiOutlineTemplate, HiDownload} from 'react-icons/hi';
import { Link } from "react-router-dom";
import { ButtonInfoContext } from "../App";

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgb(251 251 250);
    display: flex;
    margin-right: auto;
    cursor: pointer;

    .visible{
        visibility: hidden;
    }

    // &는 자기 자신 선택
    &:hover{
        background: rgba(55, 53, 47, 0.08);
        color: rgb(55, 53, 47);
        .visible{
            visibility: ${props => props.isMiddle ? "visible" : "hidden"};
        }
   }
`

const Buttonstyle = styled.div`
    box-sizing: border-box;
    font-size: ${props => props.isTitle ? "17px" : "14px"};
    padding-left: ${props => props.isArrow ? "10px" : "15px"};
    padding-top: ${props => props.isTitle ? "10px" : "5px"};
    height: ${props => props.isTitle ? "50px" : "30px"};
    width: 250px;
`

const ButtonLayout = styled.div`
    margin-bottom: 10px;
`;

const SideButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
`

const MiniButtonStyle = styled.span`
    padding: 3px 1px;
    margin: 0px 3px;

    &:hover{
        background: ${props => props.isMiddle ? "rgba(55, 53, 47, 0.2)" : null};
    }
`

export function ButtonItem({icon, title, isArrow, isTitle, isMiddle}){
    const icons = {
        magnify: <GiMagnifyingGlass />,
        clock: <AiOutlineClockCircle />,
        gear: <BsFillGearFill />,
        left_tri: <GoTriangleRight />,
        brain: <GiBrain />,
        note: <GrNote />,
        notes: <GrNotes />,
        pin: <BsFillPinAngleFill />,
        plus: <AiOutlinePlus />,
        template: <HiOutlineTemplate />,
        download: <HiDownload />,
        trashcan: <GiTrashCan />
    };

    return (
        <ButtonContainer isMiddle={isMiddle}>
            <Buttonstyle isArrow={isArrow} isTitle={isTitle}>
                {isArrow ? 
                    <span style={{marginRight: "3px"}}>
                        {icons["left_tri"]}
                    </span> : null
                }
                <span style={{marginRight: "5px"}}>
                    {icons[icon]}    
                </span>
                {title}
            </Buttonstyle>
            <SideButtonContainer>
                <MiniButtonStyle isMiddle={isMiddle}>
                    <BsThreeDots className="visible"/>
                </MiniButtonStyle>
                <MiniButtonStyle isMiddle={isMiddle}>
                    <AiOutlinePlus className="visible" />
                </MiniButtonStyle>
            </SideButtonContainer>
        </ButtonContainer>
        
    )

}


function Buttons({itemArr, isArrow, isTitle, isAdd, isMiddle}){
    const [, dispatch] = useContext(ButtonInfoContext);
    const AddPage = (() => {
        dispatch({type: 'CREATE_USER'});
    })


    return (
        <ButtonLayout onClick={isAdd ? AddPage : null}>
            {itemArr.map(item => {
                return (
                    <Link to={item.url || "/"} style={{ textDecoration: "none", color: "black"}}>
                        <ButtonItem 
                            icon={item.icon} 
                            title={item.title} 
                            isArrow={isArrow} 
                            isTitle={isTitle} 
                            isMiddle={isMiddle}
                        />
                    </Link>
                )
            })}
        </ButtonLayout>
    )
}

export default Buttons;
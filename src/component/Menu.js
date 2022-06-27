import React from "react";
import { Route, Routes } from "react-router-dom";
import styled, {css} from 'styled-components';

function Menuitem({name}){
    return (
        <button>{name}</button>
    )
}


function Menu(){
    return (
        <div>
            <Menuitem name="빠른검색"></Menuitem>
            <Menuitem name="모든 업데이트"></Menuitem>
            <Menuitem name="설정과 맴버"></Menuitem>
        </div>
    )
}

export default Menu;
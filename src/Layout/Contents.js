import React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Home from '../page/Home';
import Start from '../page/Start';
import QuickMemo from '../page/QuickMemo';


const Contentstyle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    height: 100vh;
    width: 84.5vw;
`


function Contents(){
    return (
        <div>
            <Contentstyle>
                <Sidebar height="100vh"/>
                <Main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path='/start' element={<Start/>}/>
                        <Route path='/quickmemo' element={<QuickMemo/>}/>
                    </Routes>
                </Main>
            </Contentstyle>
        </div>
    )
}

export default Contents;

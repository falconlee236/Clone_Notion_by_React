import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import styled from 'styled-components';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Home from '../component/Home';
import Start from '../component/Start';

const Contentstyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    height: 100vh;
    width: 80vw;
`

function Contents(){
    return (
        <div>
            <Contentstyle>
                <Sidebar height="100vh"/>
                <Main>
                    <Header color="white"/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path='/start' element={<Start/>}/>
                    </Routes>
                    <Footer />
                </Main>
            </Contentstyle>
        </div>
    )
}

export default Contents;
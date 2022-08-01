import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import styled from 'styled-components';
import Footer from './Footer';

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
    background-color: yellowgreen;
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
                    <Footer />
                </Main>
            </Contentstyle>
        </div>
    )
}

export default Contents;
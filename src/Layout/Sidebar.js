import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Button from '../component/Button';
import styled from 'styled-components';

const Sidebarstyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: black;
    height: ${props => props.height || '100vh'};
    width: 20vw;
`;

function Sidebar({height}){
    return (
        <Sidebarstyle height={height}> 
            <Header />
            <Button />
            <Footer />
        </Sidebarstyle>
    )
}

export default Sidebar;
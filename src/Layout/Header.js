import React from 'react';
import styled from 'styled-components';

const Headerstyle = styled.div`
    background-color: ${props => props.color || "red"};
`;

function Header({color, children}){
    return (
        <Headerstyle color={color}>
            {children ? children : "this is header"}
        </Headerstyle>
    )
}

export default Header;
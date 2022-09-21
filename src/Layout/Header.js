import React from 'react';
import styled from 'styled-components';

const Headerstyle = styled.div`
    background-color: ${props => props.color || "red"};
    margin-bottom: ${props => props.margin || "0px"};
`;

const Temp = styled.div`
    color: "blue";
`;

function Header({margin, color, children}){
    return (
        <Headerstyle color={color} margin={margin}>
            {children ? children : <Temp>this is header?????????</Temp>}
        </Headerstyle>
    )
}

export default Header;
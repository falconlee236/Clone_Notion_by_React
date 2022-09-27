import React from 'react';
import styled from 'styled-components';

const Footerstyle = styled.div`
    margin-bottom: ${props => props.margin || "0px"};
`

function Footer({children}){
    return (
        <Footerstyle>      
            {children ? children : "this is footer"}
        </Footerstyle>
    )
}

export default Footer;
import React from 'react';
import styled from 'styled-components';

const Footerstyle = styled.div`
    background-color: blue;
`

function Footer({children}){
    return (
        <Footerstyle>      
            {children ? children : "this is footer"}
        </Footerstyle>
    )
}

export default Footer;
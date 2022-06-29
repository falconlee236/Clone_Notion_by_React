/*https://velog.io/@altmshfkgudtjr/Custom-Tooltip-%EC%A0%9C%EC%9E%91%EA%B8%B0*/
import React from 'react';
import styled from 'styled-components';

const Tooltipstyle = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;

    &:hover > .tooltip, &:active > .tooltip {
        display: block;
    }
`;

const Content = styled.div`
    display: none;
    position: absolute;
    z-index: 200;
`

const Tooltip = ({children, message}) => {
    <Tooltipstyle>
        {children}
        <Content>{message}</Content>
    </Tooltipstyle>
} 
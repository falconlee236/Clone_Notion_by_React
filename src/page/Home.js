import React from "react";
import Header from "../Layout/Header";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 90vh;
`

function Home(){
    const repeat = () => {
        const result = [];
        for(let i = 0; i < 10; i++){
            result.push(<><span>여기는 테스트 페이지입니다.</span><br/></>);
        }
        return result;
    }
    return (
        <>
        <Header title="홈"/>
        <Container>
            {repeat()}
        </Container>
        </>
    )
};

export default Home;

//사이드바 따라다니게 만들어야함
//사이드바 UI사용해야 할거 같음
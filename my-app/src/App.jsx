import React from 'react';
import styled from "styled-components";
import PlayerSearch from './PlayerSearch';
import SinglePlayer from './SinglePlayer';
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Styled
const Container = styled.div`
    z-index: 0;
`;
const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: calc(100% - 40px);
    height: 60px;
    background-color: #fff;
    border-bottom: solid 1px #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1;

    span {
        cursor: pointer;
        user-select: none;
        font-size: 47px;
        color: #000;
    }
`;
const Logo = styled.img`
    width: 160px;
    height: 47px;  
    cursor: pointer;
    user-select: none;
`;
const Menu = styled.div`
    position: absolute;
    top: 61px;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #000;
    display: flex;  
    align-items: center;
    justify-content: flex-start;

    a {
        color: inherit; 
        text-decoration: inherit; 
    }
`;
const MenuBtn = styled.div`
    font-size: 32px;
    font-weight: 600;
    color: orange;
    margin-left: 20px;
    cursor: pointer;  
    user-select: none;
`;

//Main Component
const App = () => {
    return (
        <Container>
            <Header>
                <a href="https://www.lndata.com/">
                    <Logo src='https://www.lndata.com/images/logo/logo_160.png' />
                </a>
                <a href="https://www.cakeresume.com/k22949706">
                    <span className="material-icons">account_circle</span>
                </a>
            </Header>
            <Menu>
                <a href="/">
                    <MenuBtn>Player List</MenuBtn>
                </a>
            </Menu>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PlayerSearch/>} />
                    <Route path="/players/:id" element={<SinglePlayer/>} />
                </Routes>
            </BrowserRouter>
        </Container>
    ) 
}

export default App;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Header = () =>{
    return (
    <>
        <Navbar bg="ligth" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src="./public/img/logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                React 
            </Navbar.Brand>
            </Container>
        </Navbar>
        </>
        );
};

export default Header;
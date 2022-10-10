import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Main from "../components/main";
import Container from 'react-bootstrap/Container';

const Layout = () => {
    return(
        <>
        <Container fluid className="d-flex flex-column min-vh-100 px-0">
            <Header />
        </Container>
        </>
    );
};

export default Layout;
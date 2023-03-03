import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function AppNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Orçamento de Construção Civil</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Início</Nav.Link>
                <Nav.Link href="/orcamentos">Orçamentos</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default AppNavbar;
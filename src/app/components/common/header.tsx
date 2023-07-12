'use client'
import React, { useState } from "react";


import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Container, Form, Nav, Navbar, NavDropdown, Button, Image, Row, Col } from 'react-bootstrap';

import WhiteLogo from "../../../../public/img/white-logo.svg";





export default function Header() {
    
    const { scrollYProgress } = useScroll();
    // top progressbar animation
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });







    return (
        <>
            <motion.div className="progress-barr" style={{ scaleX }} />
            <Navbar expand="lg" >
                <Container>
                    <Navbar.Brand href="/">	<WhiteLogo /> </Navbar.Brand>
                    <div>
                        <Button as="a" variant="primary" className="mobbtn">
                            Store
                        </Button>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto my-2 my-lg-0">
                            <Nav.Link href="/lfione">LFi One</Nav.Link>
                            <Nav.Link href="/minting-machine">Minting Machine</Nav.Link>
                            <NavDropdown title="dApps" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#dao"> DAO </NavDropdown.Item>
                                <NavDropdown.Item href="/bridge">LFi Bridge</NavDropdown.Item>
                                <NavDropdown.Item href="/launchpad">Launchpad</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/tokens">Tokens</Nav.Link>
                            <Nav.Link href="/aboutus">About Us</Nav.Link>
                            <Button as="a" variant="primary">
                                Store
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

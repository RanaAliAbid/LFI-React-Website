'use client'
import React, { useState } from "react";
import { usePathname } from 'next/navigation';

import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Container, Form, Nav, Navbar, NavDropdown, Button, Image, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

import WhiteLogo from "../../../../public/img/white-logo.svg";

export default function Header() {

    const { scrollYProgress } = useScroll();
    // top progressbar animation
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    const pathname = usePathname();
    console.log(pathname);



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
                        <Nav className="ms-auto">

                           

                            <Nav.Link href="/lfione" as={Link} className={pathname === "/lfione" ? "active" : "" }>LFi One</Nav.Link>
                            <Nav.Link href="/minting-machine" as={Link} className={pathname === "/minting-machine" ? "active" : "" }>Minting Machine</Nav.Link>
                            <Nav.Link href="/blockchain" as={Link} className={pathname === "/blockchain" ? "active" : "" }>Blockchain</Nav.Link>
                            <NavDropdown title="dApps" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/ldao"> L-DAO </NavDropdown.Item>
                                <NavDropdown.Item href="/bridge">Bridge</NavDropdown.Item>
                                <NavDropdown.Item href="/launchpad">Launchpad</NavDropdown.Item>
                                <NavDropdown.Item href="/software-wallet">Software Wallet</NavDropdown.Item>

                            </NavDropdown>
                            <Nav.Link href="/tokens" as={Link} className={pathname === "/tokens" ? "active" : "" }>Tokens</Nav.Link>
                            <Nav.Link href="/aboutus" as={Link} className={pathname === "/aboutus" ? "active" : "" }>About Us</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

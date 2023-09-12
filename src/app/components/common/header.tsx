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

    return (
        <>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-PM28Q6F"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}>
            </iframe>
            <div id="top"> </div>
            <motion.div className="progress-barr" style={{ scaleX }} />
            <Navbar expand="lg" className="mainHeader">
                <Container>
                    <Navbar.Brand href="/">	<WhiteLogo /> </Navbar.Brand>
                    <div>
                        <Button as="a" target="_blank" href="#" variant="primary" className="mobbtn">
                            Go To App
                        </Button>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/lfione" as={Link} className={pathname === "/lfione" ? "active" : ""}>LFi One</Nav.Link>
                            <Nav.Link href="/minting-machine" as={Link} className={pathname === "/minting-machine" ? "active" : ""}>Minting Machine</Nav.Link>
                            <Nav.Link href="/blockchain" as={Link} className={pathname === "/blockchain" ? "active" : ""}>Blockchain</Nav.Link>
                            <NavDropdown title="dApps" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/ldao"> L-DAO </NavDropdown.Item>
                                <NavDropdown.Item href="/bridge">Bridge</NavDropdown.Item>
                                <NavDropdown.Item href="/launchpad">Launchpad</NavDropdown.Item>
                                <NavDropdown.Item href="/software-wallet">Software Wallet</NavDropdown.Item>

                            </NavDropdown>
                            <Nav.Link href="/tokens" as={Link} className={pathname === "/tokens" ? "active" : ""}>Tokens</Nav.Link>
                            <Nav.Link href="/ecosystem" as={Link} className={pathname === "/ecosystem" ? "active" : ""}>Ecosystem</Nav.Link>

                            <Nav.Link href="https://lyotechlabs.com" as={Link} > Store </Nav.Link>

                            <Button 
                                as="a" 
                                target="_blank" 
                                // href="https://sandbox-app.lfi.io/auth" 
                                href="#"
                                variant="primary" 
                                className=""
                            >
                                Go To App
                            </Button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

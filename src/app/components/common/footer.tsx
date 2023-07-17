'use client'
import React, { useState } from "react";
import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Container, Form, Nav, Navbar, NavDropdown, Button, Image, Row, Col } from 'react-bootstrap';

import WhiteLogo from "../../../../public/img/white-logo.svg";

export default function Footer() {
    
    const { scrollYProgress } = useScroll();
    // top progressbar animation
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    return (
        <>
           <section className="footerSec">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="3" xs="12">
                            <div className="footBox">
                                <WhiteLogo className="logo" />
                            </div>
                        </Col>

                        <Col md="3" xs="6">
                            <div className="footBox">
                                <h3>LFi</h3>
                                <ul className="footLink">
                                    <li><a href="/lfione">LFi One</a></li>
                                    <li><a href="/minting-machine">LFi Minting Machine </a></li>
                                    <li><a href="/ldao">L-DAO</a></li>
                                    <li><a href="/launchpad">Launchpad</a></li>
                                    <li><a href="/bridge">LFi Bridge</a></li>
                                    <li><a href="/tokens">Tokens</a></li>
                                </ul>
                            </div>
                        </Col>

                        <Col md="3" xs="6">
                            <div className="footBox">
                                <h3>Company</h3>
                                <ul className="footLink">
                                    <li><a href="/aboutus">About Us</a></li>
                                    {/* <li><a href="">Blog </a></li> */}
                                    <li><a href="https://white-paper.lfi.io/introduction/lfi-ecosystem">White Paper</a></li>
                                    <li><a href="https://docs.lfi.io/v/lfi-technical-docs/">Technical Docs</a></li>
                                    <li><a href="https://white-paper.lfi.io/introduction/roadmap">Roadmap</a></li>
                                    <li><a href="https://docs.lfi.io/help-center/general-project-faqs">FAQ</a></li>
                                </ul>
                            </div>
                        </Col>

                        <Col md="3" xs="12">
                            <div className="footBox contFoot">
                                <h3>Contact us</h3>
                                <ul className="footLink">
                                    <li><a href="mailto:support@lfi.io">support@lfi.io</a></li>
                                </ul>
                            </div>
                            <div className="footBox mt-5 socFoot" >
                                <h3>Social accounts </h3>
                                <ul className="socialLink">
                                    <li>
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                    </li>

                                    <li>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                    </li>

                                    <li>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                    </li>

                                    <li>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </li>

                                    <li>
                                        <a href=""><i className="bi bi-youtube"></i></a>
                                    </li>

                                    <li>
                                        <a href=""><i className="bi bi-telegram"></i></a>
                                    </li>

                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <div className="copyright">
                <Container>
                    <Row>
                        <Col lg="4" md="4">
                            <div className="copyText">
                                <h6>© 2023 LFi   |   All Rights Reserved</h6>
                            </div>
                        </Col>

                        <Col lg="8" md="8" className="text-right">
                            <div className="copyLinks">
                                <ul>
                                    <li><a href="https://docs.lfi.io/legal-documents/terms-and-conditions"> Terms </a></li>
                                    <li><a href="https://docs.lfi.io/legal-documents/privacy-and-cookie-policy"> Privacy & Cookie </a></li>
                                    <li><a href="https://docs.lfi.io/legal-documents/minting-terms-and-condition"> Minting Terms </a></li>
                                    <li><a href="https://docs.lfi.io/legal-documents/clfi-terms-and-condition"> cLFi Terms </a></li>
                                    <li><a href="https://docs.lfi.io/legal-documents/disclaimer"> Disclaimer </a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

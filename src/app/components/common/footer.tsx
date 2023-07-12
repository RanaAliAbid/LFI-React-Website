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
                                    <li><a href="">LFi One</a></li>
                                    <li><a href="">LFi Minting Machine </a></li>
                                    <li><a href="">L-DAO</a></li>
                                    <li><a href="">Launchpad</a></li>
                                    <li><a href="">LFi Bridge</a></li>
                                    <li><a href="">Tokens</a></li>
                                </ul>
                            </div>
                        </Col>

                        <Col md="3" xs="6">
                            <div className="footBox">
                                <h3>Company</h3>
                                <ul className="footLink">
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Blog </a></li>
                                    <li><a href="">White Paper</a></li>
                                    <li><a href="">Technical Docs</a></li>
                                    <li><a href="">Roadmap</a></li>
                                    <li><a href="">FAQ</a></li>
                                </ul>
                            </div>
                        </Col>

                        <Col md="3" xs="12">
                            <div className="footBox contFoot">
                                <h3>Contact us</h3>
                                <ul className="footLink">
                                    <li><a href="">supportlfi@gmail.com</a></li>
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
                                    <li><a href=""> Terms </a></li>
                                    <li><a href=""> Privacy & Cookie </a></li>
                                    <li><a href=""> Minting Terms </a></li>
                                    <li><a href=""> cLFi Terms </a></li>
                                    <li><a href=""> Disclaimer </a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

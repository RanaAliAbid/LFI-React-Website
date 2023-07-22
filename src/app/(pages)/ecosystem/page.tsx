'use client'
import React from "react";

import { useRef, useEffect } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Container, Tab, Tabs, Nav, Navbar, NavDropdown, Button, Image, Row, Col } from 'react-bootstrap';

import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";


export default function Ecosystem() {

    const buttRef = useRef(null);

    const ldolRef = useRef(null);
    const ldaoRef = useRef(null);
    const { scrollYProgress } = useScroll();

    // top progressbar animation
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    // ldo box border animation
    const ldoborders = useScroll({
        target: ldolRef,
        offset: ["end end", "start start"]
    }).scrollYProgress;

    // vision mission path animation
    const scrollvisionProgressBar = useScroll({
        target: buttRef,
        offset: ["end end", "start start"]
    }).scrollYProgress;


    return (
        <main>
            <Header />

            <section className="herosec bg-aboutus">
                <Container>
                    <Row className="align-items-center">
                        <Col md="6" xs="12">
                            <div className="hero">
                                <h1> LFi Ecosystem </h1>
                                <h3> LFi is a decentralized platform designed to provide equal opportunities for wealth generation and financial independence. </h3>
                                <Button as="a" variant="primary" href="#headingText">
                                    Learn More
                                </Button>
                                <Button as="a" variant="text" href="https://white-paper.lfi.io/introduction/lfi-ecosystem">
                                    White Paper
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="headingSec" id="headingText">
                <Container>
                    <Row className="align-items-center">
                        <Col xs="12">
                            <div className="headingTitle">
                                <h2> LFi aims to empower individuals by offering accessible financial opportunities through a decentralized, transparent, and secure platform driven by a DAO community. </h2>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>




            <section className="aboutBeliveSec financialSec">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="12">
                            <div className="infoText text-center mb-5">
                                <h2> Manifesto </h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="align-items-center">

                        <Col md="6">
                            <div className="transSec">
                                <h2>Inclusive </h2>
                                <h4> Financial system</h4>
                                <h6> The time has come to bring a more inclusive financial system to the world, where the control and ownership of assets lie with the people.</h6>

                            </div>
                        </Col>


                        <Col md="6">
                            <div className="headingTitle">
                                <h3> Everyone should have equal opportunities for wealth generation and financial independence.  </h3>

                            </div>
                        </Col>


                    </Row>
                </Container>
            </section>

            <section className="aboutBeliveSec">
                <Container>
                    <Row className="align-items-center">
                        <Col md="6">
                            <div className="headingTitle">
                                <h3> We believe in a consensus-driven financial system shaped by the DAO.  </h3>

                            </div>
                        </Col>

                        <Col md="6">
                            <div className="transSec">
                                <h2>Public </h2>
                                <h4>Transparency </h4>
                                <h6> Where transactions are publicly verifiable, must prevail and the security and safety of user data are the top priority.</h6>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>




            <section className="wrapSection visionSec aboutVisionsec">
                <div className="visionHeight" ref={buttRef} > </div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="10" md="11" className="relative">
                            <figure className="visionProgressBar">
                                <svg className="d-none d-sm-block" width="100%" height="100%" viewBox="0 0 1101 596" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="gradientttt" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stop-color="#070A0B" />
                                            {/* <stop offset="15%" stop-color="#464646" />  */}
                                            <stop offset="20%" stop-color="#464646" />
                                            <stop offset="100%" stop-color="#04FCA3" />
                                        </linearGradient>
                                    </defs>
                                    <path className="" d="M1 0.5V266.5C1 283.069 14.4315 296.5 31 296.5H1070C1086.57 296.5 1100 309.931 1100 326.5V565C1100 581.569 1086.57 595 1070 595H931.289H762.577" />
                                    <motion.path stroke="url(#gradientttt)" className="aboutVMPath" d="M1 0.5V266.5C1 283.069 14.4315 296.5 31 296.5H1070C1086.57 296.5 1100 309.931 1100 326.5V565C1100 581.569 1086.57 595 1070 595H931.289H762.577" style={{ pathLength: scrollvisionProgressBar }} />

                                </svg>

                                <svg className="d-block d-sm-none" width="100%" height="100%" viewBox="0 0 400 579" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="gradientttt" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stop-color="#070A0B" />
                                            {/* <stop offset="15%" stop-color="#464646" />  */}
                                            <stop offset="20%" stop-color="#464646" />
                                            <stop offset="100%" stop-color="#04FCA3" />
                                        </linearGradient>
                                    </defs>
                                    <path className="" d="M1 0.5V231.173C1 247.742 14.4315 261.173 31 261.173H369C385.569 261.173 399 274.605 399 291.173V548C399 564.569 385.569 578 369 578H337.902H276.803" />
                                    <motion.path stroke="url(#gradientttt)" className="aboutVMPath" d="M1 0.5V231.173C1 247.742 14.4315 261.173 31 261.173H369C385.569 261.173 399 274.605 399 291.173V548C399 564.569 385.569 578 369 578H337.902H276.803" style={{ pathLength: scrollvisionProgressBar }} />

                                </svg>

                                <div className="text-center desktopHide">
                                    <Button as="a" variant="primary" href="https://white-paper.lfi.io/introduction/roadmap">
                                        Roadmap
                                    </Button>
                                </div>
                            </figure>
                            <Row className="rowText" >
                                <Col md="4">
                                    <div className="titleBox">
                                        <h3>Our</h3>
                                        <h2> <strong> Vision </strong> </h2>
                                    </div>
                                </Col>
                                <Col md="8">
                                    <div className="textBox">
                                        <h4>A decentralized, sustainable, and fair global economy where everyone has the chance to achieve financial independence and participate in wealth creation.</h4>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="rowText missionMob">
                                <Col md="8" className="miPeraText">
                                    <div className="textBox text-right">
                                        <h4>To empower individuals to take control of their wealth by providing accessible financial opportunities through a decentralized, transparent, and secure platform driven by a DAO community.</h4>
                                    </div>
                                </Col>
                                <Col md="4" className="miTitleText">
                                    <div className="titleBox">
                                        <h3>Became</h3>
                                        <h2> <strong> Mission </strong> </h2>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="justify-content-center manifestoBtn mobileHide">
                                <Col>
                                    <div className="text-center">
                                        <Button as="a" variant="primary" href="https://white-paper.lfi.io/introduction/roadmap">
                                            Roadmap
                                        </Button>
                                    </div>
                                </Col>
                            </Row>



                        </Col>
                    </Row>
                </Container>
            </section>




            <Footer />
        </main>
    )
}

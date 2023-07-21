'use client'
import React from "react";

import { useRef, useEffect } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Container, Tab, Tabs, Nav, Navbar, NavDropdown, Button, Image, Row, Col } from 'react-bootstrap';

import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";


export default function Aboutus() {

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

            <section className="manifestoSection">
                <Container>
                    <Row className="align-items-center">
                        <Col xs="12">
                            <div className="infoText text-center">
                                <h2> Manifesto </h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col md="6" xs="12">
                            <div className="wrapTextBox frame">
                                <div className="lines"></div>
                                <div className="angles"></div>
                                <article>

                                    <h3> Equal opportunities </h3>
                                    <h5> Everyone should have equal opportunities for wealth generation and financial independence.</h5>
                                </article>
                            </div>
                        </Col>

                        <Col md="6" xs="12">
                            <div className="wrapTextBox frame">
                                <div className="lines"></div>
                                <div className="angles"></div>
                                <article>

                                    <h3> Financial system  </h3>
                                    <h5> The time has come to bring a more inclusive financial system to the world, where the control and ownership of assets lie with the people.</h5>
                                </article>
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
                                <h2>Transparency, </h2>
                                <h4>Transparency, </h4>
                                <h6> where transactions are publicly verifiable, must prevail and the security and safety of user data are the top priority.</h6>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="ecosystemSec">
                <div ref={ldolRef}></div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="10" md="11" sm="12" className="relative">
                            <div className="bgLdao" ref={ldaoRef}>
                                <svg width="50%" height="100%" className="ldoBorder left" viewBox="0 0 466 542" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="10%" stop-color="#1F1F1F" />
                                            {/* <stop offset="15%" stop-color="#464646" />  */}
                                            <stop offset="20%" stop-color="#464646" />
                                            <stop offset="100%" stop-color="#04FCA3" />
                                        </linearGradient>
                                    </defs>
                                    {/* <path className="" d="M466 1H31C14.4315 1 1 14.4315 1 31V511C1 527.569 14.4315 541 31 541H466" /> */}
                                    <motion.path className="ldaoPath" stroke="url(#gradient)" d="M466 1H31C14.4315 1 1 14.4315 1 31V511C1 527.569 14.4315 541 31 541H466" style={{ pathLength: ldoborders }} />

                                </svg>

                                <svg width="50%" height="100%" className="ldoBorder right" viewBox="0 0 466 542" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* <path className="" d="M0 1H435C451.569 1 465 14.4315 465 31V511C465 527.569 451.569 541 435 541H0" /> */}
                                    <motion.path className="ldaoPath" stroke="url(#gradient)" d="M0 1H435C451.569 1 465 14.4315 465 31V511C465 527.569 451.569 541 435 541H0" style={{ pathLength: ldoborders }} />
                                </svg>
                            </div>

                            <div className="ldaoBox">
                                <div className="ldaoInnerBox">
                                    <div className="textInfo">
                                        <h4> The LFi </h4>
                                        <Image src="/img/ecosystem.svg" />
                                        <h3> It is a revolutionary, user-friendly decentralized platform that grows alongside you. We are committed to delivering top-tier products, constantly adapting to meet your changing needs. </h3>

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </main>
    )
}

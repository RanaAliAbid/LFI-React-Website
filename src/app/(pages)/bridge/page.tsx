'use client'
import React from "react";
import { useRef, useEffect } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Container, Tab, Tabs, Nav, Navbar, NavDropdown, Button, Image, Row, Col } from 'react-bootstrap';

import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";

import bridge from "../../../../public/img/bridge.png";
import switchBlockchain from "../../../../public/img/blockchain-switch.png";
import bridgingImg from "../../../../public/img/bridging.png";
import protectionImg from "../../../../public/img/protection.png";
import whyBridgeImg from "../../../../public/img/whyBridge.png";

export default function Bridge() {
    const buttRef = useRef(null);
    const { scrollYProgress } = useScroll();

    // top progressbar animation
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    return (
        <main>
            <Header />

            <section className="wrapSection herosec fullView">
                <Container>
                    <Row className="align-items-center">
                        <Col md="6" xs="12">
                            <div className="hero">
                                <h1> LFi Bridge </h1>
                                <h3> Connecting multiple blockchains to bring more users together. </h3>
                                <Button as="a" variant="primary" href="https://bridge.lfi.io/">
                                    Open Bridge
                                </Button>
                                <Button as="a" variant="text" href="#bridgeText">
                                    Learn More
                                </Button>
                            </div>
                        </Col>
                        <Col md="6" xs="12">
                            <div className="text-center heroImg">
                                <Image src={bridge.src} className="rot" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bridgeTextSec" id="bridgeText">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="10" xs="12">
                            <div className="infoText text-center">
                                <h2> Why  LFi-Bridge? </h2>
                            </div>
                            <div className="bridgeBoxWrap">
                                <Row className="align-items-center">
                                    <Col md="6">
                                        <div className="wrapTextBox">
                                            <h3> Switch between blockchains with ease </h3>
                                            <h5> LFi Bridge facilitates listing and trading LFi tokens across various chains. Users can convert their LFi tokens from Polygon to other chains like ERC20 using decentralized wallets. Post conversion, these tokens can be traded on any exchange where LFi is listed.</h5>
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <div className="text-center">
                                            <Image src={switchBlockchain.src} className="rot" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="bridgeBoxWrap">
                                <Row className="align-items-center">
                                    <Col md="6">
                                        <div className="text-center">
                                            <Image src={bridgingImg.src} className="rot" />
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <div className="wrapTextBox">
                                            <h3> Bridging Blockchains  </h3>
                                            <h5> LFi Bridge supports ETH and Polygon chains in its initial stage. More networks will be accessible for the users in the future.</h5>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="bridgeBoxWrap">
                                <Row className="align-items-center">
                                    <Col md="6">
                                        <div className="wrapTextBox">
                                            <h3> Security - focused architecture  </h3>
                                            <h5> The architecture is designed with a focus on maintaining the utmost security standards to safeguard user assets during the bridging process.</h5>
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <div className="text-center">
                                            <Image src={protectionImg.src} className="rot" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="bridgeBoxWrap">
                                <Row className="align-items-center">
                                    <Col md="6">
                                        <div className="text-center">
                                            <Image src={whyBridgeImg.src} className="rot" />
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <div className="wrapTextBox">
                                            <h3> Why Take the LFi Bridge? </h3>
                                            <h5> LFi Bridge is designed to enable the listing and trading of LFi tokens anywhere. It enables users to connect the LFi Chain to other blockchains.  </h5>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="text-center">
                                <Button as="a" variant="primary" href="https://bridge.lfi.io/">
                                    Open Bridge
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </main>
    )
}

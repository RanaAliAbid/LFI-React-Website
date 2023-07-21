'use client'
import React from "react";
import { useRef, useEffect } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Container, Tab, Tabs, Nav, Navbar, NavDropdown, Button, Image, Row, Col } from 'react-bootstrap';

import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";

import blockchain from "../../../../public/img/blockchainbanner.png";
import BlockLimit from "../../../../public/img/blockchinLimit.png";


export default function Blockchain() {
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
                                <h1> Blockchain </h1>
                                <h3> It is an independent powerhouse boasting smart contract capabilities and compatibility with the Ethereum Virtual Machine (EVM). What does this mean for you? Thanks to its EVM compatibility, it will have full support for the broad range of Ethereum tools and DApps. </h3>
                                {/* <Button as="a" variant="primary" href="https://bridge.lfi.io/">
                                    Open Bridge
                                </Button>
                                <Button as="a" variant="text" href="#bridgeText">
                                    Learn More
                                </Button> */}
                            </div>
                        </Col>
                        <Col md="6" xs="12">
                            <div className="text-center heroImg">
                                <Image src={blockchain.src} className="rot" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            



            <section className="lfiLimitationSec">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="10" xs="12">
                            {/* <div className="bridgeBoxWrap">
                                <Row className="align-items-center">
                                    <Col md="6">
                                        <div className="text-center">
                                            <Image src={BlockLimit.src} className="rot" />
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <div className="wrapTextBox">

                                            <h3> LFi Chain  </h3>
                                            <h5> It is an independent powerhouse boasting smart contract capabilities and compatibility with the Ethereum Virtual Machine (EVM). What does this mean for you? Thanks to its EVM compatibility, it will have full support for the broad range of Ethereum tools and DApps. </h5>
                                        </div>
                                    </Col>
                                </Row>
                            </div> */}


                            <div className="bridgeBoxWrap">
                                <Row className="align-items-center">
                                    <Col md="6">
                                        <div className="wrapTextBox">
                                            <h3> LFi Chain is our answer to common limitations: </h3>
                                            <ul className="list">
                                                <li> The restrictiveness of a centralized blockchain with just 21 nodes </li>
                                                <li> The bottleneck of 300 transactions per second </li>
                                                <li> The absence of a DAO system to drive blockchain development </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <div className="text-center">
                                            <Image src={BlockLimit.src} className="rot" />
                                        </div>
                                    </Col>
                                </Row>
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
                                <h2> Starting out, our ecosystem&apos;s native tokens and dApps will take their first steps on the Polygon Chain. But by late 2023, we are pushing boundaries by launching our very own blockchain, a fork of the Matic Chain, named the LFi Chain. </h2>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </main>
    )
}

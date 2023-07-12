'use client'
import React from "react";

import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";

import { useRef, useEffect } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Container, Tab, Tabs, Nav, Navbar, NavDropdown, Button, Image, Row, Col } from 'react-bootstrap';

import WhiteLogo from "../../../../public/img/white-logo.svg";

import ldoImg from "../../../../public/img/hero-ldo.png";
import tokenImg from "../../../../public/img/token.png";





export default function Tokens() {
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
            <Header/>

            <section className="herosec tokenSec">
                <Container>
                    <div className="tokensBody">                    
                    <Tabs
                        defaultActiveKey="lfiCoin"
                        id="uncontrolled-tab-example"
                        className="tokenTabs"
                    >
                        <Tab eventKey="lfiCoin" title="LFi">
                            <Row className="align-items-center">
                                <Col md="6" xs="12" className="order2">
                                    <div className="hero">
                                        <h1> LFi Token </h1>
                                        <h3> LFi is the native token of the LFi ecosystem that provides users the access to the network’s services.  </h3>
                                        <Button as="a" variant="primary">
                                            More about LFi
                                        </Button>
                                    </div>
                                </Col>
                                <Col md="6" xs="12">
                                    <div className="text-center tokenImg">
                                        <Image src={tokenImg.src} />
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="clfiCoin" title="cLFi">
                            <Row className="align-items-center">
                                <Col md="6" xs="12"  className="order2">
                                    <div className="hero">
                                        <h1> cLFi Token </h1>
                                        <h3> cLFi is the collateral token of LFi ecosystem, which allows users to participate in the Proof-of-coverage minting.  </h3>
                                        <Button as="a" variant="primary">
                                            More about cLFi
                                        </Button>
                                    </div>
                                </Col>
                                <Col md="6" xs="12">
                                    <div className="text-center tokenImg">
                                        <Image src={tokenImg.src} />
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="vlfiCoin" title="vLFi">
                            <Row className="align-items-center">
                                <Col md="6" xs="12"  className="order2">
                                    <div className="hero">
                                        <h1> vLFi Token </h1>
                                        <h3> vLFi holders will receive rewards, obtain discounts, get wider allocations in launchpad, and more.  </h3>
                                        <Button as="a" variant="primary">
                                            More about vLFi
                                        </Button>
                                    </div>
                                </Col>
                                <Col md="6" xs="12">
                                    <div className="text-center tokenImg">
                                        <Image src={tokenImg.src} />
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                    </div>

                </Container>
            </section>

            <Footer/>
        </main>
    )
}

'use client'
import React from "react";
import Head from "next/head";

import { Metadata } from 'next';

import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";

import { useRef, useEffect } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Container, Tab, Tabs, Nav, Navbar, NavDropdown, Button, Image, Row, Col } from 'react-bootstrap';

import tokenImg from "../../../../public/img/token.png";

import tokenlfi from "../../../../public/img/token-lfi.png";
import tokenclfi from "../../../../public/img/token-clfi.png";
import tokenvlfi from "../../../../public/img/token-vlfi.png";


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
        <>
             {/* <Head>
                <title> Tokens page </title>
                
            </Head> */}
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
                                        <Button as="a" variant="primary" target= "_blank" href="https://www.lyotrade.com/en_US/v5/trade/LFi_USDT?type=spot">
                                            Buy LFi
                                        </Button>
                                        <Button as="a" variant="text" target= "_blank" href="https://white-paper.lfi.io/layer-1-blockchain-and-token/lfi-token">
                                            More About LFi
                                        </Button>
                                    </div>
                                </Col>
                                <Col md="6" xs="12">
                                    <div className="text-center tokenImg">
                                        <Image src={tokenlfi.src} />                                        
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
                                        <Button as="a" variant="primary" target= "_blank" href="https://www.lyotrade.com/en_US/v5/trade/cLFi_USDT?type=spot">
                                            Buy cLFi
                                        </Button>
                                        <Button as="a" variant="text" target= "_blank" href="https://white-paper.lfi.io/layer-1-blockchain-and-token/clfi-token">
                                            More about cLFi
                                        </Button>
                                    </div>
                                </Col>
                                <Col md="6" xs="12">
                                    <div className="text-center tokenImg">
                                        <Image src={tokenclfi.src} />                                        
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
                                        <Button as="a" variant="primary" target= "_blank" href="https://white-paper.lfi.io/layer-1-blockchain-and-token/vlfi-token">
                                            More about vLFi
                                        </Button>
                                    </div>
                                </Col>
                                <Col md="6" xs="12">
                                    <div className="text-center tokenImg">
                                        <Image src={tokenvlfi.src} />                                        
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                    </div>

                </Container>
            </section>

            <Footer/>
        </>
    )
}

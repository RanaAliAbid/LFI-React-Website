'use client'
import React from "react";
import { useRef, useEffect } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Container, Tab, Tabs, Nav, Navbar, NavDropdown, Button, Image, Row, Col } from 'react-bootstrap';

import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";

import softwareWalletBanner from "../../../../public/img/softwareWalletBanner.png";
import decentralizedIcon from "../../../../public/img/decentralizedIcon.png";
import securenetworkIcon from "../../../../public/img/secure-networkIcon.png";
import userfriendlyIcon from "../../../../public/img/user-friendlyIcon.png";
import swapIcon from "../../../../public/img/swapIcon.png";
import earningsIcon from "../../../../public/img/earningsIcon.png";
import dappsaccessIcon from "../../../../public/img/dappsaccessIcon.png";
import miningIcon from "../../../../public/img/miningIcon.png";




export default function softwareWallet() {


    return (
        <main>
            <Header />

            <section className="wrapSection herosec fullView">
                <Container>
                    <Row className="align-items-center">
                        <Col md="7" xs="12">
                            <div className="hero">
                                <h1> LFi Software Wallet </h1>
                                <h3> Free, secure, and decentralized app that puts over 1,000 cryptocurrencies at your fingertips. </h3>
                                {/* <Button as="a" variant="primary" href="https://bridge.lfi.io/">
                                    Open Bridge
                                </Button>
                                <Button as="a" variant="text" href="#bridgeText">
                                    Learn More
                                </Button> */}
                            </div>
                        </Col>
                        <Col md="5" xs="12">
                            <div className="text-center heroImg">
                                <Image src={softwareWalletBanner.src} className="rot" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>







            <section className="keyFeaturesSec">
                <Container>
                    <Row>
                        <Col  xs="12">
                            <div className="infoText text-center">
                                <h2> Key Features  </h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center align-items-center">
                        <Col md="4" xs="12">
                            <div className="wrapTextBox frame">
                                <div className="lines"></div>
                                <div className="angles"></div>
                                <article>
                                    <Image src={decentralizedIcon.src} className="rot" />
                                    <h3> Decentralized </h3>
                                    <h5> Your control, your way. Create or import a wallet via mnemonic phrase, private key, keystore, or observation mode.</h5>
                                </article>
                            </div>
                        </Col>

                        <Col md="4" xs="12">
                            <div className="wrapTextBox frame">
                                <div className="lines"></div>
                                <div className="angles"></div>
                                <article>
                                    <Image src={securenetworkIcon.src} className="rot" />
                                    <h3> Secure </h3>
                                    <h5> Peace of mind, always. We have got you covered with passphrase protection, security passwords, and even fingerprint and pattern locks.</h5>
                                </article>
                            </div>
                        </Col>

                        <Col md="4" xs="12">
                            <div className="wrapTextBox frame">
                                <div className="lines"></div>
                                <div className="angles"></div>
                                <article>
                                    <Image src={userfriendlyIcon.src} className="rot" />
                                    <h3> User-Friendly </h3>
                                    <h5> Cryptocurrency, simplified. With our intuitive interface, managing cryptocurrencies has never been easier.</h5>
                                </article>
                            </div>
                        </Col>

                        <Col md="4" xs="12">
                            <div className="wrapTextBox frame">
                                <div className="lines"></div>
                                <div className="angles"></div>
                                <article>
                                    <Image src={swapIcon.src} className="rot" />
                                    <h3> Swap/Exchange </h3>
                                    <h5> Freedom of choice. Instantly swap and exchange one cryptocurrency for another.</h5>
                                </article>
                            </div>
                        </Col>

                        <Col md="4" xs="12">
                            <div className="wrapTextBox frame">
                                <div className="lines"></div>
                                <div className="angles"></div>
                                <article>
                                    <Image src={earningsIcon.src} className="rot" />
                                    <h3> Earn </h3>
                                    <h5> Profit from your passion. Take advantage of the best APY from a powerful DeFi and CeFi aggregator.</h5>
                                </article>
                            </div>
                        </Col>

                        <Col md="4" xs="12">
                            <div className="wrapTextBox frame">
                                <div className="lines"></div>
                                <div className="angles"></div>
                                <article>
                                    <Image src={dappsaccessIcon.src} className="rot" />
                                    <h3> Dapps Access </h3>
                                    <h5> Your Dapps, all in one place. Store and access your favorite Dapps across various blockchains.</h5>
                                </article>
                            </div>
                        </Col>
                        <Col md="4" xs="12">
                            <div className="wrapTextBox frame">
                                <div className="lines"></div>
                                <div className="angles"></div>
                                <article>
                                    <Image src={miningIcon.src} className="rot" />
                                    <h3> Minting </h3>
                                    <h5> Increase your assets. Issue new LFI tokens into the circulating supply and reap the rewards.</h5>
                                </article>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="12" className="text-center mt-5">
                            <Button as="a" variant="primary" href="https://white-paper.lfi.io/layer-3-dapps/lfi-software-wallet">
                                Learn More
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </main >
    )
}

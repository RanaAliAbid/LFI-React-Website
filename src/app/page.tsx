'use client'
import React, { useState } from "react";
import Head from "next/head";

import { Metadata } from 'next';

import { useRef, useEffect } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Container, Form, Nav, Navbar, NavDropdown, Button, Image, Row, Col, Modal } from 'react-bootstrap';

import Header from "./components/common/header";
import Footer from "./components/common/footer";
import LfiCoin from "../../public/img/lfi-token.svg";
import CLfiCoin from "../../public/img/clfi-token.svg";
import VLfiCoin from "../../public/img/vlfi-token.svg";

import blockchain from "../../public/img/blockchainbanner.png";
import { getTermsAndCondition, setTermsAndCondition } from "./actions";

const Box = ({ speed }: any) => {
    const { scrollYProgress } = useScroll();
    const yValue = useTransform(
        scrollYProgress,
        [0, 10],
        [0, 100 * speed]
    );
    return (
        <Image src="/img/green-lfi-one.png" alt='LFi' />
    )
}


export default function Home() {    
    // const ref = useRef(null);
    const buttRef = useRef(null);
    const ldolRef = useRef(null);
    const mobileRef = useRef(null);
    const hardwareRef = useRef(null);
    const ldaoRef = useRef(null);
    const hardwareImgRef = useRef(null);

    const [cookieShow, setCookieShow] = useState(false);
    
    const [isMarketingCookie, setIsMarketingCookie] = useState(false);
    const [isPersonalizationCookie, setIsPersonalizationCookie] = useState(false);
    const [isAnalysysCookie, setIsAnalysysCookie] = useState(false);

    const [isCookieAccept, setIsCookieAccept] = useState(true);
    const [mobileSecClass, setMobileSecClass] = useState(false);
    const [hardwareSecClass, setHardwareSecClass] = useState(false);

    const isInMobileView = useInView(mobileRef);
    const isInHardwareView = useInView(hardwareRef);
    const isInldaoView = useInView(ldaoRef);
    const inHardwareTextView = useInView(hardwareImgRef);
    
    const { scrollYProgress } = useScroll();
    // top progressbar animation
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });
    
    const mobileRefScroll = useScroll({
        target: mobileRef
    }).scrollYProgress;

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
    
    const handleClose = (isAccept: boolean) => {
        setCookieShow(false);
        if(isAccept === true) {
            setTermsAndCondition('true');
        }
    };

    const checkTermsAndCondition = async () => {
        const isCheckTermsAndCondition = await getTermsAndCondition();
        if (isCheckTermsAndCondition?.value !== 'true') {
            setCookieShow(true);
        }
    }
    
    useEffect(() => {
        // console.log( isInMobileView, isInHardwareView, isInldaoView)
        setMobileSecClass(false);
        setHardwareSecClass(false);
        if (!isInHardwareView && isInMobileView) {
            setMobileSecClass(true);
            setHardwareSecClass(false);
        }
        if (isInHardwareView) {
            setMobileSecClass(false);
        }
        if (inHardwareTextView) {
            setHardwareSecClass(true);
        }
        if (isInHardwareView && !isInMobileView && !isInldaoView) {
            setHardwareSecClass(true);
        } else if (isInldaoView) {
            setHardwareSecClass(false);
        }

        checkTermsAndCondition();
    }, [
        isInMobileView,
        isInHardwareView,
        isInldaoView,
        inHardwareTextView,
    ])

    return (
        <>

            <Modal className="cookieModal" show={cookieShow} onHide={() => {
                return false;
            }}>
                <Modal.Header closeButton>
                    <h4>Terms Consent</h4>
                </Modal.Header>
                <Modal.Body>
                    <p>Our Website stores data such as cookies to enable
                        essential site functionality as well as marketing,
                        personalization and analytics. You may change your
                        settings at any time or accept the default settings. We also
                        have a comprehensive privacy policy which governs how
                        we collect, use and protect your personal information. By
                        clicking proceed you agree to be bound by our
                        <a href="https://docs.lfi.io/legal-documents/privacy-and-cookie-policy"> Privacy and Cookies Policy. </a> </p>
                    <div className="formSec">
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Marketing"
                            checked={isMarketingCookie}
                            onChange={(e) => {
                                setIsMarketingCookie(e.target.checked);
                            }}
                        />
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Personalization"
                            checked={isPersonalizationCookie}
                            onChange={(e) => {
                                setIsPersonalizationCookie(e.target.checked)
                            }}
                        />
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Analytics"
                            checked={isAnalysysCookie}
                            onChange={(e) => {
                                setIsAnalysysCookie(e.target.checked)
                            }}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose(false)}>
                        Reject
                    </Button>
                    <Button variant="primary" onClick={() => handleClose(true)} disabled={(!isMarketingCookie || !isPersonalizationCookie || !isAnalysysCookie) ? true : false}>
                        Accept
                    </Button>
                </Modal.Footer>
            </Modal>

            <Header />

            <section className="wrapSection herosec herobanner fullView">
                <Container>
                    <Row className="justify-content-center">
                        <Col xxl="8" xl="9" lg="9" md="10" xs="12">
                            <div className="hero text-center">
                                <motion.div
                                    transition={{ ease: "easeIn", duration: 0.5 }}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                    viewport={{ once: true }}
                                >
                                    <h1> Build Your Independence </h1>
                                </motion.div>

                                <motion.div
                                    transition={{ ease: "easeIn", duration: 0.5, delay: 0.2 }}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <h3>LFi is a decentralized platform designed to provide equal opportunities for wealth generation and financial independence through crypto.</h3>
                                </motion.div>

                                <motion.div
                                    transition={{ ease: "easeIn", duration: 0.6, delay: 0.3 }}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <Button as="a" variant="primary" href="#lfiMob">
                                        Learn More
                                    </Button>
                                </motion.div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section id="lfiMob" className={mobileSecClass ? "wrapSection relative show" : "wrapSection relative"} ref={mobileRef}>
                <div className="phone-shadow"></div>
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md="6" className="orederTwo">
                            <div className="img-container">
                                <Box speed={-10} />
                                <Button as="a" variant="primary" className="d-block d-sm-none" href="/lfione">
                                    Discover LFi One
                                </Button>
                            </div>
                        </Col>
                        <Col md="6" className="orederOne">
                            <div className="infoText mobInfoText">
                                <p> <span> Ecosystem </span>  Smartphone </p>
                                <h2> LFi One </h2>
                                <h3> A revolutionary smartphone that allows users to mint tokens and enter the crypto world seamlessly. </h3>
                                <Button as="a" variant="primary" className="d-none d-sm-block" href="/lfione">
                                    Discover LFi One
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className={hardwareSecClass ? "wrapSection mintingSec relative show" : "wrapSection mintingSec"} ref={hardwareRef}>
                <Container>
                    <Row className="justify-content-center">
                        <Col xxl="8" xl="9" lg="9" md="9" xs="12">
                            <div className="infoText mintTitle">
                                <motion.div
                                    initial={{ opacity: 0, y: "0%", visibility: 'hidden', scale: 0.5 }}
                                    whileInView={{ opacity: 1, y: "0%", visibility: 'visible' }}
                                    transition={{ fade: "fadeIn", duration: 1, delay: 0.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false }}
                                >
                                    <h2> LFi Minting Machine  </h2>
                                </motion.div>

                                <motion.div
                                    transition={{ ease: "easeIn", duration: 0.5, delay: 0.2 }}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <h3>Different types of cutting-edge hardware to mint tokens, authenticate data, and collect rewards in LFi. </h3>
                                </motion.div>




                            </div>
                        </Col>
                        <Col md="12" className="text-center relative">
                            <motion.div
                                transition={{ fade: "fadeIn", duration: 0.7, delay: 0.6 }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >

                                <div className="img" ref={hardwareImgRef}>
                                    <Image src="/img/minting-machine.png" alt='LFi' />
                                </div>
                            </motion.div>


                            <Button as="a" variant="primary" href="/minting-machine" className="mintbtn">
                                Learn More
                            </Button>

                        </Col>
                    </Row>
                </Container>
                <div className="minting-shadow"></div>
            </section>

            <section className="wrapSection herosec">
                <Container>

                    <Row className="align-items-center">
                        <Col md="6" sm="6" xs="12">
                            <div className="hero">
                                <h1> LFi Blockchain </h1>
                                <h3> An independent blockchain boasting Smart Contract capabilities, dApps and compatibility with the Ethereum Virtual Machine (EVM).</h3>
                                <Button as="a" variant="primary" href="/blockchain">
                                    Learn More
                                </Button>
                                {/* <Button as="a" variant="text" href="#bridgeText">
                                    Learn More
                                </Button> */}
                            </div>
                        </Col>
                        <Col md="6" sm="6" xs="12">
                            <div className="text-center heroImg">
                                <Image src={blockchain.src} className="rot" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="wrapSection ldaosec">
                <div className="height100" ref={ldolRef}></div>
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
                                    <path className="" d="M466 1H31C14.4315 1 1 14.4315 1 31V511C1 527.569 14.4315 541 31 541H466" />
                                    <motion.path className="ldaoPath" stroke="url(#gradient)" d="M466 1H31C14.4315 1 1 14.4315 1 31V511C1 527.569 14.4315 541 31 541H466" style={{ pathLength: ldoborders }} />

                                </svg>

                                <svg width="50%" height="100%" className="ldoBorder right" viewBox="0 0 466 542" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="" d="M0 1H435C451.569 1 465 14.4315 465 31V511C465 527.569 451.569 541 435 541H0" />
                                    <motion.path className="ldaoPath" stroke="url(#gradient)" d="M0 1H435C451.569 1 465 14.4315 465 31V511C465 527.569 451.569 541 435 541H0" style={{ pathLength: ldoborders }} />
                                </svg>
                            </div>

                            <div className="ldaoBox">
                                <div className="ldaoInnerBox">
                                    <div className="textInfo">
                                        <h4> LFi Blockchain </h4>
                                        <Image src="/img/dApps.svg" />
                                        <h3>Decentralized applications running on our own proprietary LFi Blockchain and public networks.</h3>
                                        <Button as="a" variant="primary" href="/blockchain#lfidappSec">
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>


            <section className="wrapSection tokensec">
                <Container>

                    <Row className="justify-content-center">
                        <Col md="12">
                            <div className="infoText text-center mb-5">
                                <h2> LFi Tokens  </h2>
                            </div>
                        </Col>

                    </Row>
                    <Row className="justify-content-center">
                        <Col md="4" >
                            <div className="tokenText">
                                <LfiCoin />
                                <h3> LFi </h3>
                                <h5> LFi is the native token of the LFi ecosystem that provides users the access to the network’s services.  </h5>
                            </div>
                        </Col>

                        <Col md="4">
                            <div className="tokenText">
                                <CLfiCoin />
                                <h3> cLFi  </h3>
                                <h5> cLFi is the collateral token of LFi ecosystem, which allows users to participate in the Proof-of-coverage minting. </h5>
                            </div>
                        </Col>

                        <Col md="4">
                            <div className="tokenText">
                                <VLfiCoin />
                                <h3> vLFi  </h3>
                                <h5> vLFi holders will receive rewards, obtain discounts, get wider allocations in launchpad, and more. </h5>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md="12">
                            <div className="text-center mt-5">
                                <Button as="a" variant="primary" href="/tokens">
                                    Explore all
                                </Button>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>

            <section className="wrapSection visionSec">
                <div className="visionHeight" ref={buttRef} > </div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="10" md="11" className="relative">
                            <figure className="visionProgressBar">
                                <svg className="d-none d-sm-block" width="100%" height="100%" viewBox="0 0 1101 596" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stop-color="#070A0B" />
                                            {/* <stop offset="15%" stop-color="#464646" />  */}
                                            <stop offset="20%" stop-color="#464646" />
                                            <stop offset="100%" stop-color="#04FCA3" />
                                        </linearGradient>
                                    </defs>
                                    <path className="" d="M1 0.5V266.5C1 283.069 14.4315 296.5 31 296.5H1070C1086.57 296.5 1100 309.931 1100 326.5V565C1100 581.569 1086.57 595 1070 595H931.289H762.577" />
                                    <motion.path stroke="url(#gradient)" className="visionMissionPath" d="M1 0.5V266.5C1 283.069 14.4315 296.5 31 296.5H1070C1086.57 296.5 1100 309.931 1100 326.5V565C1100 581.569 1086.57 595 1070 595H931.289H762.577" style={{ pathLength: scrollvisionProgressBar }} />

                                </svg>

                                <svg className="d-block d-sm-none" width="100%" height="100%" viewBox="0 0 400 579" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stop-color="#070A0B" />
                                            {/* <stop offset="15%" stop-color="#464646" />  */}
                                            <stop offset="20%" stop-color="#464646" />
                                            <stop offset="100%" stop-color="#04FCA3" />
                                        </linearGradient>
                                    </defs>
                                    <path className="" d="M1 0.5V231.173C1 247.742 14.4315 261.173 31 261.173H369C385.569 261.173 399 274.605 399 291.173V548C399 564.569 385.569 578 369 578H337.902H276.803" />
                                    <motion.path stroke="url(#gradient)" className="visionMissionPath" d="M1 0.5V231.173C1 247.742 14.4315 261.173 31 261.173H369C385.569 261.173 399 274.605 399 291.173V548C399 564.569 385.569 578 369 578H337.902H276.803" style={{ pathLength: scrollvisionProgressBar }} />

                                </svg>

                                <div className="text-center desktopHide">
                                    <Button as="a" variant="primary" href="/ecosystem">
                                        Ecosystem
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
                                        <h4>To empower individuals to take control of their wealth by providing accessible financial opportunities through a platform driven by a DAO community.</h4>
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
                                        <Button as="a" variant="primary" href="/ecosystem">
                                            Ecosystem
                                        </Button>
                                    </div>
                                </Col>
                            </Row>



                        </Col>
                    </Row>
                </Container>
            </section>




            <Footer />


        </>
    )
}

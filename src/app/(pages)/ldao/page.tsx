'use client'
import React from "react";

import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";

import { useRef, useEffect } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Container, Form, Nav, Navbar, NavDropdown, Button, Image, Row, Col } from 'react-bootstrap';

import WhiteLogo from "../../../../public/img/white-logo.svg";

import ldoImg from "../../../../public/img/hero-ldo.png";
// import mintLogo from "../../public/img/mint-logo.png";

import ecosystem from "../../../../public/img/ecosystem.png";
import smartContarct from "../../../../public/img/smartContarct.png";
import power from "../../../../public/img/power.png";



export default function MintingMachine() {
    const buttRef = useRef(null);
    const { scrollYProgress } = useScroll();

    // top progressbar animation
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });


    // steps path animation
    const scrollvisionProgressBar = useScroll({
        target: buttRef,
        offset: ["end end", "start start"]
    }).scrollYProgress;




    return (
        <main>
            <Header />

            <section className="wrapSection herosec">
                <Container>
                    <Row className="align-items-center">
                        <Col md="6" xs="12">
                            <div className="hero">
                                <motion.div
                                    transition={{ ease: "easeIn", duration: 0.5 }}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                    viewport={{ once: true }}
                                >
                                    <h1> L-DAO </h1>
                                </motion.div>

                                <motion.div
                                    transition={{ ease: "easeIn", duration: 0.5, delay: 0.2 }}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <h3> Enjoy complete autonomy. L-DAO is an ecosystem that is built for you, controlled by you, and owned by you. </h3>
                                </motion.div>

                                <motion.div
                                    transition={{ ease: "easeIn", duration: 0.6, delay: 0.3 }}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <Button as="a" variant="primary">
                                        Learn More
                                    </Button>
                                </motion.div>

                            </div>
                        </Col>
                        <Col md="6" xs="12">
                            <div className="text-center">
                                <Image src={ldoImg.src} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>




            <section className="stepSec">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="10" md="10" className="relative">
                            <figure className="stepProgressBar">
                                <svg className="d-none d-sm-block" width="100%" height="100%" viewBox="0 0 953 757" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="1%" stop-color="#070A0B" />
                                            <stop offset="10%" stop-color="#0f1516" />
                                            <stop offset="20%" stop-color="#464646" />
                                            <stop offset="100%" stop-color="#04FCA3" />
                                        </linearGradient>
                                    </defs>

                                    <motion.path stroke="url(#gradient)" className="visionMissionPath" d="M473.5 0V73.5035C473.5 90.072 460.069 103.504 443.5 103.504H31C14.4315 103.504 1 116.935 1 133.504V292.011C1 308.579 14.4315 322.011 31 322.011H921.5C938.069 322.011 951.5 335.442 951.5 352.011V510.124C951.5 526.693 938.069 540.124 921.5 540.124H31C14.4315 540.124 1 553.556 1 570.124V726C1 742.569 14.4315 756 31 756H951.5" style={{ pathLength: scrollvisionProgressBar }} />

                                </svg>

                                <svg className="d-block d-sm-none" width="100%" height="100%" viewBox="0 0 400 579" fill="none" xmlns="http://www.w3.org/2000/svg">

                                </svg>
                            </figure>
                            
                            <Row className="rowText" >
                                <Col md="6">
                                    <div className="textBox">
                                        <h2> <strong> Step 01 </strong> </h2>
                                        <h4> A user’s voting power is dependent on the number of vLFi tokens they own.</h4>
                                    </div>
                                </Col>
                            </Row>
                            <div ref={buttRef} > </div>
                            <Row className="rowText justify-content-end">
                                <Col md="6">
                                    <div className="textBox text-right">
                                        <h2> <strong> Step 01 </strong> </h2>
                                        <h4> A user’s voting power is dependent on the number of vLFi tokens they own.</h4>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="rowText">
                                <Col md="6">
                                    <div className="textBox">
                                        <h2> <strong> Step 01 </strong> </h2>
                                        <h4> A user’s voting power is dependent on the number of vLFi tokens they own.</h4>
                                    </div>
                                </Col>
                            </Row>





                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="wrapSection ldoSec">
                <Container>

                    <Row className="justify-content-center">
                        <Col md="12">
                            <div className="infoText text-center">
                                <h2> Why  L-DAO?  </h2>
                            </div>
                        </Col>

                    </Row>
                    <Row className="justify-content-center">
                        <Col md="4">
                            <div className="ldoIconBox">
                                <Image src={ecosystem.src}/>
                            </div>
                            <div className="greenGrad"> </div>
                            <div className="ldoBoxWrap greenBorder">                                
                                <h3> An ecosystem that is for you </h3>
                                <h5> LFi is a decentralized autonomous organization that adapts to the decisions of its users through smart contracts.  </h5>
                            </div>
                        </Col>

                        <Col md="4">
                            <div className="ldoIconBox">
                                <Image src={smartContarct.src}/>
                            </div>
                            <div className="ldoBoxWrap greenBorder">
                                <h3> Smart Contract  </h3>
                                <h5> A smart contract is a program that automates complex transactions on a blockchain without third-party involvement. </h5>
                            </div>
                        </Col>

                        <Col md="4">
                            <div className="ldoIconBox">
                                <Image src={power.src}/>
                            </div>
                            <div className="ldoBoxWrap greenBorder">
                                <h3> You have the power  </h3>
                                <h5> Each LFi user is given the power to vote for amendments that will transform the platform  to its full potential. </h5>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md="12">
                            <div className="text-center mt-5">
                                <Button as="a" variant="primary">
                                    Explore all
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
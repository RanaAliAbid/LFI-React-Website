'use client'
import React, { useState } from "react";

import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";

import { useRef, useEffect } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Container, Tab, Tabs, Nav, Navbar, NavDropdown, Button, Image, Row, Col } from 'react-bootstrap';

import launchpadbanner from "../../../../public/img/launchpad.png";
import icon01 from "../../../../public/img/icon01.png";





export default function Launchpad() {
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

            <section className="wrapSection herosec">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="10" xs="12">
                            <div className="hero text-center">
                                <motion.div
                                    transition={{ ease: "easeIn", duration: 0.5 }}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                    viewport={{ once: true }}
                                >
                                    <h1> Launchpad </h1>
                                </motion.div>

                                <motion.div
                                    transition={{ ease: "easeIn", duration: 0.5, delay: 0.2 }}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <h3>Accelerate your business to new heights.</h3>
                                </motion.div>

                                <Image src={launchpadbanner.src} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section className="bussinessTabssec">
                <Container>
                    <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="bussinessTabs justify-content-center"
                    >
                        <Tab eventKey="home" title="For Investors">
                            <Row className="align-items-center">
                                <Col md="6" xs="12">
                                    <div className="wrapTextBox frame">
                                        <div className="lines"></div>
                                        <div className="angles"></div>
                                        <article>
                                            <Image src={icon01.src} />
                                            <h3> Tap into early-stage projects </h3>
                                            <h5> Gain early access to promising crypto startups before they become widely available.</h5>
                                        </article>
                                    </div>
                                </Col>

                                <Col md="6" xs="12">
                                    <div className="wrapTextBox frame">
                                        <div className="lines"></div>
                                        <div className="angles"></div>
                                        <article>
                                            <Image src={icon01.src} />
                                            <h3> Extensive analysis  </h3>
                                            <h5> Only crypto projects with strong potential are featured in the platform.</h5>
                                        </article>
                                    </div>
                                </Col>
                                <Col md="6" xs="12">
                                    <div className="wrapTextBox frame">
                                        <div className="lines"></div>
                                        <div className="angles"></div>
                                        <article>
                                            <Image src={icon01.src} />
                                            <h3> User protection </h3>
                                            <h5> Top-notch mechanisms to reduce fraudulent activities and other forms of risks.</h5>
                                        </article>
                                    </div>
                                </Col>

                                <Col md="6" xs="12">
                                    <div className="wrapTextBox frame">
                                        <div className="lines"></div>
                                        <div className="angles"></div>
                                        <article>
                                            <Image src={icon01.src} />
                                            <h3> Unlock opportunities </h3>
                                            <h5> Enter a community of like-minded crypto enthusiasts.</h5>
                                        </article>
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="profile" title="For Startups">
                            <Row className="align-items-center startupsBox">
                                <Col md="6" xs="12">
                                    <div className="wrapTextBox frame">
                                        <div className="lines"></div>
                                        <div className="angles"></div>
                                        <article>
                                            <Image src={icon01.src} />
                                            <h3> Secure your project’s funding </h3>
                                            <h5> Attract a broader customer base and raise capital for your project’s development and operations.</h5>
                                        </article>
                                    </div>
                                </Col>

                                <Col md="6" xs="12">
                                    <div className="wrapTextBox frame">
                                        <div className="lines"></div>
                                        <div className="angles"></div>
                                        <article>
                                            <Image src={icon01.src} />
                                            <h3> Get the exposure you need   </h3>
                                            <h5> Obtain the marketing and exposure you need through social media, newsletters, and events. </h5>
                                        </article>
                                    </div>
                                </Col>
                                <Col md="6" xs="12">
                                    <div className="wrapTextBox frame">
                                        <div className="lines"></div>
                                        <div className="angles"></div>
                                        <article>
                                            <Image src={icon01.src} />
                                            <h3> Strengthen your credibility  </h3>
                                            <h5> Establish your credibility, legitimacy, and reputation within a wide crypto community.</h5>
                                        </article>

                                    </div>
                                </Col>

                                <Col md="6" xs="12">
                                    <div className="wrapTextBox frame">
                                        <div className="lines"></div>
                                        <div className="angles"></div>
                                        <article>
                                            <Image src={icon01.src} />
                                            <h3> Build your community </h3>
                                            <h5> Foster thousands of crypto users, advocates, and adopters and create a strong customer base.</h5>
                                        </article>
                                    </div>
                                </Col>
                            </Row>
                        </Tab>

                    </Tabs>


                    <Row>
                        <Col xs="12" className="text-center">
                            <Button as="a" variant="primary">
                                LFi Launchpad
                            </Button>
                        </Col>
                    </Row>

                </Container>
            </section>








            <Footer />

        </main>
    )
}

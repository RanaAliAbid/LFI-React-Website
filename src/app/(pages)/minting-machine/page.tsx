'use client'
import React from "react";
import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";

import { useRef, useEffect } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Container, Form, Nav, Navbar, NavDropdown, Button, Image, Row, Col } from 'react-bootstrap';

import Minter1000 from "../../../../public/img/minter1000.png";


export default function MintingMachine() {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll();

    // top progressbar animation
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    const isInView = useInView(ref)

    const { scrollY } = useScroll();
    const scaleRight = useTransform(scrollY, [0, 500], [2, 1]);
    const yRight = useTransform(scrollY, [0, 500], ["0vh", "0vh"]);
    const xRight = useTransform(scrollY, [0, 500], ["0vw", "0vw"]);


    const scaleRight2 = useTransform(scrollY, [0, 500], [2, 1]);
    const yRight2 = useTransform(scrollY, [0, 500], ["0vh", "0vh"]);
    const xRight2 = useTransform(scrollY, [0, 500], ["0vw", "0vw"]);

    useEffect(() => {
        // const scrollPosition = window.scrollY
        console.log("scrollPosition", scrollY)
    }, [isInView, scrollY])

    return (
        <main>
            <Header />
            <section className="wrapSection herosec fullView">
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
                                    <h1> LFi Minting Machine </h1>
                                </motion.div>

                                <motion.div
                                    transition={{ ease: "easeIn", duration: 0.5, delay: 0.2 }}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <h3>Cutting-edge hardware to mint LFi tokens</h3>
                                </motion.div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="wrapSection minter">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md="10" className="text-center">
                            <div
                                style={{
                                    height: "50vh",
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    position: "sticky",
                                    top: "0px",
                                }}
                            >

                                <motion.div
                                    className="child"
                                    style={{
                                        scale: scaleRight,
                                        y: yRight,
                                        x: xRight,
                                    }}
                                >
                                    <div className="img">
                                        <Image src={Minter1000.src} alt='LFi' />
                                    </div>
                                </motion.div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center align-items-center">
                        <Col md="6" className="">
                            <div className="infoText text-center">
                                <h2> XLFi 1000 Minter  </h2>
                                <p> <span> Mint </span> your way to a brighter future </p>
                                <h3> Designed to provide you with a simple and hassle-free way to create LFi tokens right from the comfort of your own home </h3>
                                <Button as="a" variant="primary"  target= "_blank" href="https://white-paper.lfi.io/layer-2-iop-and-hardware/hardware/miner-xlfi1000">
                                    Explore More
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="wrapSection minter" ref={ref}>
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md="10" className="text-center">
                            <div
                                style={{
                                    height: "50vh",
                                    width: "100%",

                                    position: "sticky",
                                    top: "0px",
                                }}
                            >

                                <motion.div
                                    className="child"
                                    style={{
                                        scale: scaleRight2,
                                        y: yRight2,
                                        x: xRight2,
                                    }}
                                >
                                    <div className="img">
                                        <Image src={Minter1000.src} alt='LFi' />
                                    </div>
                                </motion.div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center align-items-center">
                        <Col md="6" className="">
                            <div className="infoText text-center">
                                <h2> XLFi 5000 Minter </h2>
                                <p> Discover new possibilities and unlock your financial future </p>
                                <h3> Access a range of exciting features and functions that will take your financial game to the next level. </h3>
                                <Button as="a" variant="primary" target= "_blank" href="https://white-paper.lfi.io/layer-2-iop-and-hardware/hardware/miner-plus-xlfi5000">
                                    Explore More
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

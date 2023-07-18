'use client'
import React, { useState } from "react";

import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";

import { useRef, useEffect } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Container, Tab, Tabs, Nav, Navbar, NavDropdown, Button, Image, Row, Col } from 'react-bootstrap';


export default function Blockchain() {
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
                                    <h1> LFi Blockchain </h1>
                                </motion.div>

                              
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

          
            <Footer />

        </main>
    )
}

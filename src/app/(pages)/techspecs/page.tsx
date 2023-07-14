'use client'
import React, { useState } from "react";


import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";

import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Container, Form, Nav, Navbar, NavDropdown, Button, Image, Row, Col } from 'react-bootstrap';

import WhiteLogo from "../../../../public/img/white-logo.svg";
import techSpecmobile from "../../../../public/img/lfispecs.png";




export default function TechSpecs() {







    return (
        <>
            <Header />
            <section className="mobileNameHead">
                <Container>
                    <Navbar className="nameBar">
                        <Navbar.Brand href="#">LFi Phone </Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link href="/lfione" className="active">Overview</Nav.Link>
                            <Nav.Link href="/techspecs">Tech Specs</Nav.Link>
                            <Nav.Link href="https://lyotechlabs.com" className="buybtn">Buy Now</Nav.Link>
                        </Nav>
                    </Navbar>

                </Container>
            </section>

            <section className="techSpecHero herosec">
                <Container>
                    <Row className="align-items-center">
                        <Col md="5" xs="12">
                            <div className="hero">
                                <h1> LFi One </h1>
                                <h3> Connecting multiple blockchains to bring more users together. </h3>

                            </div>
                        </Col>
                        <Col md="7" xs="12">
                            <div className="text-center heroImg">
                                <Image src={techSpecmobile.src} className="rot" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="specificationsSec">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="wrapTitle text-center">
                                <h3> Full Technical specifications  </h3>                                
                            </div>
                        </Col>
                    </Row>                    
                    <Row>
                        <Col md="12">
                            <ul className="specList">
                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Processor  </h5>                                
                                    </div>
                                    <div className="textWrap">
                                        <h6> CPU: Octa-core, 12nm, up to 2.0GHz </h6>       
                                    </div>
                                </li>

                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Storage  </h5>                                
                                    </div>
                                    <div className="textWrap">
                                        <h6> 128GB </h6>       
                                    </div>
                                </li>

                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Display  </h5>                                
                                    </div>
                                    <div className="textWrap">
                                        <h6> 16.7cm (6.7) FHD Fullscreen </h6> 
                                        <ul>
                                            <li> Resolution: 2408*1080 </li>
                                            <li> Screen-to-body ratio: 90.7% </li>
                                            <li> Touch sampling rate: 180Hz</li>
                                            <li> Peak Brightness: 600nits </li>
                                            <li> PPI: 401 </li>
                                            <li> Ultra-High Resolution       </li>
                                        </ul>
                                    </div>
                                </li>

                               
                            </ul>
                        </Col>                        
                    </Row>


                </Container>
            </section>



            <Footer />
        </>
    )
}

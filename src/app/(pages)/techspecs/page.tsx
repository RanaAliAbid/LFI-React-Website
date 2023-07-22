'use client'
import React, { useState } from "react";
import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";

import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Container, Form, Nav, Navbar, NavDropdown, Button, Image, Row, Col } from 'react-bootstrap';


import techSpecmobile from "../../../../public/img/lfispecs.png";

import anatel from "../../../../public/img/certificates/anatel.png";
import bluetooth from "../../../../public/img/certificates/bluetooth.png";
import ce from "../../../../public/img/certificates/CE.png";
import fc from "../../../../public/img/certificates/fc.png";
import check from "../../../../public/img/certificates/check.png";
import goi from "../../../../public/img/certificates/goi.png";
import gsma from "../../../../public/img/certificates/gsma.png";
import mark from "../../../../public/img/certificates/mark.png";
import mintic from "../../../../public/img/certificates/mintic.png";
import mtc from "../../../../public/img/certificates/mtc.png";
import rohs from "../../../../public/img/certificates/rohs.png";
import thunder from "../../../../public/img/certificates/thunder.png";
import wifi from "../../../../public/img/certificates/wifi.png";










export default function TechSpecs() {

    return (
        <>
            <Header />
            <section className="mobileNameHead">
                <Container>
                    <Navbar className="nameBar">
                        <Navbar.Brand href="#">LFi One </Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link href="/lfione">Overview</Nav.Link>
                            <Nav.Link href="/techspecs" className="active">Tech Specs</Nav.Link>
                            <Nav.Link href="https://lyotechlabs.com/product/lfi-smartphone/" className="buybtn">Buy Now</Nav.Link>
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
                        <Col md="8">
                            <ul className="specList">
                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Dimensions  </h5>                                
                                    </div>
                                    <div className="textWrap">
                                        <ul className="subList"> 
                                            <li> 168.7*76.9*11mm  </li>                                            
                                        </ul>                                         
                                    </div>
                                </li>

                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> CPU / GPU  </h5>                                
                                    </div>
                                    <div className="textWrap">
                                        <ul className="subList"> 
                                            <li> Octa Cores </li>
                                            <li> High Performance CPU </li>
                                            <li> 2 Cores A78 2.4GHz </li>
                                            <li> 6 Cores A55 2.0GHz </li>
                                        </ul>       
                                    </div>
                                </li>

                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Network  </h5>                                
                                    </div>
                                    <div className="textWrap">                                        
                                        <ul className="subList">
                                            <li> 2G / 3G / 4G / 5G Multi-Mode </li>
                                            <li> EDGE, 4G FDD / TDD, 5G FDD / TDD, GSM, WCDMA </li>
                                            <li> 2 SIM</li>                                            
                                        </ul>
                                    </div>
                                </li>

                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Memory  </h5>                                
                                    </div>
                                    <div className="textWrap">                                        
                                        <ul className="subList">
                                            <li> 12GB RAM </li>
                                            <li> 256GB ROM </li>                                            
                                        </ul>
                                    </div>
                                </li>

                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Sensors Supported	  </h5>                                
                                    </div>
                                    <div className="textWrap">
                                        <ul className="subList">
                                            <li> Compass </li>
                                            <li> Gyro, IR, Tap </li>                                            
                                            <li> Finger Print </li>
                                        </ul>                                        
                                    </div>
                                </li>

                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Display  </h5>                                
                                    </div>
                                    <div className="textWrap">                                        
                                        <ul className="subList">
                                            <li> IPS (6.7&Prime;) FHD+ @ 120Hz 396 DPI </li>
                                            <li> Gorilla Glass Type 5 </li>                                            
                                        </ul>
                                    </div>
                                </li>


                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Audio  </h5>                                
                                    </div>
                                    <div className="textWrap">                                        
                                        <ul className="subList">
                                            <li> Deep Audio System </li>
                                            <li> Dual Mic and Noise Reduction </li>                                            
                                        </ul>
                                    </div>
                                </li>


                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Battery  </h5>                                
                                    </div>
                                    <div className="textWrap">                                        
                                        <ul className="subList">
                                            <li> 6100mAh </li>
                                            <li> 33W FS Li-iom Polymer </li>                                            
                                        </ul>
                                    </div>
                                </li>

                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Charger  </h5>                                
                                    </div>
                                    <div className="textWrap">                                        
                                        <ul className="subList">
                                            <li> USB-C </li>                                            
                                            <li> also Wireless Charger with 15W </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Rear Camera  </h5>                                
                                    </div>
                                    <div className="textWrap">                                        
                                        <ul className="subList">
                                            <li> Sony IMX686</li>
                                            <li> 64MP, Digital Zoom </li>                                            
                                        </ul>
                                    </div>
                                </li>

                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Wide Camera  </h5>                                
                                    </div>
                                    <div className="textWrap">                                        
                                        <ul className="subList">
                                            <li> Sony IMX350 </li>
                                            <li> 20MP, 120° </li>                                            
                                        </ul>
                                    </div>
                                </li>

                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Macro Camera  </h5>                                
                                    </div>
                                    <div className="textWrap">                                        
                                        <ul className="subList">
                                            <li> GC05A2 </li>
                                            <li> 5MP </li>                                            
                                        </ul>
                                    </div>
                                </li>

                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Front Camera  </h5>                                
                                    </div>
                                    <div className="textWrap">                                        
                                        <ul className="subList">
                                            <li> Sony IMX376 </li>
                                            <li> 20MP </li>                                            
                                        </ul>
                                    </div>
                                </li>

                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Flash  </h5>                                
                                    </div>
                                    <div className="textWrap">                                        
                                        <ul className="subList">
                                            <li> Dual Flash LED </li>                                            
                                        </ul>
                                    </div>
                                </li>


                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Continuous shots Support </h5>                                
                                    </div>
                                    <div className="textWrap">                                        
                                        <ul className="subList">
                                            <li> Yes it is </li>                                            
                                        </ul>
                                    </div>
                                </li>

                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Camera Modes Supported	 </h5>                                
                                    </div>
                                    <div className="textWrap">                                        
                                        <ul className="subList">
                                            <li> Normal mode </li>                                            
                                            <li> HDR mode </li>
                                            <li> Super night view </li>
                                            <li> Face beauty mode  </li>
                                            <li> Panorama mode </li>
                                            <li> AI identification</li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Recording	 </h5>                                
                                    </div>
                                    <div className="textWrap">                                        
                                        <ul className="subList">
                                            <li> H.264, MPEG4 </li>                                            
                                            <li> 3GP (3GPP, H263, TS26.140 Rel. 5) </li>
                                            <li> .mp4 (H.264, MPEG-4) </li> 
                                            <li> 30fps, 4k Supported</li>                                           
                                        </ul>
                                    </div>
                                </li>

                                <li className="item"> 
                                    <div className="titleBox">
                                        <h5> Playback	 </h5>                                
                                    </div>
                                    <div className="textWrap">                                        
                                        <ul className="subList">
                                            <li> AVI, MP4, WMV, RMVB,</li>                                            
                                            <li> MKV, MOV, ASF, RM, FLV </li>
                                            <li> H.264, H.265 / HEVC, MPEG-1/2/4, VP-9 </li> 
                                            <li> 30fps, 4k</li>                                           
                                        </ul>
                                    </div>
                                </li>



                            </ul>
                        </Col>     

                        <Col md="4" className="text-center">
                            <ul className="certificatesList">
                                <li>
                                    <Image src={check.src} />
                                </li>
                                <li>
                                    <Image src={thunder.src}/>
                                </li>
                                <li>
                                    <Image src={goi.src}/>
                                </li>
                                <li>
                                    <Image src={mark.src}/>
                                </li>
                                <li>
                                    <Image src={mtc.src}/>
                                </li>
                                <li>
                                    <Image src={mintic.src}/>
                                </li>
                                <li>
                                    <Image src={ce.src}/>
                                </li>
                                <li>
                                    <Image src={rohs.src}/>
                                </li>
                                <li>
                                    <Image src={fc.src}/>
                                </li>
                                <li>
                                    <Image src={anatel.src}/>
                                </li>
                                <li>
                                    <Image src={bluetooth.src}/>
                                </li>
                                <li>
                                    <Image src={wifi.src}/>
                                </li>
                                <li>
                                    <Image src={gsma.src}/>
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

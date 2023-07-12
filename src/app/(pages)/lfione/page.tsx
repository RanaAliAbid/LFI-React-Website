'use client'
import React, { Children } from "react";

import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";

import AliceCarousel from 'react-alice-carousel';

import { useRef, useEffect } from "react";
import { motion, useAnimation, useTransform, useScroll } from "framer-motion";

import { Container, Form, Nav, Navbar, NavDropdown, Button, Image, Row, Col } from 'react-bootstrap';

import lfiPhone from "../../../../public/img/lfi-one.png";

import smoothDisplay from "../../../../public/img/smoothDisplay.png";
import wirelessCharger from "../../../../public/img/wirelessCharger.png";
import mainCam from "../../../../public/img/64mpCam.png";
import octacoreCpu from "../../../../public/img/octacore.png";
import battery from "../../../../public/img/battery.png";
import network from "../../../../public/img/network.png";
import fhdphone from "../../../../public/img/fhdphone.png";
import rambanner from "../../../../public/img/rambanner.png";
import wlchargre from "../../../../public/img/wl-chargre.png";
import qubeimg from "../../../../public/img/qubeimg.png";
import fingerprint from "../../../../public/img/fingerprint.png";
import audiosystem from "../../../../public/img/audiosystem.png";
import nightview01 from "../../../../public/img/nightview-01.png";
import nightview02 from "../../../../public/img/nightview-02.png";

import continuousShots from "../../../../public/img/continuousShots.png";

import mainCamera from "../../../../public/img/camera.png";
import wideangle from "../../../../public/img/widealgo.png";
import pro01 from "../../../../public/img/pro1.png";
import Dimensions from "../../../../public/img/specsIcon/dimensions.svg";








export default function Lfione() {

    const handleDragStart = (event: React.MouseEvent) => event.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <img src={pro01.src} onDragStart={handleDragStart} role="presentation" />,
        <img src={pro01.src} onDragStart={handleDragStart} role="presentation" />,
        <img src={pro01.src} onDragStart={handleDragStart} role="presentation" />,
        <img src={pro01.src} onDragStart={handleDragStart} role="presentation" />,
        <img src={pro01.src} onDragStart={handleDragStart} role="presentation" />,
        <img src={pro01.src} onDragStart={handleDragStart} role="presentation" />,
        <img src={pro01.src} onDragStart={handleDragStart} role="presentation" />,
        <img src={pro01.src} onDragStart={handleDragStart} role="presentation" />,
        <img src={pro01.src} onDragStart={handleDragStart} role="presentation" />,
        <img src={pro01.src} onDragStart={handleDragStart} role="presentation" />,
        <img src={pro01.src} onDragStart={handleDragStart} role="presentation" />,
        <img src={pro01.src} onDragStart={handleDragStart} role="presentation" />,
    ];



    return (
        <main>
            <Header />
            <section className="herosec mobilePhoneHero">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8" xs="12">
                            <div className="text-center">
                                <div className="mobilePhone">
                                    <div className="overlay"></div>
                                    <Image src={lfiPhone.src} />
                                </div>
                                <h1> Web3 in your pocket </h1>
                                <h3>A revolutionary smartphone that allows users to mint tokens and enter the crypto world seamlessly.</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="wrapSection mintInfoSec">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md="6" className="">
                            <div className="mintInfo">
                                <h2> Mint your TOKEN on phone </h2>
                                <ul className="mintListItem">
                                    <li>LFi blockchain powered smart phone.</li>
                                    <li> Mint your LFi tokens from your hand held phone that can be used access 1000s of financial instruments. </li>
                                    <li> Have a real time monitoring of your investments return and new opportunities. </li>
                                    <li> Welcome to a new world of connected Finance! </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="6" className="">
                            <div className="img-container">
                                {/* <Image src={mintToken.src} />  */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="specsSection">
                <Container>
                    <Row className="">
                        <Col md="4" className="">
                            <div className="specsBox box1">
                                <h2> Ultra Smooth Display </h2>
                                <Image src={smoothDisplay.src} />
                            </div>
                        </Col>

                        <Col md="4" className="">
                            <div className="specsBox box2">
                                <div className="textWrap">
                                    <h2> Powerful </h2>
                                    <h3> Processor </h3>
                                </div>
                                <Image src={octacoreCpu.src} />
                            </div>


                            <div className="specsBox box4">
                                <div className="textWrap">
                                    <h2> 5G </h2>
                                    <h3> Network </h3>
                                </div>
                                <Image src={network.src} />
                            </div>

                        </Col>
                        <Col md="4" className="">
                            <div className="specsBox box3">
                                <div className="textWrap">
                                    <h2> 64 MP </h2>
                                    <h3> Main camera </h3>
                                </div>
                                <Image src={mainCam.src} />
                            </div>
                        </Col>
                    </Row>

                    <Row className="">
                        <Col md="4" className="">
                            <div className="specsBox box5">
                                <div className="textWrap">
                                    <h2> Wireless </h2>
                                    <h4> Charger </h4>
                                </div>
                                <Image src={wirelessCharger.src} />
                            </div>
                        </Col>

                        <Col md="8" className="">
                            <div className="specsBox">
                                <div className="box6">
                                    <div className="textWrap">
                                        <h2> 6100 <span> mAh </span> </h2>
                                        <h3> Long lasting battery </h3>
                                    </div>
                                    <div className="wrapImg">
                                        <Image src={battery.src} />
                                    </div>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>



            <section className="fhdphoneSec">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <div className="fhdTitle">
                                <h2> 16.7cm (6.7'') FHD Fullscreen Ultra-High Resolution </h2>
                            </div>
                        </Col>

                        <Col md="10" className="fhdspec">
                            <div className="wrapImg">
                                <Image src={fhdphone.src} />
                            </div>
                            <ul>
                                <li> IPS 6.78 </li>
                                <li> 120Hz 396 DPI </li>
                                <li> Gorilla Glass</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="processorSec">
                <Container>
                    <Row>
                        <Col md="12" className="text-right">
                            <ul className="procesBulletList">
                                <li>
                                    <h3> Octa Cores </h3>
                                    <h5> Neural Engine </h5>
                                </li>

                                <li>
                                    <h3> 2 Cores A78 </h3>
                                    <h5> CPU </h5>
                                </li>

                                <li>
                                    <h3> 6 Cores A55 </h3>
                                    <h5> GPU </h5>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="wirelessChargerSec wrapSection wlchargre">
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="wcTextWrap">
                                <h4>Wireless Charger</h4>
                                <h2> 15W </h2>
                                <h4> with <span> USB-C </span>  </h4>
                            </div>
                        </Col>

                        {/* <Col md="9">
                            <div className="wlchargre"></div>   
                        </Col> */}
                    </Row>
                </Container>
            </section>




            <section className="ramBannerImg">
                <Image src={rambanner.src} />
            </section>



            <section className="specsSection">
                <Container>
                    <Row className="">
                        <Col md="12" className="specsBox box7">
                            <div className="textWrap">
                                <h2> 256GB </h2>
                                <h4> Large Storage </h4>
                            </div>
                            <div className="ImageWrap">
                                <Image src={qubeimg.src} />
                            </div>
                        </Col>
                    </Row>

                    <Row className="">
                        <Col md="6" className="">
                            <div className="specsBox box8">
                                <div className="textWrap">
                                    <h2> Fast Side Fingerprint </h2>
                                    <h3> Faster then you think </h3>
                                </div>
                                <Image src={fingerprint.src} />
                            </div>
                        </Col>

                        <Col md="6" className="">
                            <div className="specsBox box5">
                                <div className="textWrap">
                                    <h2> Deep Audio System </h2>
                                </div>
                                <Image src={audiosystem.src} />
                            </div>
                        </Col>


                    </Row>
                </Container>
            </section>

            <section className="mainCameraSec">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="wrapTitle text-center">
                                <h2> AI Triple Camera </h2>
                                <h4> See every Details </h4>
                            </div>

                            <div className="cameraImgBox">
                                {/* <Image src={mainCamera.src} />  */}
                                <ul className="cameraList">
                                    <li className="line1">
                                        <div className="text">
                                            <h2> 64MP </h2>
                                            <h5> Primary Camera </h5>
                                        </div>
                                    </li>
                                    <li className="line2">
                                        <div className="text">
                                            <h2> 64MP </h2>
                                            <h5> Primary Camera </h5>
                                        </div>
                                    </li>
                                    <li className="line3">
                                        <div className="text">
                                            <h2> 64MP </h2>
                                            <h5> Primary Camera </h5>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section className="wrapSection">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="wrapTitle">
                                <h3> Super night view </h3>
                                <h5> Capture the light, even at night </h5>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <div className="wrapImg">
                                <Image src={nightview01.src} />
                            </div>
                        </Col>

                        <Col md="6">
                            <div className="wrapImg">
                                <Image src={nightview02.src} />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>





            <section className="wideangleSec">
                <div className="wrapTitle text-center">
                    <h2>  Wide-angle distortion algorithm </h2>
                </div>
                <div className="wrapImg">
                    <Image src={wideangle.src} />
                </div>
            </section>




            <section className="continuousShotsSec">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="wrapTitle text-center">
                                <h3> Continuous Shots Support </h3>
                                <h5> Shoot like a pro ! </h5>
                            </div>

                            <div className="wrapImg">
                                <Image src={continuousShots.src} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="aliceCarouselSec">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="wrapTitle">
                                <h3> Take  photos like a pro </h3>
                                <h5> Capture the light, even at night </h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <AliceCarousel mouseTracking items={items} responsive={responsive} />
            </section>


            <section className="specsSec">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="specsSecList">
                                <ul>
                                    <li>
                                        <Dimensions/>
                                        <h4> Dimensions </h4>
                                        <h6> 168.7*76.9*11mm </h6>
                                    </li>

                                    <li>
                                        <Dimensions/>
                                        <h4> CPU </h4>
                                        <h6> Octa Cores </h6>
                                    </li>

                                    <li>
                                        <Dimensions/>
                                        <h4> Network </h4>
                                        <h6> 2G / 3G / 4G / 5G </h6>
                                    </li>

                                    <li>
                                        <Dimensions/>
                                        <h4> Memory </h4>
                                        <h6> 12GB RAM / 256GB ROM </h6>
                                    </li>

                                    <li>
                                        <Dimensions/>
                                        <h4> OS </h4>
                                        <h6> Android 13 </h6>
                                    </li>

                                    <li>
                                        <Dimensions/>
                                        <h4> Dimensions </h4>
                                        <h6> 168.7*76.9*11mm </h6>
                                    </li>

                                    <li>
                                        <Dimensions/>
                                        <h4> CPU </h4>
                                        <h6> Octa Cores </h6>
                                    </li>

                                    <li>
                                        <Dimensions/>
                                        <h4> Network </h4>
                                        <h6> 2G / 3G / 4G / 5G </h6>
                                    </li>

                                    <li>
                                        <Dimensions/>
                                        <h4> Memory </h4>
                                        <h6> 12GB RAM / 256GB ROM </h6>
                                    </li>

                                    <li>
                                        <Dimensions/>
                                        <h4> OS </h4>
                                        <h6> Android 13 </h6>
                                    </li>

                                    <li>
                                        <Dimensions/>
                                        <h4> Dimensions </h4>
                                        <h6> 168.7*76.9*11mm </h6>
                                    </li>

                                    <li>
                                        <Dimensions/>
                                        <h4> CPU </h4>
                                        <h6> Octa Cores </h6>
                                    </li>

                                    <li>
                                        <Dimensions/>
                                        <h4> Network </h4>
                                        <h6> 2G / 3G / 4G / 5G </h6>
                                    </li>

                                    <li>
                                        <Dimensions/>
                                        <h4> Memory </h4>
                                        <h6> 12GB RAM / 256GB ROM </h6>
                                    </li>

                                    <li>
                                        <Dimensions/>
                                        <h4> OS </h4>
                                        <h6> Android 13 </h6>
                                    </li>

                                    
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </section>



            <Footer />
        </main>
    )
}



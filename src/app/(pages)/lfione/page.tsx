'use client'
import React, { useState } from "react";
import jquery from "jquery";

import Head from "next/head";
import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useTransform, useScroll, useInView } from "framer-motion";

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
import pro02 from "../../../../public/img/pro2.png";
import pro03 from "../../../../public/img/pro3.png";
import pro04 from "../../../../public/img/pro4.png";
import pro05 from "../../../../public/img/pro5.png";

import Dimensions from "../../../../public/img/specsIcon/dimensions.svg";
import Battery from "../../../../public/img/specsIcon/battery.svg";
import Camera4kHD from "../../../../public/img/specsIcon/camera4kHD.svg";
import Cpu from "../../../../public/img/specsIcon/cpu.svg";
import Flash from "../../../../public/img/specsIcon/flash.svg";
import Hdr from "../../../../public/img/specsIcon/hdr.svg";
import Network from "../../../../public/img/specsIcon/network.svg";
import Operatingsystem from "../../../../public/img/specsIcon/operating-system.svg";
import Ram from "../../../../public/img/specsIcon/ram.svg";
import Rearcamera from "../../../../public/img/specsIcon/rearcamera.svg";
import Sensors from "../../../../public/img/specsIcon/sensors.svg";
import Size from "../../../../public/img/specsIcon/size.svg";
import Sound from "../../../../public/img/specsIcon/sound.svg";
import VideoPlayback from "../../../../public/img/specsIcon/video-playback.svg";
import WirelessCharger from "../../../../public/img/specsIcon/wireless-charger.svg";

import lyotechlabs from "../../../../public/img/certs-lyotechlabs.png";


import dynamic from "next/dynamic";

export default function Lfione() {

    const [dynamicClass, setDynamicClass] = useState('');
    const changevalueonScroll=()=>{
        const scrollvalue=document.documentElement.scrollTop;        
        
        if(scrollvalue > 70){
            setDynamicClass('show');
        }
        else {
            setDynamicClass('');
        }
    }

    useEffect(() => {       
        window.addEventListener('scroll', changevalueonScroll);
        return ()=>{
            window.removeEventListener('scroll', changevalueonScroll);
        }
        
    },[]);

    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
        ssr: false,
    });

    const Responsive = {
        0: {
            item: 1,
            margin: 25,
        },

        768: {
            item: 2,
            margin: 20,
        },

        1024: {
            item: 4,
            margin: 18,
        }
    }

    useEffect(() => {
        window.$ = window.jQuery = jquery;
    })


    return (
        <main>        

            <Header />
            <section className="mobileNameHead">
                <Container>
                    <Navbar className={`nameBar ${dynamicClass}`} >
                        <Navbar.Brand href="#">LFi One </Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link href="/lfione" className="active">Overview</Nav.Link>
                            <Nav.Link href="/techspecs">Tech Specs</Nav.Link>
                            <Nav.Link href="https://lyotechlabs.com/product/lfi-smartphone/" className="buybtn">Buy Now</Nav.Link>
                        </Nav>
                    </Navbar>

                </Container>
            </section>

            <section className="herosec mobilePhoneHero">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8" xs="12">
                            <div className="text-center">
                                <div className="mobilePhone">
                                    <div className="overlay"></div>
                                    <Image src={lfiPhone.src} />
                                    <h1> LFi One </h1>
                                </div>
                                <h2> Web3 in your pocket </h2>
                                <h3>A revolutionary smartphone that allows users to mint tokens and enter the crypto world seamlessly.</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="wrapSection mintInfoSec">
                <Container>
                    <Row className="justify-content-center align-items-center">

                        <Col md="7" className="">
                            <div className="img-container">
                                {/* <Image src={mintToken.src} />  */}
                            </div>
                        </Col>


                        <Col md="5" className="">
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
                                <h2> 16.7cm (6.7&Prime;) FHD Fullscreen Ultra-High Resolution </h2>
                            </div>
                        </Col>

                        <Col md="12" className="fhdspec">
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
                        <Col md="12">
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

            <section className="wirelessChargerSec wrapSection wlchargre fullView">
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
                                            <h2> 20MP </h2>
                                            <h5> Super wide camera</h5>
                                        </div>
                                    </li>
                                    <li className="line3">
                                        <div className="text">
                                            <h2> 5MP </h2>
                                            <h5> Macro Camera  </h5>
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
                <OwlCarousel loop={true} responsive={Responsive}>
                    <div className="item">
                        <Image src={pro01.src} />
                    </div>
                    <div className="item">
                        <Image src={pro02.src} />
                    </div>
                    <div className="item">
                        <Image src={pro03.src} />
                    </div>
                    <div className="item">
                        <Image src={pro04.src} />
                    </div>
                    <div className="item">
                        <Image src={pro05.src} />
                    </div>
                </OwlCarousel>
            </section>

            <section className="specsSec">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="wrapTitle text-center">
                                <h3> Specifications </h3>
                                {/* <h5> Shoot like a pro ! </h5> */}
                            </div>

                            <div className="specsSecList">
                                <ul>
                                    <li>
                                        <Dimensions />
                                        <h4> Dimensions </h4>
                                        <h6> 168.7*76.9*11mm </h6>
                                    </li>
                                    <li>
                                        <Cpu />
                                        <h4> CPU </h4>
                                        <h6> Octa Cores </h6>
                                    </li>
                                    <li>
                                        <Network />
                                        <h4> Network </h4>
                                        <h6> 2G / 3G / 4G / 5G </h6>
                                    </li>
                                    <li>
                                        <Ram />
                                        <h4> Memory </h4>
                                        <h6> 12GB RAM / 256GB ROM </h6>
                                    </li>
                                    <li>
                                        <Operatingsystem />
                                        <h4> Software  </h4>
                                        <h6> LFi Software </h6>
                                    </li>
                                    <li>
                                        <Size />
                                        <h4> Display </h4>
                                        <h6> FHD+ @ 120Hz 396 DPI </h6>
                                    </li>
                                    <li>
                                        <Sensors />
                                        <h4> Sensors </h4>
                                        <h6> Compass, Gyro, IR </h6>
                                    </li>
                                    <li>
                                        <Sound />
                                        <h4> Audio </h4>
                                        <h6> Deep Audio System </h6>
                                    </li>
                                    <li>
                                        <Battery />
                                        <h4> Battery </h4>
                                        <h6> 6100mAh / Up to 15 hours </h6>
                                    </li>
                                    <li>
                                        <WirelessCharger />
                                        <h4> Charger </h4>
                                        <h6> Wireless Charger / USB-C </h6>
                                    </li>
                                    <li>
                                        <Rearcamera />
                                        <h4> Rear Camera </h4>
                                        <h6> Sony IMX686 , 64MP </h6>
                                    </li>
                                    <li>
                                        <Flash />
                                        <h4> Flash </h4>
                                        <h6> Dual Flash LED </h6>
                                    </li>
                                    <li>
                                        <Hdr />
                                        <h4> Camera Modes </h4>
                                        <h6> HDR / Super night view </h6>
                                    </li>
                                    <li>
                                        <Camera4kHD />
                                        <h4> Recording </h4>
                                        <h6> 4K at 30fps </h6>
                                    </li>
                                    <li>
                                        <VideoPlayback />
                                        <h4> Playback </h4>
                                        <h6> AVI, MP4, WMV, RMVB </h6>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-center mt-5">

                                <div className="powerImg mb-5">
                                    <Image src={lyotechlabs.src} />
                                </div>

                                <Button as="a" variant="primary" href="https://lyotechlabs.com/product/lfi-smartphone/">
                                    Buy Now
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



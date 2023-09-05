'use client'
import React from "react";
import Head from "next/head";

import { Metadata } from 'next';

import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";

import { useRef, useEffect } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Container, Tab, Tabs, Nav, Navbar, NavDropdown, Button, Image, Row, Col } from 'react-bootstrap';



import utoday from "../../../../public/img/seenOn/utoday.png";
import coingap from "../../../../public/img/seenOn/coingap.png";
import techBulliontransparent from "../../../../public/img/seenOn/techBulliontransparent.png";
import techtimes from "../../../../public/img/seenOn/tech-times.png";
import coinpedia from "../../../../public/img/seenOn/coin-pedia.png";
import cryptodotnews from "../../../../public/img/seenOn/cryptonews.png";
import coincodex from "../../../../public/img/seenOn/coincodex.png";
import blockonomi from "../../../../public/img/seenOn/blockonomi.png";
import cryptonoticias from "../../../../public/img/seenOn/cryptonoticias.png";
import criptotendencias from "../../../../public/img/seenOn/criptotendencias.png";
import diarioBitcoin_logo from "../../../../public/img/seenOn/DiarioBitcoin_logo.png";
import cointimes from "../../../../public/img/seenOn/cointimes.png";
import guiadoinvestidor from "../../../../public/img/seenOn/guiadoinvestidor.png";
import bitnoticias from "../../../../public/img/seenOn/bitnoticias.png";
import cryptonews from "../../../../public/img/seenOn/crypto-news.png";
import cryptobreakingnews from "../../../../public/img/seenOn/crypto-breaking-news.png";
import cryptoresearch from "../../../../public/img/seenOn/crypto-research.png";
import bscnews from "../../../../public/img/seenOn/bsc-news.png";
import finbold from "../../../../public/img/seenOn/finbold.png";
import newsonjapan from "../../../../public/img/seenOn/newsonjapan.png";
import coinpaper from "../../../../public/img/seenOn/coinpaper.png";




export default function AsSeenOn() {
    const buttRef = useRef(null);
    const { scrollYProgress } = useScroll();

    // top progressbar animation
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    return (
        <>
            <Head>
                <title> Tokens page </title>
            </Head>
            <Header />

            <section className="logosec">
                <Container>
                    <Row className="">
                        <Col md="12" className="">
                            <div className="infoText text-center">
                                <h2> AS SEEN ON  </h2>
                            </div>

                            <ul className="logoList">
                                <li>
                                    <a href="https://u.today/exploring-the-three-layers-of-lfi-and-its-benefits-for-crypto-users" target="_blank">
                                        <img src={utoday.src} alt="utoday" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://coingape.com/sponsored/building-a-brighter-financial-future-with-lfis-ecosystem-what-why-and-how/" target="_blank">
                                        <img src={coingap.src} alt="coingap" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://techbullion.com/lfi-partners-with-lyotech-labs-to-create-lfi-one-a-smartphone-to-mint-tokens/" target="_blank">
                                        <img src={techBulliontransparent.src} alt="techBulliontransparent" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.techtimes.com/articles/289211/20230322/minting-device-put-pocket-smartphone.htm" target="_blank">
                                        <img src={techtimes.src} alt="techtimes" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://coinpedia.org/sponsored/everything-you-need-to-know-about-lfi-the-peoples-platform/" target="_blank">
                                        <img src={coinpedia.src} alt="coinpedia" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://crypto.news/lfi-one-launched-a-smartphone-and-minting-device/" target="_blank">
                                        <img src={cryptodotnews.src} alt="cryptodotnews" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://coincodex.com/article/27604/exploring-every-layer-of-lfi-the-decentralized-network-for-the-people/" target="_blank">
                                        <img src={coincodex.src} alt="coincodex" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://blockonomi.com/the-different-modes-of-minting-by-lfi/" target="_blank">
                                        <img src={blockonomi.src} alt="blockonomi" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.criptonoticias.com/negocios/lfi-lyotech-labs-crean-telefono-inteligente-acunar-tokens/" target="_blank">
                                        <img src={cryptonoticias.src} alt="cryptonoticias" />
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.criptotendencias.com/empresa/los-tokens-lfi-y-clfi-hacen-su-debut-en-lyotrade-y-lbank-un-salto-adelante-para-las-redes-descentralizadas/" target="_blank">
                                        <img src={criptotendencias.src} alt="criptotendencias" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.diariobitcoin.com/articulos-patrocinados/lfi-one-el-telefono-inteligente-que-puede-acunar-tokens/" target="_blank">
                                        <img src={diarioBitcoin_logo.src} alt="diarioBitcoin_logo" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://cointimes.com.br/lfi-faz-parceria-com-a-lyotech-labs-para-criar-o-lfi-one-um-smartphone-para-cunhar-tokens/" target="_blank">
                                        <img src={cointimes.src} alt="cointimes" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://guiadoinvestidor.com.br/lfi-one-o-smartphone-que-pode-cunhar-tokens/" target="_blank">
                                        <img src={guiadoinvestidor.src} alt="guiadoinvestidor" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://bitnoticias.com.br/comunicado-de-imprensa/os-tokens-lfi-e-clfi-fazem-sua-estreia-no-lyotrade-e-no-lbank-um-salto-para-as-redes-descentralizadas/" target="_blank">
                                        <img src={bitnoticias.src} alt="bitnoticias" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://it.cryptonews.com/news/lfi-one-lo-smartphone-che-puo-coniare-token.htm" target="_blank">
                                        <img src={cryptonews.src} alt="cryptonews" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.cryptobreaking.com/trade-lfi-and-clfi-tokens-on-lyotrade/" target="_blank">
                                        <img src={cryptobreakingnews.src} alt="cryptobreakingnews" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://cryptoresearch.report/crypto-research/rent-minting-hardware-and-collect-token-rewards-with-lfi/" target="_blank">
                                        <img src={cryptoresearch.src} alt="cryptoresearch" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.bsc.news/post/lfi-a-decentralized-ecosystem-owned-by-its-users" target="_blank">
                                        <img src={bscnews.src} alt="bscnews" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://finbold.com/lyotech-labs-celebrates-the-first-150-recipients-of-the-lfi-one-smartphone/" target="_blank">
                                        <img src={finbold.src} alt="finbold" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://newsonjapan.com/html/newsdesk/article/138312.php" target="_blank">
                                        <img src={newsonjapan.src} alt="newsonjapan" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://coinpaper.com/1910/l-fi-s-cloud-x-minting-a-new-era-for-token-minting/" target="_blank">
                                        <img src={coinpaper.src} alt="coinpaper" />
                                    </a>
                                </li>
                            </ul>

                            {/* <div className="text-center">
                                <Button as="a" variant="primary" href="/lfione">
                                    As Seen On
                                </Button>
                            </div> */}

                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </>
    )
}

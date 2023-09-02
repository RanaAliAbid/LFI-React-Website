"use client";
import React from "react";

import { useRef, useEffect } from "react";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import {
  Container,
  Tab,
  Tabs,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Image,
  Row,
  Col,
} from "react-bootstrap";

import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";

export default function Career() {
  const buttRef = useRef(null);

  const ldolRef = useRef(null);
  const ldaoRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // top progressbar animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  // ldo box border animation
  const ldoborders = useScroll({
    target: ldolRef,
    offset: ["end end", "start start"],
  }).scrollYProgress;

  // vision mission path animation
  const scrollvisionProgressBar = useScroll({
    target: buttRef,
    offset: ["end end", "start start"],
  }).scrollYProgress;

  return (
    <main>
      <Header />

      <section className="herosec bg-career">
        <Container>
          <Row className="align-items-center text-center">
            <Col md="2" xs="12"></Col>
            <Col md="8" xs="12">
              <div className="hero">
                <h1> Be the part of LFi Team </h1>
                <h3>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  consequat metus eget porta suscipit. Maecenas vel arcu a
                  lectus mollis pretium hasellus et magna.{" "}
                </h3>
              </div>
            </Col>
            <Col md="2" xs="12"></Col>
          </Row>
        </Container>
      </section>

      <section className="careerSec mt-10">
        <Container>
          <Row>
            <Col xs="12">
              <h2> Current Opening </h2>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <div className="vacancyType">
                <div className="vacancyInfo">
                  <h3>
                    Front End Developer <span>Dubai, UAE</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor. Vestibulum in tortor et felis volutpat
                    viverra sit amet sed libero.
                  </p>

                  <h4>Development | Full Time</h4>
                </div>

                <div className="vacancyAction">
                  <Button as="a" variant="primary" href="#">
                    Email Your Cv
                  </Button>
                </div>
              </div>
            </Col>

            <Col md="12">
              <div className="vacancyType">
                <div className="vacancyInfo">
                  <h3>
                    Front End Developer <span>Dubai, UAE</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor. Vestibulum in tortor et felis volutpat
                    viverra sit amet sed libero.
                  </p>

                  <h4>Development | Full Time</h4>
                </div>

                <div className="vacancyAction">
                  <Button as="a" variant="primary" href="#">
                    Email Your Cv
                  </Button>
                </div>
              </div>
            </Col>

            <Col md="12">
              <div className="vacancyType">
                <div className="vacancyInfo">
                  <h3>
                    Front End Developer <span>Dubai, UAE</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor. Vestibulum in tortor et felis volutpat
                    viverra sit amet sed libero.
                  </p>

                  <h4>Development | Full Time</h4>
                </div>

                <div className="vacancyAction">
                  <Button as="a" variant="primary" href="#">
                    Email Your Cv
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mt-10">
        <Container>
          <Row>
            <Col xs="12">
              <div className="careerSubBanner text-center">
                <h2>Wants to join our company? </h2>
                <h3>If you think you are a good fit. Contact us directly. </h3>
                <div className="vacancyAction">
                  <Button as="a" variant="black" href="#">
                    Email Your Cv
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

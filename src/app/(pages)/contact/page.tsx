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
  FormGroup,
  Row,
  Col,
} from "react-bootstrap";

import Form from 'react-bootstrap/Form'
import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";
import ContactBanner from "../../../../public/img/contactBanner.png";


export default function Contact() {
  const buttRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // top progressbar animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <main>
      <Header />

      <section className="wrapSection herosec fullView">
        <Container>
          <Row className="align-items-center">
            <Col md="6" sm="6" xs="12">
              <div className="hero">
                <h1> Contact Us</h1>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  consequat metus eget porta suscipit. Maecenas vel arcu a
                  lectus mollis pretium hasellus et magna.
                </h3>
              </div>
            </Col>
            <Col md="6" sm="6" xs="12">
              <div className="text-center heroImg">
                <Image src={ContactBanner.src} className="rot" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section className="contactFormWrap">
        <Container>
          <Row>
            <Col xs="12">
              <div className="infoText">
                <h3> Get in Touch </h3>
              </div>
            </Col>
          </Row>

          <Form>
            <Row>
              <Col md="6">
                <Form.Group>
                  <Form.Control placeholder="First Name" />
                </Form.Group>
              </Col>

              <Col md="6">
                <Form.Group>
                  <Form.Control placeholder="Last Name" />
                </Form.Group>
              </Col>

              <Col md="6">
                <Form.Group>
                  <Form.Control placeholder="Email" />
                </Form.Group>
              </Col>

              <Col md="6">
                <Form.Group >
                  <Form.Control type="Number" placeholder="Phone Number" />
                </Form.Group>
              </Col>

                <Col md="12">
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control placeholder="Message" as="textarea" rows={6} />
                </Form.Group>
                </Col>

              <Button variant="primary" type="submit">
                Save
              </Button>
            </Row>
          </Form>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

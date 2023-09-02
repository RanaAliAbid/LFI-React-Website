"use client";
import React, { useState } from "react";

import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";

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
  Form,
  Row,
  Col,
  Table,
} from "react-bootstrap";

import icon01 from "../../../../public/img/icon01.png";
import Analysis from "../../../../public/img/launchpad/analysis.svg";
import Early from "../../../../public/img/launchpad/early.svg";
import Exposure from "../../../../public/img/launchpad/exposure.svg";
import Financial from "../../../../public/img/launchpad/financial.svg";
import Strength from "../../../../public/img/launchpad/strength.svg";
import Teamwork from "../../../../public/img/launchpad/teamwork.svg";
import Unlock from "../../../../public/img/launchpad/unlock.svg";
import Userprotection from "../../../../public/img/launchpad/user-protection.svg";

import Minter500 from "../../../../public/img/minter500.png";
import Minter1000 from "../../../../public/img/minter1000.png";
import CompareBannerDevices from "../../../../public/img/compareBannerDevices.png";

export default function CompareSpec() {
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

      <section className="herosec fullView">
        <Container>
          <Row className="justify-content-center">
            <Col md="10" xs="12">
              <div className="hero text-center mt-10">
                <motion.div
                  transition={{ ease: "easeIn", duration: 0.5 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
                  viewport={{ once: true }}
                >
                  <h1> Compare Specifications </h1>
                </motion.div>

                <motion.div
                  transition={{ ease: "easeIn", duration: 0.5, delay: 0.2 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur.
                  </h3>
                </motion.div>

                <Image src={CompareBannerDevices.src} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="compareMinter mt-10">
        <Container>
          <Row>
            <Col md="12">
              <div className="contentHeading">
                <h3>Select Minters</h3>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="4"></Col>

            <Col md="4">
              <div className="compareMinterItem text-center">
                <Image src={Minter500.src} />
                <h3>xLFi 500 Minter</h3>
                <Form.Select aria-label="Changes Minter">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </Col>

            <Col md="4">
              <div className="compareMinterItem text-center">
                <Image src={Minter1000.src} />
                <h3>xLFi 1000 Minter</h3>
                <Form.Select aria-label="Changes Minter">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="specTable">
        <Container>
          <Row>
            <Col md="12">
            <div className="contentHeading">
                <h4>Select Minters</h4>
              </div>
              <Table responsive variant="dark">
                <tbody>
                  <tr>
                    <td align="left">Wireless Frequency</td>
                    <td>2.4Ghz / 5Ghz</td>
                    <td>2.4Ghz / 5Ghz</td>
                  </tr>
                  <tr>
                    <td align="left">Connectivity Ports</td>
                    <td>N 1 LAN</td>
                    <td>1 WAN 1 LAN</td>
                  </tr>
                  <tr>
                    <td align="left">Power Source</td>
                    <td >External 12V power Adapter</td>
                    <td>110-220V</td>
                  </tr>

                  <tr>
                    <td align="left">Dimensions</td>
                    <td >14x13x6 cm</td>
                    <td>14x13x6 cm</td>
                  </tr>

                  <tr>
                    <td align="left">Build Material</td>
                    <td >Premium Plastic Case</td>
                    <td>Aluminum Case</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

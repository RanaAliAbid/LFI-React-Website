"use client";
import React, { useState } from "react";

import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";
import {
  motion,
  // MotionValue,
  useScroll,
  // useSpring,
  // useTransform,
  // useInView,
} from "framer-motion";
import {
  Container,
  // Tab,
  // Tabs,
  // Nav,
  // Navbar,
  // NavDropdown,
  // Button,
  Image,
  Form,
  Row,
  Col,
  Table,
} from "react-bootstrap";

import Minter500 from "../../../../public/img/minter500.png";
import Minter1000 from "../../../../public/img/minter1000.png";
import Minter5000 from "../../../../public/img/minter5000.png";
import Minter10000 from "../../../../public/img/minter10000.png";
import MinterValidator from "../../../../public/img/minterValidator.png";

import CompareBannerDevices from "../../../../public/img/compareBannerDevices.png";

export default function CompareSpec() {
  const { scrollYProgress } = useScroll();
  // top progressbar animation
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 20,
  //   restDelta: 0.001,
  // });

  const firstMinters: any = {
    500: {
      src: Minter500.src,
      name: "xLFi 500 Minter",
      frequency: "2.4Ghz / 5Ghz",
      port: "N 1 LAN",
      power: "External 12V power Adapter",
      dimensions: "14x13x6 cm",
      material: "Premium Plastic Case",
    },
    5000: {
      src: Minter5000.src,
      name: "xLFi 5000 Minter",
      frequency: "2.4Ghz / 5Ghz",
      port: "1 WAN 1 LAN",
      power: "110-220V",
      dimensions: "16x14x8 cm",
      material: "Aluminum Case",
    },
    10000: {
      src: Minter10000.src,
      name: "xLFi 10000 Minter",
      frequency: "2.4Ghz / 5Ghz",
      port: "1 WAN 1 LAN",
      power: "110-220V",
      dimensions: "20x15x10 cm",
      material: "Aluminum Case",
    },
    validator: {
      src: MinterValidator.src,
      name: "xLFi Validator",
      frequency: "2.4Ghz / 5Ghz",
      port: "1 WAN 1 LAN",
      power: "110-220V",
      dimensions: "20x15x10 cm",
      material: "Black Aluminum Case",
    },
  };

  const secondMinters: any = {
    500: {
      src: Minter500.src,
      name: "xLFi 500 Minter",
      frequency: "2.4Ghz / 5Ghz",
      port: "N 1 LAN",
      power: "External 12V power Adapter",
      dimensions: "14x13x6 cm",
      material: "Premium Plastic Case",
    },
    5000: {
      src: Minter5000.src,
      name: "xLFi 5000 Minter",
      frequency: "2.4Ghz / 5Ghz",
      port: "1 WAN 1 LAN",
      power: "110-220V",
      dimensions: "16x14x8 cm",
      material: "Aluminum Case",
    },
    10000: {
      src: Minter10000.src,
      name: "xLFi 10000 Minter",
      frequency: "2.4Ghz / 5Ghz",
      port: "1 WAN 1 LAN",
      power: "110-220V",
      dimensions: "20x15x10 cm",
      material: "Aluminum Case",
    },
    validator: {
      src: MinterValidator.src,
      name: "xLFi Validator",
      frequency: "2.4Ghz / 5Ghz",
      port: "1 WAN 1 LAN",
      power: "110-220V",
      dimensions: "20x15x10 cm",
      material: "Black Aluminum Case",
    },
  };

  const [selectedFirstMinter, setFirstMinter] = useState<string>("500");
  const [selectedSecondMinter, setSecondMinter] = useState<string>("5000");

  return (
    <main>
      <Header />

      <section className="herosec fullView heightAuto">
        <Container>
          <Row className="justify-content-center">
            <Col md="10" xs="12">
              <div className="hero text-center mt-10 mb-10">
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
              <div className="contentHeading mt-10">
                <h3>Select Minters</h3>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="4"></Col>

            <Col md="4">
              <div className="compareMinterItem text-center">

                <Image src={firstMinters?.[selectedFirstMinter]?.src} />

                <h3>{firstMinters?.[selectedFirstMinter]?.name}</h3>
                <Form.Select
                  aria-label="Changes Minter"
                  onChange={(e) => setFirstMinter(e.target.value)}
                  value={selectedFirstMinter}
                >
                  <option value="500">xLFi 500 Minter</option>
                  <option value="5000">xLFi 5000 Minter</option>
                  <option value="10000">xLFi 10000 Minter</option>
                  <option value="validator">xLFi Validator</option>
                </Form.Select>
              </div>
            </Col>

            <Col md="4">
              <div className="compareMinterItem text-center">

              <Image src={secondMinters?.[selectedSecondMinter]?.src} />


                {/* <Image src={Minter1000.src} /> */}
                <h3>{secondMinters?.[selectedSecondMinter]?.name}</h3>
                <Form.Select
                  aria-label="Changes Minter"
                  value={selectedSecondMinter}
                  onChange={(e) => setSecondMinter(e.target.value)}
                >
                  <option value="500">xLFi 500 Minter</option>
                  <option value="5000">xLFi 5000 Minter</option>
                  <option value="10000">xLFi 10000 Minter</option>
                  <option value="validator">xLFi Validator</option>
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
                <h4>Key Specifications</h4>
              </div>
              <Table responsive variant="dark">
                <tbody>
                  <tr>
                    <td align="left">Wireless Frequency</td>
                    <td>{firstMinters?.[selectedFirstMinter]?.frequency}</td>
                    <td>{secondMinters?.[selectedSecondMinter]?.frequency}</td>
                  </tr>

                  <tr>
                    <td align="left">Connectivity Ports</td>
                    <td>{firstMinters?.[selectedFirstMinter]?.port}</td>
                    <td>{secondMinters?.[selectedSecondMinter]?.port}</td>
                  </tr>

                  <tr>
                    <td align="left">Power Source</td>
                    <td>{firstMinters?.[selectedFirstMinter]?.power}</td>
                    <td>{secondMinters?.[selectedSecondMinter]?.power}</td>
                  </tr>

                  <tr>
                    <td align="left">Dimensions</td>
                    <td>{firstMinters?.[selectedFirstMinter]?.dimensions}</td>
                    <td>{secondMinters?.[selectedSecondMinter]?.dimensions}</td>
                  </tr>

                  <tr>
                    <td align="left">Build Material</td>
                    <td>{firstMinters?.[selectedFirstMinter]?.material}</td>
                    <td>{secondMinters?.[selectedSecondMinter]?.material}</td>
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

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowRight, FaRocket } from 'react-icons/fa';
import './CTA.css';

const CTA = () => {
  return (
    <section id="contact" className="cta-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="cta-icon"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaRocket />
              </motion.div>
              <h2 className="cta-title">
                Let's Work Together
              </h2>
              <p className="cta-description">
                Have a project in mind? Get in touch and let's discuss how we can help.
              </p>
              <motion.div
                className="cta-buttons"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Button
                  as={Link}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn-cta-primary me-3 mb-3"
                  size="lg"
                >
                  Contact Us <FaArrowRight className="ms-2" />
                </Button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <div className="cta-shapes">
        <div className="cta-shape cta-shape-1"></div>
        <div className="cta-shape cta-shape-2"></div>
        <div className="cta-shape cta-shape-3"></div>
      </div>
    </section>
  );
};

export default CTA;


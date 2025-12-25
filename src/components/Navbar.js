import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BootstrapNavbar.Brand as={Link} to="home" spy={true} smooth={true} offset={-70} duration={500} className="brand">
            <span className="brand-text">Sammunat LLC</span>
          </BootstrapNavbar.Brand>
        </motion.div>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="home" spy={true} smooth={true} offset={-70} duration={500}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="features" spy={true} smooth={true} offset={-70} duration={500}>
              Features
            </Nav.Link>
            <Nav.Link as={Link} to="about" spy={true} smooth={true} offset={-70} duration={500}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="testimonials" spy={true} smooth={true} offset={-70} duration={500}>
              Testimonials
            </Nav.Link>
            <Nav.Link as={Link} to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;


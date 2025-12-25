import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <h4 className="footer-brand">Sammunat LLC</h4>
            <p className="footer-description">
              Simple solutions for your business needs.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </Col>
          <Col md={2}>
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="features" spy={true} smooth={true} offset={-70} duration={500}>
                  Features
                </Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="testimonials" spy={true} smooth={true} offset={-70} duration={500}>
                  Testimonials
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="footer-title">Support</h5>
            <ul className="footer-links">
              <li><a href="/help">Help Center</a></li>
              <li><a href="/docs">Documentation</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="footer-title">Contact</h5>
            <ul className="footer-contact">
              <li>
                <FaEnvelope className="contact-icon" />
                <span>info@sammunat.com</span>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>Your City, Your State</span>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Sammunat LLC. All rights reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;


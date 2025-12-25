import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaUsers, FaProjectDiagram } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    {
      icon: <FaUsers />,
      number: '500+',
      label: 'Clients',
      color: '#FF9933'
    },
    {
      icon: <FaProjectDiagram />,
      number: '200+',
      label: 'Projects',
      color: '#FF8C00'
    }
  ];

  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="about-title">
                About <span className="gradient-text">Sammunat LLC</span>
              </h2>
              <p className="about-description">
                We're a small team that focuses on getting things done right. 
                No fancy promises, just honest work and results.
              </p>
              <p className="about-description">
                We've been helping businesses solve problems for years. 
                Simple solutions, fair prices, and people you can actually talk to.
              </p>
              <motion.div
                className="about-features"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="about-feature-item">
                  <span className="check-icon">✓</span>
                  <span>Quick response times</span>
                </div>
                <div className="about-feature-item">
                  <span className="check-icon">✓</span>
                  <span>Fair pricing</span>
                </div>
                <div className="about-feature-item">
                  <span className="check-icon">✓</span>
                  <span>No hidden fees</span>
                </div>
              </motion.div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              className="stats-grid"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <div className="stat-icon" style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;


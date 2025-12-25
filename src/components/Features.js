import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  FaRocket,
  FaShieldAlt,
  FaMobileAlt
} from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <FaRocket />,
      title: 'Fast Delivery',
      description: 'We get things done quickly without cutting corners.',
      color: '#FF9933'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure',
      description: 'Your data stays safe with us.',
      color: '#FF8C00'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Works Everywhere',
      description: 'Perfect on phones, tablets, and computers.',
      color: '#FF7F00'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="features" className="features-section">
      <Container>
        <motion.div
          className="section-header text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            Simple solutions that work
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row className="g-4 justify-content-center">
            {features.map((feature, index) => (
              <Col md={6} lg={4} key={index} style={{ maxWidth: '400px' }}>
                <motion.div
                  className="feature-card"
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="feature-icon"
                    style={{ color: feature.color }}
                  >
                    {feature.icon}
                  </div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Features;


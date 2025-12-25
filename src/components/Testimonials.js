import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      image: '👨',
      rating: 5,
      text: 'They delivered exactly what they promised. Simple, fast, and affordable. Would work with them again.'
    },
    {
      name: 'Priya Sharma',
      role: 'Store Manager',
      image: '👩',
      rating: 5,
      text: 'Great service and easy to work with. They understood what we needed and got it done quickly.'
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <Container>
        <motion.div
          className="section-header text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">
            Real feedback from people we've worked with
          </p>
        </motion.div>
        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col md={4} key={index}>
              <motion.div
                className="testimonial-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.image}</div>
                  <div className="author-info">
                    <h5 className="author-name">{testimonial.name}</h5>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;


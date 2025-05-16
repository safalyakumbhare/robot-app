import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <div className="text-center py-5">
            <h1>Welcome to Robot Delivery Service</h1>
            <p className="lead">
              Experience the future of autonomous delivery with our cutting-edge robot delivery system.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Fast Delivery</Card.Title>
              <Card.Text>
                Our autonomous robots ensure quick and efficient delivery of your packages.
              </Card.Text>
              <Link to="/order">
                <Button variant="primary">Place Order</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Real-Time Tracking</Card.Title>
              <Card.Text>
                Track your delivery in real-time with our advanced GPS tracking system.
              </Card.Text>
              <Link to="/tracking">
                <Button variant="primary">Track Order</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Secure Delivery</Card.Title>
              <Card.Text>
                OTP-based verification ensures your package is delivered safely.
              </Card.Text>
              <Link to="/about">
                <Button variant="primary">Learn More</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>How It Works</h2>
          <ol className="mt-3">
            <li>Place your order through our easy-to-use interface</li>
            <li>Receive an OTP for secure package retrieval</li>
            <li>Track your delivery in real-time</li>
            <li>Enter the OTP when the robot arrives to receive your package</li>
          </ol>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
